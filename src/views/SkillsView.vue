<template>
  <div class="skills-dark min-h-screen flex flex-col items-center py-10 px-2">
    <h1 class="skills-dark-title mb-8">Tus Skills</h1>

    <!-- Formulario -->
    <div class="skills-dark-form-card">
      <span class="skills-dark-icon">✨</span>
      <div class="skills-dark-form-content">
        <div class="skills-dark-form-name">Agregar Skill</div>
        <form class="skills-dark-form" style="display: flex; flex-wrap: wrap; gap: 0.7rem; align-items: center;">
          <input type="text" placeholder="Ejemplo: CSS, Vue.js, etc." class="skills-dark-input" disabled />
          <select class="skills-dark-select" disabled>
            <option>Nivel 1</option>
            <option>Nivel 2</option>
            <option>Nivel 3</option>
            <option>Nivel 4</option>
            <option>Nivel 5</option>
          </select>
          <button type="button" class="skills-dark-btn" disabled>Agregar</button>
        </form>
      </div>
    </div>

    <!-- Historial -->
    <div class="skills-dark-history-card">
      <span class="skills-dark-icon">📜</span>
      <div class="skills-dark-history-content">
        <div class="skills-dark-history-name">Historial</div>
        <ul class="skills-dark-list">
          <li class="skills-dark-list-item">
            <span class="skills-dark-list-skill">Skill Example</span>
            <select class="skills-dark-list-select" disabled>
              <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <button type="button" class="skills-dark-list-remove" disabled title="Eliminar">
              <span class="skills-dark-list-remove-icon">❌</span>
            </button>
          </li>
          <li class="skills-dark-list-item">
            <span class="skills-dark-list-skill">Another Skill</span>
            <select class="skills-dark-list-select" disabled>
              <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
            <button type="button" class="skills-dark-list-remove" disabled title="Eliminar">
              <span class="skills-dark-list-remove-icon">❌</span>
            </button>
          </li>
        </ul>
      </div>
    </div>

    <!-- Navegación -->
    <div class="skills-dark-nav">
      <router-link to="/badges" class="skills-dark-link">Ver Badges</router-link>
      <router-link to="/" class="skills-dark-link">Inicio</router-link>
    </div>
  </div>
</template>

<style>
.skills-dark {
  background: #0f172a; /* azul muy oscuro */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #e2e8f0;
}

.skills-dark-title {
  color: #38bdf8; /* azul cielo */
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
}

.skills-dark-form-card,
.skills-dark-history-card {
  background: #1e293b; /* gris oscuro */
  border: 1px solid #334155;
  border-radius: 0.8rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.2rem;
  max-width: 380px;
  margin-bottom: 1.5rem;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}

.skills-dark-icon {
  font-size: 2rem;
  color: #38bdf8;
}

.skills-dark-form-name,
.skills-dark-history-name {
  color: #10b981; /* verde esmeralda */
  font-weight: bold;
  font-size: 1.2rem;
}

.skills-dark-form {
  margin-top: 0.7rem;
  width: 100%;
}

.skills-dark-input,
.skills-dark-select {
  border-radius: 0.5rem;
  border: 1px solid #334155;
  padding: 0.5rem 0.8rem;
  font-size: 1rem;
  background: #0f172a;
  color: #e2e8f0;
  outline: none;
  min-width: 130px;
}

.skills-dark-btn {
  background: #38bdf8;
  color: #0f172a;
  font-weight: bold;
  padding: 0.5rem 1.2rem;
  border-radius: 0.5rem;
  border: none;
  min-width: 90px;
  cursor: not-allowed;
  opacity: 0.7;
}

.skills-dark-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skills-dark-list-item {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: #0f172a;
  border-radius: 0.6rem;
  padding: 0.6rem 0.9rem;
  margin-bottom: 0.6rem;
}

.skills-dark-list-skill {
  font-weight: bold;
  color: #38bdf8;
  min-width: 100px;
}

.skills-dark-list-select {
  border-radius: 0.5rem;
  border: 1px solid #334155;
  padding: 0.3rem 0.7rem;
  font-size: 1rem;
  background: #1e293b;
  color: #e2e8f0;
  outline: none;
  min-width: 60px;
}

.skills-dark-list-remove {
  background: none;
  color: #f43f5e; /* rojo rosado */
  border: none;
  cursor: not-allowed;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skills-dark-list-remove-icon {
  font-size: 1.2rem;
}

.skills-dark-nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.8rem;
}

.skills-dark-link {
  background: #10b981; 
  color: #fff;
  font-weight: bold;
  padding: 0.6rem 1.4rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background 0.3s;
}

.skills-dark-link:hover {
  background: #38bdf8;
}
</style>
