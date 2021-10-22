<template>
  <div class="card col-md-3 mb-4 p-0 d-flex align-items-center">
    <b-card
      class="card"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 16rem"
    >
      <p class="title m-0"><strong>Title</strong></p>
      <p class="desc m-0">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <br />
      <b-button href="#" variant="primary">Watch</b-button>
    </b-card>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "CardMovie",
  // data() {
  //   return {
  //     movie : {},
  //   }
  // },
  // methods :{
  //   setMovies(data){
  //     this.movie = data;
  //   },
  // },
  // mounted(){
  //   axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=d241f7df3392dd830203d47214927a68&language=en-US&page=1')
  //   .then((res) =>{
  //     console.log(res.data)
  //     this.setMovies(res.data)
  //   })
  //   .catch((error) => console.log(error))
  // }
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