<template>
<div class="home">
        <Navbar />
        <information class="mt-4" />
</div>
  
</template>

<script>
import Information from '../components/Information.vue'
import Navbar from '../components/Navbar.vue'
export default {
  name :'Home',
  components: { Navbar,
  Information 
  },

}
</script>

<style>

</style>