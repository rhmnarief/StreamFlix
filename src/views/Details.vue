<template>
  <div class="container">
    <DetailsComp />
  </div>
</template>


<script>
import axios from 'axios';
import DetailsComp from '@/components/DetailsComp.vue'
export default {
  name: "Details",
  components :{
      DetailsComp
  },
  data(){
    return{
    movies :{}
    }
  },
  methods: {
    getDetails(){
      const API_KEY = "api_key=d241f7df3392dd830203d47214927a68";
      const BASE_URL = "https://api.themoviedb.org/3";
      const API_URL = "/movie/popular?";
      axios.get(BASE_URL + API_URL + API_KEY)
        .then((res) => {
          console.log(res.data.results);
          this.movies = res.data.results;
        })
        .catch((error) => console.log(error));
    }
  },
  mounted(){
    this.getDetails()
  }
};
</script>

<style>
</style>