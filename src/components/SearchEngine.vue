<template>
  <div class="container-fluid m-0 px-5 w-100">
    <div class="container-fluid input-group">
      <input
        type="text"
        class="form-control rounded-0 col-10"
        placeholder="Insérez votre recherche"
        aria-label="Insérez votre recherche"
        aria-describedby="basic-addon2"
        v-model="diagnostic"
        v-on:keyup.13="makeRequest"
        >
        <button
          type="button"
          class="btn text-truncate rounded-0"
          v-bind:class="{ 'btn-outline-primary': !loading, 'btn-outline-secondary': loading }"
          v-on:click="makeRequest"
          >
          Rechercher
        </button>
    </div>

    <div v-if="codes.length !== 0">
      <div class="container-fluid mt-4">
        <div id="code-list-header" class="row">
          <div class="col-md-2"> Code </div>
          <div class="col-md-8"> Intitulé </div>
          <div class="col-md-1"> Tarif </div>
          <div class="col-md-1"> Type </div>
        </div>
      </div>
      <div v-for="(code, index) in codes" :key="index">
        <code-item v-bind:data="code"></code-item>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchEngine',
  /*
  Props:
    data: (object)
      API_BASE_URL: (string) base API URL to connect to
  */
  props: [ 'data' ],
  data () {
    return {
      diagnostic: '',
      codes: [ ],
      loading: false
    }
  },
  methods: {
    makeRequest: function () {
      let url = this.data.API_BASE_URL + '/api'

      let body = {
        diagnostic: this.diagnostic
      }

      let options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      this.loading = true
      this.$http
        .post(url, JSON.stringify(body), options)
        .then(response => {
          console.log('success')
          this.codes = response.body.map((o, i) => {
            return {
              id: i,
              code: o.code,
              description: o.description,
              tarif: 0,
              type: o.type
            }
          })
          this.loading = false
        }, response => {
          console.log('fail')
          console.log(response)
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/colors.scss";

#code-list-header {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: $grey-l;
  font-weight: bold;
}
</style>
