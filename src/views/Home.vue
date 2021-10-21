<template>
<div class="home">
        <Navbar />
        <Information class="mt-4" />
        <CardMovie />
</div>
  
</template>

<script>
import CardMovie from '../components/CardMovie.vue'
import Information from '../components/Information.vue'
import Navbar from '../components/Navbar.vue'
export default {
  name :'Home',
  components: { Navbar,
  Information ,
  CardMovie,
  },

}
</script>

<style>

</style>