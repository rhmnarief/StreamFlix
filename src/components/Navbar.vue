<template>
  <div class="container">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">StreamFlix</a>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div class="d-flex">
          <button class="btn btn-success">
            Login
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import { Icon } from '@iconify/vue';

export default {
  components: {
    // Icon,
  },
};
</script>

<style>
</style>