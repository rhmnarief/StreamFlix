<template>
  <div class="card col-md-2 mb-4 p-0 d-flex align-items-center">
    <div class="img p-2">
    <img :src="posterPath" alt="" srcset="">
    </div>
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
.card img{
  width: 200px;
}
</style>