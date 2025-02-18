<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-logo">
        <img src="@/assets/LogoArchiveSphere.png" alt="Logo" />
      </router-link>
    </div>

    <div class="navbar-menu">
      <router-link to="/" class="nav-item">Inicio</router-link>
      <router-link to="/documentos" class="nav-item">Documentos</router-link>
      <router-link to="/libros" class="nav-item">Libros</router-link>
      <router-link to="/videos" class="nav-item">Videos</router-link>
      <router-link to="/biblioteca" class="nav-item">Biblioteca</router-link>
    </div>

    <div class="navbar-end">
      <div class="nav-icons">
        <router-link to="/guardados" class="icon-link">
          <span class="material-icons nav-icon" title="Archivos Guardados">bookmark</span>
        </router-link>
        <router-link to="/descargas" class="icon-link">
          <span class="material-icons nav-icon" title="Mis Descargas">download</span>
        </router-link>
        <router-link to="/perfil" class="icon-link">
          <span class="material-icons nav-icon" title="Mi Perfil">person</span>
        </router-link>
      </div>
      <div class="nav-item">
        <button @click="toggleMenu" class="menu-button">
          <span class="material-icons">menu</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #5c7a99; /* Color azul grisáceo */
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.navbar-brand img {
  height: 40px;
}

.navbar-menu {
  display: flex;
  gap: 2rem;
}

.nav-item {
  text-decoration: none;
  color: #ffffff; /* Texto blanco para mejor contraste */
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  transform: translateY(-2px);
}

.nav-item.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
}

.navbar-end {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-icons {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.icon-link {
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background-color: transparent;
}

.icon-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.nav-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #ffffff;
}

.menu-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.8rem;
  color: #ffffff;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.menu-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .navbar-menu {
    display: none;
  }

  .menu-button {
    display: block;
  }

  .nav-icons {
    gap: 0.5rem;
  }
}
</style>