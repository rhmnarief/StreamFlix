<template>
  <div class="card col-md-3 mb-4 p-0 d-flex align-items-center">
    <img :src="posterPath" alt="" srcset="">
      <p class="title m-0">
        <strong>{{ movie.title }}</strong>
      </p>
      <p class="desc m-0">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <br />
      <b-button href="#" variant="primary">Watch</b-button>
  </div>
</template>
<script>
export default {
  name: "CardMovie",
  props: {
    movie: {
      required: true,
    },
  },
  computed :{
    posterPath(){
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path ;
    }
  }
};
</script>

<style>
.card {
  background-color: #282828 !important;
  border: none !important;
}
.card p {
  font-size: 14px;
  line-height: 21px;
  text-align: justify;
}
</style>