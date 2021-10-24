<template>
      <div class="col-2 p-1 d-flex align-items-center justify-content-center">
        <div class="card pr-auto">
          <img
            class="card-img-top"
            src="https://placeimg.com/150/150/any"
          />
          <div class="card-body p-0">
            <p>
            <center>
              {{ credit.name }}
            </center>
            </p>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "Cast",
  props :{
    credit :{
      required : true,
    }
  },
  computed:{
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
    },
  }
};
</script>

<style>
.card img{
  width: 180px;
}
</style>