<template>
  <div class="file-page">
    <NavBar/>
    <div class="file-details">
      <img :src="file.image" alt="Portada" class="file-image" />
      <h1 class="file-title">{{ file.title }}</h1>
      <p class="file-description">{{ file.description }}</p>
      <p class="file-uploader">Subido por: {{ file.uploader }}</p>
      <p class="file-likes">Likes: {{ file.likes }}</p>
      <p class="file-downloads">Descargas: {{ file.downloads }}</p>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/Footer.vue'

export default {
  name: 'FilePage',
  components: {
    NavBar,
    AppFooter
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      file: {
        title: '',
        description: '',
        image: '',
        uploader: '',
        likes: 0,
        downloads: 0
      }
    }
  },
  created() {
    const files = [
      {
        id: 1,
        title: 'Archivo 1',
        description: 'Descripción del archivo 1',
        image: './assets/file1.png',
        uploader: 'Usuario1',
        likes: 120,
        downloads: 300
      },
      {
        id: 2,
        title: 'Archivo 2',
        description: 'Descripción del archivo 2',
        image: './assets/file2.png',
        uploader: 'Usuario2',
        likes: 80,
        downloads: 150
      },
      {
        id: 3,
        title: 'Archivo 3',
        description: 'Descripción del archivo 3',
        image: './assets/file3.png',
        uploader: 'Usuario3',
        likes: 200,
        downloads: 500
      }
    ]
    this.file = files.find(f => f.id === parseInt(this.id))
  }
}
</script>

<style scoped>
.file-page {
  padding: 20px;
  text-align: center;
}

.file-details {
  max-width: 600px;
  margin: 0 auto;
}

.file-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
}

.file-title {
  font-size: 2em;
  margin-bottom: 10px;
}

.file-description {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.file-uploader,
.file-likes,
.file-downloads {
  font-size: 1em;
  margin-bottom: 5px;
}
</style>