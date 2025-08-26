// src/api/mock.ts
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { http } from './http'

export type Skill = { id: string; name: string; level: number }
export type Badge = { id: string; name: string; description: string }

const LS_KEY = 'skillboard::skills'

function load(): Skill[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(LS_KEY) || '[]')
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}
function save(data: Skill[]) {
  localStorage.setItem(LS_KEY, JSON.stringify(data))
}
function delay<T>(data: T, ms = 200) {
  return new Promise<T>((r) => setTimeout(() => r(data), ms))
}

function computeBadges(skills: Skill[]): Badge[] {
  const levels = skills.map((s) => Number(s.level || 0))
  const total = skills.length
  const avg = total ? levels.reduce((a, n) => a + n, 0) / total : 0
  const count5 = levels.filter((n) => n >= 5).length
  const count4 = levels.filter((n) => n >= 4).length
  const count3 = levels.filter((n) => n >= 3).length

  const out: Badge[] = []

  // 1) Well-Rounded: promedio ≥ 3.5
  if (avg >= 3.5) out.push({ id: 'b1', name: 'Well-Rounded', description: 'Average ≥ 3.5' })
  // 2) Mastermind: promedio ≥ 4.5
  if (avg >= 4.5) out.push({ id: 'b2', name: 'Mastermind', description: 'Average ≥ 4.5' })
  // 3) Expert Trio: ≥ 3 skills en nivel 5
  if (count5 >= 3) out.push({ id: 'b3', name: 'Expert Trio', description: '3+ skills at level 5' })
  // 4) Perfectionist: ≥ 5 skills en nivel 5
  if (count5 >= 5)
    out.push({ id: 'b4', name: 'Perfectionist', description: '5+ skills at level 5' })
  // 5) Climber: ≥ 5 skills en nivel ≥ 4
  if (count4 >= 5) out.push({ id: 'b5', name: 'Climber', description: '5+ skills at level ≥ 4' })
  // 6) High Achiever: ≥ 8 skills en nivel ≥ 4
  if (count4 >= 8)
    out.push({ id: 'b6', name: 'High Achiever', description: '8+ skills at level ≥ 4' })
  // 7) Persistent: ≥ 8 skills totales
  if (total >= 8) out.push({ id: 'b7', name: 'Persistent', description: '8+ skills tracked' })
  // 8) Generalist: ≥ 10 skills totales
  if (total >= 10) out.push({ id: 'b8', name: 'Generalist', description: '10+ skills tracked' })
  // 9) Marathon: ≥ 15 skills totales
  if (total >= 15) out.push({ id: 'b9', name: 'Marathon', description: '15+ skills tracked' })
  // 10) Steady Growth: ≥ 6 skills en nivel ≥ 3
  if (count3 >= 6)
    out.push({ id: 'b10', name: 'Steady Growth', description: '6+ skills at level ≥ 3' })

  return out
}

// ---- helpers para mock ----
function readBody(cfg: InternalAxiosRequestConfig): any {
  const d = cfg.data
  if (d == null) return {}

  // String JSON
  if (typeof d === 'string') {
    try {
      return JSON.parse(d)
    } catch {
      return {}
    }
  }

  // FormData
  if (typeof FormData !== 'undefined' && d instanceof FormData) {
    const o: Record<string, any> = {}
    d.forEach((v, k) => {
      o[k] = v
    })
    return o
  }

  // URLSearchParams
  if (typeof URLSearchParams !== 'undefined' && d instanceof URLSearchParams) {
    const o: Record<string, any> = {}
    d.forEach((v, k) => {
      o[k] = v
    })
    return o
  }

  // Objeto ya serializado por Axios
  return d
}

function buildResponse<T>(
  cfg: InternalAxiosRequestConfig,
  data: T,
  status = 200,
  statusText = 'OK',
): AxiosResponse<T> {
  return { data, status, statusText, headers: {}, config: cfg }
}

// 🚀 Interceptamos la REQUEST y colocamos un adapter que responde localmente
http.interceptors.request.use((cfg: InternalAxiosRequestConfig) => {
  const path = `${cfg.baseURL ?? ''}${cfg.url ?? ''}` // p.ej. "/api" + "/skills" => "/api/skills"
  const method = (cfg.method || 'get').toLowerCase()

  // Solo rutas del mock
  if (!path.startsWith('/api/')) return cfg

  // Inyectamos un adapter que devuelve la respuesta simulada
  cfg.adapter = async () => {
    let skills = load()

    // GET /skills
    if (path === '/api/skills' && method === 'get') {
      return delay(buildResponse(cfg, skills))
    }

    // POST /skills
    if (path === '/api/skills' && method === 'post') {
      const body = readBody(cfg)
      const item: Skill = {
        id: crypto.randomUUID(),
        name: String(body?.name ?? ''),
        level: Number(body?.level ?? 0),
      }
      skills = [...skills, item]
      save(skills)
      return delay(buildResponse(cfg, item, 201, 'Created'))
    }

    // PATCH /skills/:id
    const m = path.match(/^\/api\/skills\/(.+)$/)
    if (m && method === 'patch') {
      const id = m[1]
      const patch = readBody(cfg)
      const idx = skills.findIndex((s) => s.id === id)
      if (idx === -1) {
        return delay(buildResponse(cfg, { message: 'Not Found' } as any, 404, 'Not Found'))
      }
      const updated: Skill = {
        ...skills[idx],
        ...(patch.name !== undefined ? { name: String(patch.name) } : {}),
        ...(patch.level !== undefined ? { level: Number(patch.level) } : {}),
      }
      skills[idx] = updated
      save(skills)
      return delay(buildResponse(cfg, updated))
    }

    // DELETE /skills/:id
    if (m && method === 'delete') {
      const id = m[1]
      const before = skills.length
      skills = skills.filter((s) => s.id !== id)
      save(skills)
      const code = skills.length < before ? 204 : 404
      return delay(buildResponse(cfg, null as any, code, code === 204 ? 'No Content' : 'Not Found'))
    }

    // GET /badges
    if (path === '/api/badges' && method === 'get') {
      const badges = computeBadges(skills)
      return delay(buildResponse(cfg, badges))
    }

    // Si no matchea, 404 simulado
    return delay(buildResponse(cfg, { message: 'Not Found' } as any, 404, 'Not Found'))
  }

  return cfg
})
