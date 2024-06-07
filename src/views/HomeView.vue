<!-- HomeView page -->
<script setup>
import { ref, onMounted } from 'vue'

const repos = ref([])
const page = ref(1)
const perPage = 5
const fetchRepo = (page, perPage) => {
  fetch(`https://api.github.com/users/Emery-Hub/repos?page=${page}&per_page=${perPage}`)
    .then((response) => response.json())
    .then((data) => {
      repos.value = data
    })
}
const prevPage = () => {
  if (page.value === 1);
  page.value--
  fetchRepo(page.value, perPage)
}
const nextPage = () => {
  page.value++
  fetchRepo(page.value, perPage)
}

onMounted(() => {
  fetchRepo(page.value, perPage)
})
</script>

<template>
  <div class="pt-10 pb-20">
    <p class="text-2xl font-bold capitalize">Viewing A List Of Emery-Hub Repositories</p>
  </div>

  <div>
    <div>
      <ul class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
        <li
          v-for="repo in repos"
          :key="repo.name"
          class=" p-5 mx-15 bg-white rounded-lg shadow shadow-emerald-300"
        >
          
            <RouterLink :to="`/repoDetails/${repo.name}`">
              <p class="text-xl font-bold capitalize hover:text-orange-400">{{ repo.name }}</p>
            </RouterLink>
          

          <p>{{ repo.visibility }}</p>
          <p>{{ repo.language }}</p>
          <a :href="repo.html_url" class="underline text-emerald-400">View on Github</a>
        </li>
      </ul>
    </div>
  </div>

  <div class="flex justify-center mt-5">
    <button
      @click="prevPage"
      :disabled="page === 1"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
    >
      Previous
    </button>

    <button
      @click="nextPage"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Next
    </button>
  </div>
</template>
