<template>
  <div class="container-fluid m-0 p-0">
    <div id="billboard" class="m-0 p-0">
      <div class="background"> </div>
      <div class="filter"> </div>
      <div id="logo" class="align-middle">
        <img src="../assets/logo-txt-white.png" class="img-fluid">
      </div>
    </div>

    <!-- <router-link to="codage">Moteur de recherche</router-link> -->

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

    <section id="search-engine" class="px-2 py-5">
      <div class="background"> </div>
      <div class="filter"> </div>
      <div class="content align-middle">
        <h3>Essayez notre <span class="font-bold">moteur de recherche intelligent</span> !</h3>

        <router-link to="codage">
          <button class="btn btn-warning mt-4"> Accéder au moteur <i class="fas fa-user-md"></i> </button>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
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

#billboard {
  display: table;
  position: relative;
  width: 100%;
  min-height: 50vh;
  height: 50vh;

  #logo {
    display: table-cell;
  }

  > .background {
    @extend .absolute-abst;
    background-image: url('../assets/microscope.jpg');
    background-position: center;
    background-size: cover;
    z-index: -20;
  }

  > .filter {
    @extend .absolute-abst;
    background-color: #2d2281;
    z-index: -10;
    opacity: 0.5;
  }
}

#search-engine {
  display: table;
  position: relative;
  width: 100%;
  min-height: 50vh;
  height: 50vh;
  border-top: 10px solid $navy;
  color: $white;

  > .background {
    @extend .absolute-abst;
    background-image: url('../assets/pattern-hexagons.png');
    background-position: center;
    z-index: -20;
    opacity: 0.8;
  }

  > .filter {
    @extend .absolute-abst;
    background-color: #2d2281;
    z-index: -10;
    opacity: 0.85;
  }

  > .content {
    display: table-cell;
  }
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
