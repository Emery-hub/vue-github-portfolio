<!-- RepoDetails page -->
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const repoDetails = ref({})
const router = useRouter()

onMounted(() => {
  const name = route.params.name

  fetch(`https://api.github.com/repos/Emery-Hub/${name}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
      repoDetails.value = data
    })
    .catch((error) => {
      console.error('Error fetching repository', error)
      if (error.response.status === 404) {
        router.push('/404')
      }
    })
})
</script>

<template>
  <div class="p-5 bg-white rounded-lg shadow shadow-emerald-300">
    <h2 class="text-xl font-bold capitalize">Name: {{ repoDetails.name }}</h2>

    <p>Description: {{ repoDetails.description }}</p>
    <p>Language: {{ repoDetails.language }}</p>
    <p>Stars: {{ repoDetails.stargazers_count }}</p>
  </div>
</template>
