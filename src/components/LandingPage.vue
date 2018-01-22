<template>
  <div class="container-fluid p-0">
    <div id="billboard" class="m-0 py-5">
      <img src="../assets/logo-blue.png" class="img-fluid">
    </div>

    <router-link to="codage">Moteur de recherche</router-link>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#billboard {
  background-color: #2d2281;
}

</style>
