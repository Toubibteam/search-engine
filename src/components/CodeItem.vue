<template>
  <div class="row py-2"
    v-bind:class="{ header: data.isHeader, code: !data.isHeader }"
    >
    <div class="col-2"> {{data.code}} </div>
    <div class="col-8 text-left"> {{data.title}} </div>
    <div class="col-1"> {{data.rate}} </div>
    <div class="col-1"> <span class="badge badge-ccam">{{data.badge}}</span> </div>
  </div>
</template>

<script>
export default {
  props: [ 'data' ]
}
</script>

<style lang="scss" scoped>
@import "../styles/colors.scss";

/*///////////// Item /////////////*/

.code {
  cursor: pointer;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: $grey-l;
}

.code:hover {
  background-color: $blue-l;
  border-color: $blue-l;
}

/*///////////// Title /////////////*/

.header,
.header:hover {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: $grey-l;
  font-weight: bold;
}

/*///////////// Common /////////////*/

.badge-ccam {
  background-color: $ccam;
}
</style>
