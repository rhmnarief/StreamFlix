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
        <h1>{{ details.belongs_to_collection.name }}</h1>
        <p>  % | 2019-10-02 Crime, Thriler, Drama</p>
        <p class="desc">
         {{ details.overview }}
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
  props: {
    details:{
      required :true
    }
  },
};
</script>

<style>
.trailer iframe{
  border-radius: 10px !important ;
}
</style>