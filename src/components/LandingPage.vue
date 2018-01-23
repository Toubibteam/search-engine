<template>
  <div class="container-fluid p-0">
    <div id="billboard" class="m-0 p-0">
      <div id="logo" class="align-middle">
        <img src="../assets/logo-blue.png" class="img-fluid">
      </div>
    </div>

    <!-- <router-link to="codage">Moteur de recherche</router-link> -->

    <div id="content" class="my-5 px-2">
      <h1 class="my-4">Pourquoi utiliser Toubib ?</h1>

      <div class="row">
        <div class="col-md-4 py-3">
          <div class="icon">
            <div class="square rounded-circle"> </div>
            <img src="../assets/computer.png" class="img-fluid">
          </div>
          <h4>Une navigation intuitive et fluide, conçue par et pour les codeurs médicaux</h4>
        </div>
        <div class="col-md-4 py-3">
          <div class="icon">
            <div class="square rounded-circle"> </div>
            <img src="../assets/books.png" class="img-fluid">
          </div>
          <h4>Un contenu régulièrement mis à jour et enrichi par les contributions de nos utilisateurs</h4>
        </div>
        <div class="col-md-4 py-3">
          <div class="icon">
            <div class="square rounded-circle"> </div>
            <img src="../assets/magnifier.png" class="img-fluid">
          </div>
          <h4>La garantie de trouver le bon code en un clic grâce à notre moteur de recherche intelligent</h4>
        </div>
      </div>
    </div>
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
  display: table;
  background-color: #2d2281;
  width: 100%;
  min-height: 50vh;
  height: 50vh;
}

#logo {
  display: table-cell;
}

#content {
  max-width: 1000px;
  margin: auto;
}

.icon {
  position: relative;
  height: 80px;
  width: 80px;
  margin: auto;
}

.icon .square {
  height: 100%;
  width: 100%;
  background-color: navy;
  position: absolute;
  z-index: -2;
}

.icon img {
  max-height: 60px;
  position: absolute;
  left: 10px;
  top: 10px;
}

</style>
