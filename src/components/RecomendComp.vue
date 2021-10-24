<template>
  <div class="card p-0 col-sm-3 mb-3">
    <div class="movies-aspect">
      <div class="img">
        <img :src="posterPath" alt="" srcset="" />
      </div>
      <div class="details pr-4">
        <p>
          {{ recomendation.original_title }}
        </p>
        <div class="d-flex flex-direction-row">
          <p>
            <b-icon-star-fill></b-icon-star-fill>
            {{ recomendation.vote_average }}
          </p>
          <div class="mr-4"></div>
          <p class="mb-1">
            <b-icon-eye></b-icon-eye>
            {{ recomendation.popularity }}
          </p>
        </div>
      <div class="button d-flex align-items-center">
          <h5>
          Rp.{{ price }}
        </h5>
        <button class="btn btn-success ml-auto" style="background: #282828; border: none ">
          <a class="views" :href="'/movie/' + recomendation.id" style="text-decoration: none; color: inherit;">
          <b-icon-eye-fill style="background-color: inherit;"></b-icon-eye-fill>
          </a>
        </button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecomendComp",
  data() {
    return {
      price: "",
    };
  },
  props: {
    recomendation: {
      required: true,
    },
  },
  methods: {
    ratePrice() {
      console.log("harga dirate")
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
    reRender(){
        this.$router.go()
     }
  },
  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.recomendation.poster_path;
    },
  },
  mounted() {
    this.ratePrice();
    console.log(this.recomendation);
  },
};
</script>

<style>
router-link{
  text-decoration: none,
}

</style>