<template>
  <div class="container-fluid m-0 p-0">
    <div id="fixed-img"> </div>

    <div id="billboard" class="m-0 p-3">
      <div class="filter"> </div>
      <div id="slogan" class="align-middle">
        <img src="../assets/logo-txt-white.png" class="img-fluid">
        <h1>Faisons du codage un processus rapide et intuitif</h1>

        <div id="search-engine" class="mt-5 p-3 rounded">
          <app-search-engine v-bind:data="{ API_BASE_URL: data.API_BASE_URL }"> </app-search-engine>
        </div>
      </div>
    </div>

    <section class="px-2 py-5">
      <div class="content">
        <h3 class="my-4">Pourquoi utiliser <span class="font-bold">Toubib</span> ?</h3>

        <div class="row">
          <div class="col-md-4 py-3">
            <div class="icon">
              <div class="square rounded-circle"> </div>
              <img src="../assets/computer.png" class="img-fluid">
            </div>
            <p>Une navigation intuitive et fluide, conçue par et pour les codeurs médicaux</p>
          </div>
          <div class="col-md-4 py-3">
            <div class="icon">
              <div class="square rounded-circle"> </div>
              <img src="../assets/books.png" class="img-fluid">
            </div>
            <p>Un contenu régulièrement mis à jour et enrichi par les contributions de nos utilisateurs</p>
          </div>
          <div class="col-md-4 py-3">
            <div class="icon">
              <div class="square rounded-circle"> </div>
              <img src="../assets/magnifier.png" class="img-fluid">
            </div>
            <p>La garantie de trouver le bon code en un clic grâce à notre moteur de recherche intelligent</p>
          </div>
        </div>
      </div>
    </section>

    <app-footer> </app-footer>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  /*
  Props:
    data: (object)
      API_BASE_URL: (string) base API URL to connect to
  */
  props: [ 'data' ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/colors.scss";

.absolute-abst {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

section {
  > .content {
    max-width: 1000px;
    margin: auto;
  }
}

button {
  cursor: pointer;
}

#fixed-img {
  @extend .absolute-abst;
  background-image: url('../assets/microscope.jpg');
  background-position: bottom;
  background-size: cover;
  z-index: -20;
  min-height: 100vh;
  height: 100vh;
}

#billboard {
  display: table;
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100vh;

  > .filter {
    @extend .absolute-abst;
    background-color: $blue;
    z-index: -10;
    opacity: 0.5;
  }

  #slogan {
    display: table-cell;
    color: $white;
  }
}

#search-engine {
  background-color: white;
  color: $black;
  max-width: 1000px;
  margin: 0 auto;
}

.font-bold {
  font-weight: bold;
}

.icon {
  position: relative;
  height: 80px;
  width: 80px;
  margin: auto;

  .square {
    height: 100%;
    width: 100%;
    background-color: $navy;
    position: absolute;
    z-index: -2;
  }

  img {
    max-height: 60px;
    position: absolute;
    left: 10px;
    top: 10px;
  }
}
</style>
