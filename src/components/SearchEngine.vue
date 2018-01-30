<template>
  <div class="container-fluid px-5">
    <app-header v-bind:data="{ links: [{ to: '/', title: 'Accueil' }] }"></app-header>

    <h1 class="mb-5">Le codage <span class="font-bold">facile</span> et <span class="font-bold">performant</span></h1>

    <div id="search" class="w-100">
      <div class="input-group mb-3">
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

      <div>
        <code-item v-bind:data="{ id: '#', code: 'Code', title: 'Intitulé', rate: 'Tarif', isHeader: true }"></code-item>
        <div v-for="(code, index) in codes" :key="index">
          <code-item v-bind:data="code"></code-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchEngine',
  data () {
    return {
      diagnostic: '',
      codes: [ ],
      loading: false
    }
  },
  props: [ 'data' ],
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
              code: o.code_id,
              title: o.description.description,
              rate: o.metric,
              badge: o.description.type
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

h1, h2 {
  font-weight: normal;
}

.font-bold {
  font-weight: bold;
}

#search {
  margin: auto;
  max-width: 850px;
}
</style>
