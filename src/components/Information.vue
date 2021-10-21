<template>
  <div class="container ">
    <b-jumbotron class="jumbotron row">
      <div class="desc col-md-4 pl-0">
        <h1>This Films</h1>
        <div class="d-flex align-items-center flex-direction-column mb-4">
          <div class="harga mr-4">
            <h4 class="m-0"><strong>Rp. 999999</strong></h4>
          </div>
          <div class="subscription">
            <button class="btn btn-success">Watch</button>
          </div>
        </div>

        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci
          metus, luctus ornare rutrum nec, mattis a lectus. Pellentesque
          vehicula odio ex, eu sollicitudin justo iaculis sit amet. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Etiam orci metus, luctus
          ornare rutrum nec, mattis a lectus. Pellentesque vehicula odio ex, eu
          sollicitudin justo iaculis sit amet.
        </p>

        <p class="tags">Lorem ipsum</p>
      </div>
      <div class="video col-md-8 p-0">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        >
        </iframe>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "Information",
};
</script>

<style>
.jumbotron {
  border-radius: 20px !important;
  padding: 0 !important;
  height: 464px;
}
.jumbotron .desc {
  padding: 16px;
}
.jumbotron .desc p {
  font-size: 14px;
  line-height: 21px;
  text-align: justify;
}
.jumbotron .video iframe {
  outline: none;
  border: none;
  border-radius: 10px;
}
</style>