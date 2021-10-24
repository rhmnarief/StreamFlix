<template>
  <div class="card d-flex align-items-center col-xs-3 mb-3">
    <div class="movies-aspect">
      <div class="img">
        <center>
        <img :src="posterPath" alt="" srcset="" />
        </center>
      </div>
      <div class="details">
        <p>{{ movie.original_title }}</p>
        <div class="d-flex flex-direction-row">
          <p>
            <b-icon-star-fill></b-icon-star-fill>
            {{ movie.vote_average }}
          </p>
          <div class="mr-4"></div>
          <p class="mb-1">
            <b-icon-eye></b-icon-eye>
            {{ movie.popularity }}
          </p>
        </div>
        <p>
          <strong>
          RP. {{ price }}
          </strong>
        </p>
      </div>
      <div class="button d-block">
        <button class="btn btn-success">
          <router-link class="views" :to="'/movie/' + movie.id" style="text-decoration: none; color: inherit;"
            >Views</router-link
          >
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardMovie",
  data () {
    return {
    price: {},

    }
  },
  props: {
    movie: {
      required: true,
    },
  },
  methods: {
    ratePrice() {
      if (this.movie.vote_average < 3) {
        this.price = 3500;
      } else if (this.movie.vote_average < 6) {
        this.price = 8250;
      } else if (this.movie.vote_average < 8) {
        this.price = 16350;
      } else {
        this.price = 21250;
      }
    },
  },
  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
    },
  },
  mounted() {
    this.ratePrice();
    console.log(this.movie)
  },
};
</script>

<style>
.card {
  background-color: #282828 !important;
  border: none !important;
  width: 220px;
}
.card p {
  margin: 0;
  font-size: 14px;
  line-height: 21px;
  text-align: justify;
}
.card img {
  width: 220px;
}
.card .movies-aspect{
  padding: 0 40px;
}
</style>