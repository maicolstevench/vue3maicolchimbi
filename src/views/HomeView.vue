<template>
  <div class="home-dark min-h-screen flex flex-col items-center justify-center py-10 px-2">
    <h1 class="home-dark-title mb-8">SkillBoard</h1>

    <div class="home-dark-cards">
      <router-link to="/skills" class="home-dark-card">
        <span class="home-dark-icon">✨</span>
        <div>
          <div class="home-dark-name">Skills</div>
          <div class="home-dark-desc">Gestiona tus habilidades.</div>
        </div>
      </router-link>
      <router-link to="/badges" class="home-dark-card">
        <span class="home-dark-icon">🏆</span>
        <div>
          <div class="home-dark-name">Badges</div>
          <div class="home-dark-desc">Tus logros y premios.</div>
        </div>
      </router-link>
    </div>

    <div class="home-dark-footer">
      <p>Visualiza tu progreso y celebra tus logros.</p>
    </div>
  </div>
</template>

<style>
.home-dark {
  background: #0f172a;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #e2e8f0;
}

.home-dark-title {
  color: #38bdf8; 
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
}

.home-dark-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.4rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 360px;
}

.home-dark-card {
  background: #1e293b; 
  border: 1px solid #334155;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1.4rem;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  transition: transform 0.2s, background 0.3s;
}

.home-dark-card:hover {
  background: #334155;
  transform: translateY(-4px);
}

.home-dark-icon {
  font-size: 2rem;
  color: #38bdf8;
}

.home-dark-name {
  color: #10b981;
  font-weight: bold;
  font-size: 1.2rem;
}

.home-dark-desc {
  color: #94a3b8; 
  font-size: 1rem;
}

.home-dark-footer {
  color: #94a3b8;
  text-align: center;
  font-size: 1rem;
  margin-top: 1.8rem;
}
</style>
