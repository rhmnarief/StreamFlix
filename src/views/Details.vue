<template>
  <div class="details container mt-1 p-0">
    <div class="row">
      <div class="col-8 p-0">
        <img
          :src="posterPath"
          alt=""
          width="100%"
          style="border-radius: 0.5rem"
        />
      </div>

      <div class="col-4 pl-4">
        <div class="description">
          <div class="head d-flex align-items-center">
            <h2 class="m-0">{{ details.original_title }}</h2>
            <button class="ml-auto mb-auto" style="font-size: 2rem">
              <b-icon icon="bookmark-heart" class="border rounded p-2"></b-icon>
            </button>
          </div>
          <p class="mb-1">
            <b-icon-star-fill></b-icon-star-fill> {{ details.vote_average }} |
            {{ details.release_date }}
          </p>
          <span> </span>
          <span :key="index" v-for="(item, index) in details.genres">
            {{ item.name }}
            <span v-if="details.genres.length - 1 != index">,</span>
          </span>
          <br />
          <br />
          <p class="desc mb-2">
            {{ details.overview }}
          </p>
          <br />
          <div class="d-flex">
            <h1>
             Rp. {{ price }}
            </h1>
            <div class="button ml-auto">
              <button class="btn btn-success">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-1">
      <h4>Cast</h4>
    </div>
    <div class="wrapper">
      <Cast :key="credit.id" v-for="credit in credits" :credit="credit" />
    </div>
    <br>
    <div class="row mt-1">
      <h4>Similiar Movies</h4>
    </div>
    <div class="row mt-4">
      <RecomendComp :key="recomendation.id" v-for="recomendation in recomendations" :recomendation="recomendation" />
    </div>
  </div>
</template>


<script>
import axios from "axios";
import Cast from "@/components/Cast.vue";
import RecomendComp from "@/components/RecomendComp.vue";

export default {
  name: "Details",
  components: {
    Cast,
    RecomendComp,
  },
  data() {
    return {
      price: "",
      credits: {},
      details: {},
      recomendations: {},
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
        .catch((error) => console.log(error + " error get details"));
    },
    getCredits() {
      const API_KEY = "api_key=d241f7df3392dd830203d47214927a68";
      const BASE_URL = "https://api.themoviedb.org/3";
      const ID = this.$route.params.id;
      const API_URL = "/movie/";
      axios
        .get(BASE_URL + API_URL + ID + "/credits?" + API_KEY)
        .then((res) => {
          console.log(res.data.cast);
          this.credits = res.data.cast;
        })
        .catch((error) => console.log(error + " error get credits"));
    },
    ratePrice() {
      if (this.details.vote_average < 3) {
        this.price = 3500;
      } else if (this.details.vote_average < 6) {
        this.price = 8250;
      } else if (this.details.vote_average < 8) {
        this.price = 16350;
      } else {
        this.price = 21250;
      }
    },
    getRecomend() {
      // const API_KEY = "api_key=d241f7df3392dd830203d47214927a68";
      // const BASE_URL = "https://api.themoviedb.org/3";
      // const API_URL = "/movie/";
      // const UPDATE = "&language=en-US/?page=<page>";
      const ID = this.$route.params.id;
      axios
        .get('https://api.themoviedb.org/3/movie/' + ID +'/recommendations?api_key=d241f7df3392dd830203d47214927a68&language=en-US/?page=<page>')
        .then((res) => {
          console.log(res.data.results);
          this.recomendations = res.data.results;
        })
        .catch((error) => console.log(error + " error get recomend"));
    },
  },
  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.details.backdrop_path;
    },
  },
  mounted() {
    this.getDetails();
    this.ratePrice();
    this.getCredits();
    this.getRecomend();
  },
};
</script>

<style>
button,
input[type="submit"],
input[type="reset"] {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
.details .wrapper {
  max-height: 400px;
  display: flex;
  overflow-x: auto;
}
.details .wrapper::-webkit-scrollbar {
  width: 10px;
}
.details .wrapper::-webkit-scrollbar-track {
  /* background-color: darkgrey; */
  background-color: #282828;
}
.details .wrapper::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
</style>