<template>
  <div class="card p-0 col-sm-3 mb-3">
    <div class="movies-aspect">
      <div class="img">
        <img src="https://placeimg.com/300/300/any" alt="" srcset="" />
      </div>
      <div class="details">
        <p>
          {{ recomendation.original_title }}
        </p>
        <div class="d-flex flex-direction-row">
          <p>
            <b-icon-star-fill></b-icon-star-fill>
            Test
            <!-- {{ recomendation.vote_average }} -->
          </p>
          <div class="mr-4"></div>
          <p class="mb-1">
            <b-icon-eye></b-icon-eye>
            Test
            <!-- {{ recomendation.popularity }} -->
          </p>
        </div>
        <p>RP. 20.000 </p>
      </div>
    <div class="button">
      <button class="btn btn-success">
        <router-link class="views" :to="'/movie/'+ recomendation.id ">Views</router-link>
      </button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecomendComp",
  props: {
    price: {},
    recomendation: {
      required: true,
    },
  },
  methods: {
    ratePrice() {
      if (this.recomendation.vote_average < 3) {
        this.price = 3500;
      } else if (this.recomendation.vote_average < 6) {
        this.price = 8250;
      } else if (this.recomendation.vote_average < 8) {
        this.price = 16350;
      } else {
        this.price = 21250;
      }
    },
  },
  computed: {
    // posterPath() {
    //   return "https://image.tmdb.org/t/p/150/" + this.recomendation.poster_path;
    // },
  },
  mounted() {
    this.ratePrice();
  },
};
</script>

<style>
.card .button router-link{
  text-decoration: none;
}
</style>