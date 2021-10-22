<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <div class="row">
        <CardMovie :key="movie.id" v-for="movie in movies" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import CardMovie from "../components/CardMovie.vue";
import Navbar from "../components/Navbar.vue";

import axios from "axios";
export default {
  name: "Home",
  components: { Navbar
  , CardMovie },
  data() {
    return {
      movies: {},
      list : {
        
      }
    };
  },

  methods: {
    getPopular() {
      const API_KEY = "api_key=d241f7df3392dd830203d47214927a68";
      const BASE_URL = "https://api.themoviedb.org/3";
      const API_URL = "/movie/popular?";
      axios
        .get(BASE_URL + API_URL + API_KEY)
        .then((res) => {
          console.log(res.data.results);
          this.movies = res.data.results;
        })
        .catch((error) => console.log(error));
    },
  },

  mounted() {
    this.getPopular();
  },
};
</script>

<style>
</style>