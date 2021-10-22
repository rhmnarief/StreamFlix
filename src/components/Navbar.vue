<template>
  <div class="container p-0">
    <nav class="navbar p-0">
      <div class="container-fluid p-0">
        <p class="navbar-brand m-0 p0">StreamFlix</p>
        <form class="search d-flex">
          <input
            v-model="search"
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button 
          class="btn btn-outline-success" 
          type="submit"
          >Search</button>
        </form>
        <div class="d-flex">
          <button class="btn btn-success">Login</button>
        </div>
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
  background-color: #282828 !important;
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
</style>