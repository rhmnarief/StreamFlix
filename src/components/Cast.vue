<template>
      <div class="col-2 p-1 d-flex align-items-center justify-content-center">
        <div class="card pr-auto">
          <img
            class="card-img-top"
            :src="castProfileImage(credit)"
          />
          <div class="card-body p-0">
            <p>
            <center>
              {{ credit.name }}
            </center>
            </p>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "Cast",
  props :{
    credit :{
      required : true,
    }
  },
  methods :{
    castProfileImage(credit) {
      if (credit.profile_path) {
        return "https://image.tmdb.org/t/p/w300/" + credit.profile_path;
      } else {
        return "https://via.placeholder.com/300x450";
      }
    },
  },
};
</script>

<style>
.card img{
  width: 180px;
}
</style>