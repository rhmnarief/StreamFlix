<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <img :src="posterPath" alt="" height="100%" />
        <div class="description">
          <h1>{{ details.original_title }}</h1>
          <p>
            <b-icon-star-fill></b-icon-star-fill> {{ details.vote_average }} |
            2019-10-02 Crime, Thriler, Drama
          </p>
          <span>
            <p key="detail.genres.id" :v-for="detail in details"></p>
          </span>
          <p class="desc">
            {{ details.overview }}
          </p>
          <p>Feature cast</p>
          <div class="actor"></div>
          <div class="button d-flex align-items-center justify-content-space">
            <button class="btn btn-success">Subscribe</button>
            <div class="m-3"></div>
            <button class="btn btn-danger">Favorite</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
// import DetailsComp from "@/components/DetailsComp.vue";

export default {
  name: "Details",
  components: {
    // DetailsComp,
  },
  props: ["movies"],
  data() {
    return {
      id_movie: this.$route.params.id,
      details: {},
    };
  },
  methods: {
    getDetails() {
      const API_KEY = "api_key=d241f7df3392dd830203d47214927a68";
      const BASE_URL = "https://api.themoviedb.org/3";
      const ID = this.$route.params.id;
      const API_URL = "/movie/";
      axios
        .get(BASE_URL + API_URL + ID + "?" + API_KEY)
        .then((res) => {
          console.log(res.data);
          this.details = res.data;
        })
        .catch((error) => console.log(error + "error"));
    },
  },
  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.details.backdrop_path;
    },
  },
  mounted() {
    this.getDetails();
    this.posterPath();
  },
};
</script>

<style>
</style>