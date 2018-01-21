<template>
  <div class="row py-2"
    v-bind:class="{ header: data.isHeader, code: !data.isHeader }"
    >
    <div class="col-md-2"> {{data.code}} </div>
    <div class="col-md-9 text-left"> {{data.title}} </div>
    <div class="col-md-1"> {{data.rate}} </div>
  </div>
</template>

<script>
export default {
  props: [ 'data' ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*///////////// Item /////////////*/

.code {
  cursor: pointer;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: rgba(150,150,150,0.1);
}

.code:hover {
  background-color: rgba(0,150,255,0.1);
  border-color: rgba(0,150,255,0.1);
}

/*///////////// Title /////////////*/

.header,
.header:hover {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: rgba(150,150,150,0.1);
  font-weight: bold;
}

</style>
