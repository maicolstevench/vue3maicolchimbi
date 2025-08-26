<template>
  <div class="home-alt min-h-screen flex flex-col items-center justify-center py-10 px-2">
    <h1 class="home-alt-title mb-8">SkillBoard</h1>
    <div class="home-alt-cards">
      <router-link to="/skills" class="home-alt-card">
        <span class="home-alt-icon">🔧</span>
        <div>
          <div class="home-alt-name">Skills</div>
          <div class="home-alt-desc">Gestiona tus habilidades.</div>
        </div>
      </router-link>
      <router-link to="/badges" class="home-alt-card">
        <span class="home-alt-icon">🏅</span>
        <div>
          <div class="home-alt-name">Badges</div>
          <div class="home-alt-desc">Tus logros y premios.</div>
        </div>
      </router-link>
    </div>
    <div class="home-alt-footer">
      <p>Visualiza tu progreso y celebra tus logros.</p>
    </div>
  </div>
</template>
<style>
.home-alt {
  background: #fffbe0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.home-alt-title {
  color: #ff006e;
  font-size: 2.2rem;
  font-weight: bold;
  text-align: center;
}
.home-alt-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 340px;
}
.home-alt-card {
  background: #fff;
  border: 1px solid #ffbe0b;
  border-radius: 0.7rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  text-decoration: none;
  color: inherit;
}
.home-alt-icon {
  font-size: 2rem;
}
.home-alt-name {
  color: #ffbe0b;
  font-weight: bold;
  font-size: 1.1rem;
}
.home-alt-desc {
  color: #8338ec;
  font-size: 0.95rem;
}
.home-alt-footer {
  color: #8338ec;
  text-align: center;
  font-size: 1rem;
  margin-top: 1.5rem;
}
</style>