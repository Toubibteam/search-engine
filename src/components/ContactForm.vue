<template>
  <form class="container-fluid m-0 p-0 w-100">
    <div class="form-group">
      <label for="fullnameInput">Prénom & Nom</label>
      <input type="text" class="form-control" id="fullnameInput" placeholder="Greg House">
    </div>
    <div class="form-group">
      <label for="establishmentInput">Établissement</label>
      <input type="text" class="form-control" id="establishmentInput" placeholder="Princeton Plainsboro Teaching Hospital">
    </div>
    <div class="form-group">
      <label for="phoneInput">Tél.</label>
      <input type="text" class="form-control" id="phoneInput" placeholder="+33x xx xx xx xx">
    </div>
    <div class="form-group">
      <label for="emailInput">Email</label>
      <input type="text" class="form-control" id="emailInput" placeholder="ghouse@ppth.com">
    </div>
    <button type="submit" class="btn btn-primary"> <i class="fas fa-paper-plane"></i> Envoyer </button>
  </form>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/colors.scss";

* {
  text-align: left;
}
</style>
