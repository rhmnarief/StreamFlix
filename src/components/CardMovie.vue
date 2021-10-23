<template>
  <div class="card p-0 col-sm-3">
    <div class="movies-aspect">
      <div class="img">
        <img :src="posterPath" alt="" srcset="" />
      </div>
      <div class="details">
        <p>{{ movie.original_title }}</p>
        <div class="d-flex flex-direction-row">
          <p>
            <b-icon-star-fill></b-icon-star-fill>
            {{ movie.vote_average }}
          </p>
          <div class="mr-4"></div>
          <p>
            <b-icon-eye></b-icon-eye>
            {{ movie.popularity }}
          </p>
        </div>
        <p>RP. {{movie.price}}   </p>
      </div>
    </div>
    <div class="button">
      <button class="btn btn-success">
        <router-link :to="'/movie/'+ movie.id ">Views</router-link>
      </button>

    </div>
  </div>
</template>
<script>
export default {
  name: "CardMovie",
  props: {
    movie: {
      price :"",
      required: true,
    },
  },
  methods :{
    ratePrice(){
      if (this.movie.vote_average < 3 ){
        this.movie.price = 3500
      }else if(this.movie.vote_average < 6 ){
        this.movie.price = 8250
      }else if(this.movie.vote_average < 8 ){
        this.movie.price = 16350
      }else{
        this.movie.price = 21250
      }
    }
  },
  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
    },
  },
  mounted(){
    this.ratePrice()
  }

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
.card .details {
  padding-right: 90px;
}
</style>