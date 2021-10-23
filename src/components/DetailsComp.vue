<template>
  <div class="row">
    <div class="col-12">
      <div class="trailer embed-responsive embed-responsive-16by9">
        <iframe
          class="trailer embed-responsive-item"
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          allowfullscreen
        ></iframe>
      </div>
      <br />
      <div class="description">
        <h1>Judul</h1>
        <p>82 % | 2019-10-02 Crime, Thriler, Drama</p>
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
        <div class="actor"></div>
        <div class="button d-flex align-items-center justify-content-space">
          <button class="btn btn-success">Subscribe</button>
          <div class="m-3"></div>
          <button class="btn btn-danger">Favorite</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsComp",
  props: {},
};
</script>

<style>
.trailer iframe{
  border-radius: 10px !important ;
}
</style>