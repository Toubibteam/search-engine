<template>
  <div id="host" class="container-fluid row m-0 py-3">
    <div class="col-md-2"> <div class="align-middle"> <router-link to="/"> <img src="../assets/logo.png" class="img-fluid logo-brand"> </router-link> </div> </div>
    <div class="col-md-8"> </div>
    <div class="col-md-2"> <div class="align-middle"> <router-link to="/"> <i class="fas fa-stethoscope"></i> Contact </router-link> </div> </div>
  </div>
</template>

<script>
export default { }
</script>

<style lang="scss" scoped>
@import "../styles/colors.scss";

#host {
  background-color: #ffffff;
  border-bottom: 2px solid $grey-l;

  .logo-brand {
    max-height: 60px;
  }

  > div {
    display: table;

    > div {
      height: 60px;
      display: table-cell;
    }
  }
}
</style>
