<template>
  <b-jumbotron>
    <div class="row">
      <div class="col-md-6">
        <div class="img">
            <img src="@/assets/images/Poster-Joker2.jpg" class="w-64" alt="">
        </div>
      </div>
      <div class="col-md-6">
        <div class="details">
          <h1>Judul</h1> 
          <p>82 % | 2019-10-02 Crime, Thriler, Drama </p>
          <p class="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci
            metus, luctus ornare rutrum nec, mattis a lectus. Pellentesque
            vehicula odio ex, eu sollicitudin justo iaculis sit amet. Donec non
            pellentesque neque. Integer a ultrices felis. Nulla eget ipsum
            imperdiet, rhoncus est rhoncus, ultricies justo. Sed ultricies
            fermentum lacus. Integer lectus odio, ultricies vitae dolor vitae,
            sollicitudin elementum massa
          </p>
          <p>Feature cast</p>
          <div class="actor">

          </div>
          <div class="button d-flex align-items-center justify-content-center">
              <button class="btn btn-sucess">Play Trailer</button>
              <button class="btn btn-danger">Favorite</button>
          </div>
        </div>
      </div>
    </div>
  </b-jumbotron>
</template>

<script>
export default {
  name: "DetailsComp",
  props: {},
};
</script>

<style>
</style>