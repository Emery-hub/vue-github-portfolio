<!-- HomeView page -->
<script setup>
import { ref, onMounted } from 'vue';

const repos = ref([]);
const page= ref(1);
const perPage = 5;
const fetchRepo = (page, perPage) => {fetch(`https://api.github.com/users/Emery-Hub/repos?page=${page}&per_page=${perPage}`)
  .then(response => response.json())
  .then(data => {
    repos.value = data;
  });
};
const prevPage = () => {
  if (page.value === 1);
  page.value--;
  fetchRepo(page.value, perPage);
};
const nextPage = () => {
  page.value++;
  fetchRepo(page.value, perPage);
};

onMounted(() => {
  fetchRepo(page.value, perPage);
});
</script>

<template>
 <p> Viewing A List Of Emery-Hub Repositories
</p>

<div>
  <ul>
    <li v-for="repo in repos" :key="repo.name">
      <RouterLink :to="`/repoDetails/${repo.name}`">
      {{repo.name}}
       </RouterLink>
      
       <p>{{repo.visibility}}</p>
      <p>{{repo.language}}</p>
      <a :href="repo.html_url">View on Github</a>
     
    </li>
  </ul>
</div>

<button @click="prevPage" :disabled="page===1">Previous</button>

<button @click="nextPage">Next</button>
</template>
