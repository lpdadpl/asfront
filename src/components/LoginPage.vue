<template>
  <div class="login-page">
    <NavBar/>
    <div class="login-container">
      <h1>Iniciar Sesión</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" class="login-button">Iniciar Sesión</button>
      </form>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/Footer.vue'

export default {
  name: 'LoginPage',
  components: {
    NavBar,
    AppFooter
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      console.log('Iniciando sesión con:', this.email, this.password)
      // Aquí puedes agregar lógica para autenticar al usuario
    }
  }
}
</script>

<style scoped>
.login-page {
  padding: 20px;
  text-align: center;
}

.login-container {
  max-width: 400px;
  margin: 0 auto;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.login-button:hover {
  background-color: #1a252f;
}
</style>