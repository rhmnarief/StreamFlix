<template>
  <div class="card col-3 p-0 d-flex justify-content-center">
    <div class="img">
      <img :src="posterPath" alt="" srcset="" />
    </div>
    <div class="details">
      <p>{{ movie.original_title }}</p>
      <p>{{ movie.popularity }}</p>
      <span>
                <b-icon-search></b-icon-search>

      </span>
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
  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
    },
  },
};
</script>

<style>
.card {
  background-color: #282828 !important;
  border: none !important;
}
.card p {
  margin: 0;
  font-size: 14px;
  line-height: 21px;
  text-align: justify;
}
.card img {
  width: 200px;
}
</style>