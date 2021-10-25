<template>
  <div class="hero row d-block">
    <div
      class="
        col-md-8
        offset-md-2
        p-0
        animations
        d-flex
        align-items-center
        justify-contentcenter
      "
    >
      <div class="images pr-4">
        <img src="../../public/Hero.svg" alt="" />
      </div>
      <div class="title mt-auto p-4">
        <h1>
          <strong>Take Your Popcorn </strong>
        </h1>
        <p>
          and stream movies <br />
          with minimum cost
        </p>
        <p class="mt-5">Register to get Voucher 100K Now!</p>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Hero",
  components: {},
  data() {
    return {
      carousels: {},
    };
  },
  methods: {
    getUpcoming() {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=d241f7df3392dd830203d47214927a68&language=en-US&page=1"
        )
        .then((res) => {
          console.log(res.data.results);
          this.carousels = res.data.results;
        });
    },
  },
  mounted() {
    this.getUpcoming();
  },
};
</script>

<style>
.hero .animation h1 {
  font-weight: 600;
  font-size: 48px;
  line-height: 65px;
}
.hero .animation p {
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
}
.hero .slider .carousel img {
  border-radius: 20px;
}
</style>