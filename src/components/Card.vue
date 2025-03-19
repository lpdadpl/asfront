<template>
  <div class="card">
    <img :src="image" alt="Archivo" class="card-image" />
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
    </div>
    <button class="card-button" @click="onButtonClick">Ver más</button>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  methods: {
    onButtonClick() {
      this.$emit('card-click');
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  margin: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.05);
}
.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-content {
  padding: 16px;
}
.card-title {
  font-size: 1.2em;
  margin: 0 0 8px;
}
.card-description {
  font-size: 0.9em;
  color: #555;
}
.card-button {
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 10px 16px;
  margin: 16px;
  cursor: pointer;
  border-radius: 4px;
}
.card-button:hover {
  background-color: #1a252f;
}
</style>