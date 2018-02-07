<template>
  <div class="host container-fluid">
    <div class="header row py-2" v-on:click="showDetails = !showDetails">
      <div class="col-md-2"> {{data.code}} </div>
      <div class="col-md-8 text-left"> {{data.title}} </div>
      <div class="col-md-1"> {{data.rate}} </div>
      <div class="col-md-1"> <span class="badge" v-bind:class="{ 'badge-ccam': data.badge == 'CCAM', 'badge-cim': data.badge == 'CIM' }">{{data.badge}}</span> </div>
    </div>

    <transition name="show">
      <div class="details row py-2" v-if="showDetails">
        <div class="col-md-2"> </div>
        <div class="col-md-3 text-left font-bold"> Codes associés </div>
        <div class="col-md-7 text-left">
          <p v-for="(ac, index) in associatedCodes" :key="index">
            {{ac}}
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  /*
  Props:
    data: (object)
      code: (string) id of the code
      title: (string) description of the code
      rate: (string) price of the code
      badge: (string) type of the code, either CCAM or CIM
  */
  props: [ 'data' ],
  data () {
    return {
      showDetails: false,
      associatedCodes: [ 'AAA', 'BBB', 'CCC' ],
      loadingAssociatedCodes: false
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

.badge-cim {
  background-color: $cim;
}

.font-bold {
  font-weight: bold;
}

/**************************************/
/*    ANIMATION
/**************************************/

.show-enter-active, .show-leave-active {
  transition: .5s ease-in-out;
  overflow: hidden;
}

.show-enter, .show-leave-to {
  opacity: 0;
}

.show-enter-to, .show-leave {
  opacity: 1;
}
</style>
