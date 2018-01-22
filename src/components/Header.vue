<template>
  <div id="host" class="container-fluid py-3">
    <img src="../assets/logo.png" class="img-fluid logo-img">

    <div>
      <router-link v-for="(link, index) in data.links" :key="index" v-bind:to="link.to"> {{ link.title }} </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'data' ]
}
</script>

<style scoped>

#host {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: rgba(150,150,150,0.1);
}

.logo-img {
  max-height: 80px;
}

</style>
