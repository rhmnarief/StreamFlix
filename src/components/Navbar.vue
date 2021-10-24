<template>
  <div class="container p-0">
    <nav class="navbar p-0">
      <div class="container-fluid p-0">
        <p class="navbar-brand m-0 p0">StreamFlix</p>
        <b-button class="btn-login d-flex align-items-center justify-content-center">
            <b-icon-box-arrow-in-right class="icon"></b-icon-box-arrow-in-right>
        </b-button>
      </div>
    </nav>
  </div>
</template>

<script>
// import { Icon } from '@iconify/vue';

export default {
  name: "Navbar",
  components: {
    // Icon,
  },
  data(){
    return{
      search :""
    }
  },
};
</script>

<style>
.navbar {
  color: white;
}
.navbar .navbar-brand{
  font-style: none !important;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
}
.navbar .search{
  width: 40%;
}
.navbar input{
  border: none !important;
  border-radius: 10px 0 0 10px ;
}
.navbar .search button{
  background: white;
  border: none !important;
  border-radius: 0 10px 10px 0 ;
}
.navbar .btn-login{
  background: #282828;
  border-radius: 10%;
}

</style>