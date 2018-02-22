<template>
  <div class="container-fluid m-0 px-3 w-100">
    <div class="container-fluid input-group">
      <div class="row w-100 mx-auto">
        <input
          type="text"
          class="form-control rounded-0 col-md-9"
          placeholder="Insérez votre recherche"
          aria-label="Insérez votre recherche"
          aria-describedby="basic-addon2"
          v-model="diagnostic"
          v-on:keyup.13="fetchCodes"
          >
        <button
          type="button"
          class="btn text-truncate rounded-0 col-md-3"
          v-bind:class="{ 'btn-outline-primary': !loading, 'btn-outline-secondary': loading }"
          v-on:click="fetchCodes"
          >
          Rechercher
        </button>

      </div>
    </div>

    <div id="filters" v-if="codes.length !== 0" class="container-fluid mt-4">
      <button
        class="btn"
        v-bind:class="{ 'btn-cim': filters.displayCIM, 'btn-outline-secondary': !filters.displayCIM }"
        v-on:click="toggleCIM"
        >
        CIM
      </button>
      <button
        class="btn"
        v-bind:class="{ 'btn-ccam': filters.displayCCAM, 'btn-outline-secondary': !filters.displayCCAM }"
        v-on:click="toggleCCAM"
        >
        CCAM
      </button>
    </div>

    <div v-if="displayedCodes.length !== 0" class="mt-4">
      <div class="container-fluid">
        <div id="code-list-header" class="row">
          <div class="col-md-2"> Code </div>
          <div class="col-md-8"> Intitulé </div>
          <div class="col-md-1"> Tarif </div>
          <div class="col-md-1"> Type </div>
        </div>
      </div>
      <div v-for="(code, index) in displayedCodes" :key="index">
        <code-item v-bind:data="Object.assign({}, code, { API_BASE_URL: data.API_BASE_URL })"></code-item>
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
      displayedCodes: [ ],
      filters: {
        displayCIM: true,
        displayCCAM: true
      },
      loading: false
    }
  },
  computed: {
    codes () {
      return this.$store.state.codes
    }
  },
  methods: {
    toggleCIM () {
      this.filters.displayCIM = !this.filters.displayCIM
      this.displayedCodes = this.updateDisplayedCodes(this.codes)
    },
    toggleCCAM () {
      this.filters.displayCCAM = !this.filters.displayCCAM
      this.displayedCodes = this.updateDisplayedCodes(this.codes)
    },
    updateDisplayedCodes (codes) {
      let filteredCodes = codes

      if (!this.filters.displayCIM) filteredCodes = filteredCodes.filter(c => c.type !== 'CIM')
      if (!this.filters.displayCCAM) filteredCodes = filteredCodes.filter(c => c.type !== 'CCAM')

      return filteredCodes
    },
    fetchCodes () {
      this.loading = true
      this.$store
        .dispatch('fetchCodes', { 'search': this.diagnostic })
        .then(() => {
          this.displayedCodes = this.updateDisplayedCodes(this.codes)
        })
        .catch(() => { })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/colors.scss";

button {
  cursor: pointer;
}

#code-list-header {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: $grey-l;
  font-weight: bold;
}

.btn-cim {
  color: white;
  border-color: $cim;
  background-color: $cim;
}

.btn-ccam {
  color: white;
  border-color: $ccam;
  background-color: $ccam;
}
</style>
