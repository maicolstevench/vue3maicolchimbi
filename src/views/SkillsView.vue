<template>
  <div class="skills-alt min-h-screen flex flex-col items-center py-10 px-2">
    <h1 class="skills-alt-title mb-8">Tus Skills</h1>
    <div class="skills-alt-form-card">
      <span class="skills-alt-icon">🔧</span>
      <div class="skills-alt-form-content">
        <div class="skills-alt-form-name">Agregar Skill</div>
        <form class="skills-alt-form" style="display: flex; flex-wrap: wrap; gap: 0.7rem; align-items: center;">
          <input type="text" placeholder="Ejemplo: CSS, Vue.js, etc." class="skills-alt-input" disabled />
          <select class="skills-alt-select" disabled>
            <option>Nivel 1</option>
            <option>Nivel 2</option>
            <option>Nivel 3</option>
            <option>Nivel 4</option>
            <option>Nivel 5</option>
          </select>
          <button type="button" class="skills-alt-btn" disabled>Agregar</button>
        </form>
      </div>
    </div>
    <div class="skills-alt-history-card">
      <span class="skills-alt-icon">📋</span>
      <div class="skills-alt-history-content">
        <div class="skills-alt-history-name">Historial</div>
        <ul class="skills-alt-list">
          <li class="skills-alt-list-item">
            <span class="skills-alt-list-skill">Skill Example</span>
            <select class="skills-alt-list-select" disabled>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <button type="button" class="skills-alt-list-remove" disabled title="Eliminar">
              <span class="skills-alt-list-remove-icon">🗑️</span>
            </button>
          </li>
          <li class="skills-alt-list-item">
            <span class="skills-alt-list-skill">Another Skill</span>
            <select class="skills-alt-list-select" disabled>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <button type="button" class="skills-alt-list-remove" disabled title="Eliminar">
              <span class="skills-alt-list-remove-icon">🗑️</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="skills-alt-nav">
      <router-link to="/badges" class="skills-alt-link">Ver Badges</router-link>
      <router-link to="/" class="skills-alt-link">Inicio</router-link>
    </div>
  </div>
</template>
<style>
.skills-alt {
  background: #fffbe0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.skills-alt-title {
  color: #ff006e;
  font-size: 2.2rem;
  font-weight: bold;
  text-align: center;
}
.skills-alt-form-card, .skills-alt-history-card {
  background: #fff;
  border: 1px solid #ffbe0b;
  border-radius: 0.7rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.2rem;
  max-width: 340px;
  margin-bottom: 1.2rem;
  width: 100%;
  box-sizing: border-box;
}
.skills-alt-icon {
  font-size: 2rem;
  flex-shrink: 0;
}
.skills-alt-form-content, .skills-alt-history-content {
  flex: 1;
  min-width: 0;
}
.skills-alt-form-name, .skills-alt-history-name {
  color: #ffbe0b;
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
}
.skills-alt-form {
  margin-top: 0.5rem;
  width: 100%;
}
.skills-alt-input, .skills-alt-select {
  border-radius: 0.5rem;
  border: 1px solid #ffbe0b;
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  background: #fffbe0;
  color: #8338ec;
  outline: none;
  min-width: 120px;
  box-sizing: border-box;
}
.skills-alt-btn {
  background: #ffbe0b;
  color: #fff;
  font-weight: bold;
  padding: 0.4rem 1rem;
  border-radius: 0.5rem;
  border: none;
  min-width: 90px;
}
.skills-alt-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.skills-alt-list-item {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: #fffbe0;
  border-radius: 0.5rem;
  padding: 0.5rem 0.8rem;
  margin-bottom: 0.5rem;
  box-sizing: border-box;
}
.skills-alt-list-skill {
  font-weight: bold;
  color: #ffbe0b;
  min-width: 90px;
}
.skills-alt-list-select {
  border-radius: 0.5rem;
  border: 1px solid #ffbe0b;
  padding: 0.2rem 0.7rem;
  font-size: 1rem;
  background: #fff;
  color: #8338ec;
  outline: none;
  min-width: 60px;
}
.skills-alt-list-remove {
  background: none;
  color: #ff006e;
  font-weight: bold;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  font-size: 1rem;
  min-width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.skills-alt-list-remove-icon {
  font-size: 1.2rem;
}
.skills-alt-nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}
.skills-alt-link {
  background: #ffbe0b;
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 1.2rem;
  border-radius: 0.5rem;
  text-decoration: none;
}
.skills-alt-link:hover {
  background: #ff006e;
}
</style>
