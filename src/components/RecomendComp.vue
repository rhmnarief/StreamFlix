<template>
  <div class="test">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>test recomend Component</h1>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="card p-0 col-sm-3">
    <div class="movies-aspect">
      <div class="img">
        <img :src="posterPath" alt="" srcset="" />
      </div>
      <div class="details">
        <p>{{ recomend.original_title }}</p>
        <div class="d-flex flex-direction-row">
          <p>
            <b-icon-star-fill></b-icon-star-fill>
            {{ recomend.vote_average }}
          </p>
          <div class="mr-4"></div>
          <p class="mb-1">
            <b-icon-eye></b-icon-eye>
            {{ recomend.popularity }}
          </p>
        </div>
        <p>RP. 20.000 </p>
      </div>
    </div>
    <div class="button">
      <button class="btn btn-success">
        <router-link class="views" :to="'/movie/'+ recomend.id ">Views</router-link>
      </button>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "RecomendComp",
  props: {
    price: {},
    recomend: {
      required: true,
    },
  },
  methods: {
    ratePrice() {
      if (this.recomend.vote_average < 3) {
        this.price = 3500;
      } else if (this.recomend.vote_average < 6) {
        this.price = 8250;
      } else if (this.recomend.vote_average < 8) {
        this.price = 16350;
      } else {
        this.price = 21250;
      }
    },
  },
  computed: {
    // posterPath() {
    //   return "https://image.tmdb.org/t/p/w500/" + this.recomend.poster_path;
    // },
  },
  mounted() {
    this.ratePrice();
  },
};
</script>

<style>
</style>