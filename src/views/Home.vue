<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <CardMovie :key="movie.id" v-for="movie in movies" :movie="movie" />
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <button class="page-link" @click="this.backButton"  aria-label="Previous">
                <span aria-hidden="true" style="background-color: white;">&laquo;</span>
              </button>
            </li>
            <li class="page-item"><a class="page-link" >{{ currentPage }}</a></li>
            <li class="page-item">
              <button class="page-link" @click="this.nextButton" aria-label="Next">
                <span aria-hidden="true" style="background-color: white;">&raquo;</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import CardMovie from "../components/CardMovie.vue";

import axios from "axios";
export default {
  name: "Home",
  components: {
    CardMovie,
  },

  data() {
    return {
      movies: {},
      list: {},
      currentPage: 1,
      totalPages: 0,
    };
  },

  methods: {
    nextButton() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
        console.log(this.currentPage)
        this.getPopular()
      }
    },
    backButton() {
      if (this.currentPage > 1 && this.currentPage < this.totalPages) {
        this.currentPage -= 1;
        this.getPopular()
      }
    },
    getPopular() {
      const API_KEY = "api_key=d241f7df3392dd830203d47214927a68";
      const BASE_URL = "https://api.themoviedb.org/3";
      const API_URL = "/movie/popular?";
      const PAGE = `&page=${this.currentPage}`;
      axios
        .get(BASE_URL + API_URL + API_KEY + PAGE)
        .then((res) => {
          console.log(res.data.results);
          this.movies = res.data.results;
          this.totalPages = res.data.total_pages;
          console.log(this.totalPages)
        })
        .catch((error) => console.log(error));
    },
    alert() {
      this.$swal("Daftar sekarang untuk Voucher Rp. 100.000 !");
    },
  },

  mounted() {
    this.getPopular();
    this.alert();
  },
};
</script>

<style>
.swal-overlay .swal-overlay--show-modal {
  background: white;
}
.swal-overlay .swal-text {
  background: white;
  outline: none;
  font-size: 16px;
}
</style>