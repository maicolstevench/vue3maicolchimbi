<template>
  <div class="badges-alt min-h-screen flex flex-col items-center justify-center py-10 px-2">
    <h1 class="badges-alt-title mb-8">Tus Badges</h1>
    <div class="badges-alt-cards">
      <div class="badges-alt-card">
        <span class="badges-alt-icon">🚀</span>
        <div>
          <div class="badges-alt-name">Explorador</div>
          <div class="badges-alt-desc">Has añadido tu primera habilidad</div>
        </div>
      </div>
      <div class="badges-alt-card">
        <span class="badges-alt-icon">🧠</span>
        <div>
          <div class="badges-alt-name">Mente Maestra</div>
          <div class="badges-alt-desc">Promedio de habilidades ≥ 4</div>
        </div>
      </div>
      <div class="badges-alt-card">
        <span class="badges-alt-icon">🎯</span>
        <div>
          <div class="badges-alt-name">Perfeccionista</div>
          <div class="badges-alt-desc">5 habilidades en nivel máximo</div>
        </div>
      </div>
    </div>
    <div class="badges-alt-nav">
      <router-link to="/skills" class="badges-alt-link">Skills</router-link>
      <router-link to="/" class="badges-alt-link">Inicio</router-link>
    </div>
  </div>
</template>

<style>
.badges-alt {
  background: #fffbe0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.badges-alt-title {
  color: #ff006e;
  font-size: 2.2rem;
  font-weight: bold;
  text-align: center;
}
.badges-alt-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 340px;
}
.badges-alt-card {
  background: #fff;
  border: 1px solid #ffbe0b;
  border-radius: 0.7rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
}
.badges-alt-icon {
  font-size: 2rem;
}
.badges-alt-name {
  color: #ffbe0b;
  font-weight: bold;
  font-size: 1.1rem;
}
.badges-alt-desc {
  color: #8338ec;
  font-size: 0.95rem;
}
.badges-alt-nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}
.badges-alt-link {
  background: #ffbe0b;
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 1.2rem;
  border-radius: 0.5rem;
  text-decoration: none;
}
.badges-alt-link:hover {
  background: #ff006e;
}
</style>
