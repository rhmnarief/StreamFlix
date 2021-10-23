<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
          
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  data() {
    return {
      videos: {},
    };
  },
  methods:{
    getVideo() {
      const API_URL = "/movie/";
      const VIDEO_URL = "/videos?";
      axios
        .get(BASE_URL + API_URL + ID + VIDEO_URL + API_KEY)
        .then((res) => {
          console.log(res.data);
          this.videos = res.data;
        })
        .catch((error) => console.log(error + "error"));
    },

  },
  mounted() {
      this.getVideo();

  }
};
</script>

<style>
</style>