<template>
  <div class="badges-dark min-h-screen flex flex-col items-center justify-center py-10 px-2">
    <h1 class="badges-dark-title mb-8">Tus Badges</h1>

    <div class="badges-dark-cards">
      <div class="badges-dark-card">
        <span class="badges-dark-icon">🧭</span>
        <div>
          <div class="badges-dark-name">Explorador</div>
          <div class="badges-dark-desc">Has añadido tu primera habilidad</div>
        </div>
      </div>
      <div class="badges-dark-card">
        <span class="badges-dark-icon">🧩</span>
        <div>
          <div class="badges-dark-name">Mente Maestra</div>
          <div class="badges-dark-desc">Promedio de habilidades ≥ 4</div>
        </div>
      </div>
      <div class="badges-dark-card">
        <span class="badges-dark-icon">🏆</span>
        <div>
          <div class="badges-dark-name">Perfeccionista</div>
          <div class="badges-dark-desc">5 habilidades en nivel máximo</div>
        </div>
      </div>
    </div>

    <div class="badges-dark-nav">
      <router-link to="/skills" class="badges-dark-link">Skills</router-link>
      <router-link to="/" class="badges-dark-link">Inicio</router-link>
    </div>
  </div>
</template>

<style>
.badges-dark {
  background: #0f172a; 
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #e2e8f0;
}

.badges-dark-title {
  color: #38bdf8; 
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
}

.badges-dark-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.4rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 360px;
}

.badges-dark-card {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1.4rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  transition: transform 0.2s, background 0.3s;
}

.badges-dark-card:hover {
  background: #334155;
  transform: translateY(-4px);
}

.badges-dark-icon {
  font-size: 2rem;
  color: #38bdf8;
}

.badges-dark-name {
  color: #10b981; 
  font-weight: bold;
  font-size: 1.2rem;
}

.badges-dark-desc {
  color: #94a3b8; 
  font-size: 1rem;
}

.badges-dark-nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.8rem;
}

.badges-dark-link {
  background: #10b981;
  color: #fff;
  font-weight: bold;
  padding: 0.6rem 1.4rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background 0.3s;
}

.badges-dark-link:hover {
  background: #38bdf8;
}
</style>
