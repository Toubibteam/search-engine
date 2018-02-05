<template>
  <div class="host container-fluid">
    <div class="header row py-2" v-on:click="showDetails = !showDetails">
      <div class="col-md-2"> {{data.code}} </div>
      <div class="col-md-8 text-left"> {{data.title}} </div>
      <div class="col-md-1"> {{data.rate}} </div>
      <div class="col-md-1"> <span class="badge badge-ccam">{{data.badge}}</span> </div>
    </div>

    <div class="details row py-2" v-if="showDetails">
      <div class="col-md-2"> </div>
      <div class="col-md-3 text-left font-bold"> Codes associés </div>
      <div class="col-md-7 text-left">
        <p v-for="(ac, index) in associatedCodes" :key="index">
          {{ac}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'data' ],
  data () {
    return {
      showDetails: false,
      associatedCodes: [ 'AAA', 'BBB', 'CCC' ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/colors.scss";

.host {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: $grey-l;
}

.header {
  cursor: pointer;

  &:hover {
    background-color: $grey-l;
    border-color: $grey-l;
  }
}

.badge-ccam {
  background-color: $ccam;
}

.font-bold {
  font-weight: bold;
}
</style>
