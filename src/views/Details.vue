<template>
  <div class="container">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        class="embed-responsive-item"
        src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
        allowfullscreen
      ></iframe>
    </div>
    <DetailsComp />
  </div>
</template>


<script>

import DetailsComp from '@/components/DetailsComp.vue'
export default {
  name: "Details",
  components :{
      DetailsComp
  },
  props: {},
  data() {},
};
</script>

<style>
</style>