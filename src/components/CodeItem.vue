<template>
  <div class="host container-fluid">
    <div class="header row py-2" v-on:click="showDetails">
      <div class="col-md-2"> {{data.code}} </div>
      <div class="col-md-8 text-left"> {{data.description}} </div>
      <div class="col-md-1"> {{data.tarif}} </div>
      <div class="col-md-1"> <span class="badge" v-bind:class="{ 'badge-ccam': data.type == 'CCAM', 'badge-cim': data.type == 'CIM' }">{{data.type}}</span> </div>
    </div>

    <transition name="show">
      <div class="py-2" v-if="detailsShown">
        <div class="row" v-if="associatedCodes.length > 0">
          <div class="col-md-2"> </div>
          <div class="col-md-3 text-left font-bold"> Codes associés </div>
          <div class="col-md-7 text-left">
            <p v-for="(code, id) in associatedCodes" :key="id">
              {{code.code}} ({{code.type}})
            </p>
          </div>
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
      API_BASE_URL: (string) base API URL to connect to
      code: (string) id of the code
      description: (string) description of the code
      tarif: (string) price of the code
      type: (string) type of the code, either CCAM or CIM
  */
  props: [ 'data' ],
  data () {
    return {
      detailsShown: false,
      associatedCodes: [ ],
      fetchingDetails: false,
      detailsFetched: false,
      trackingSelection: false,
      selectionTracked: false
    }
  },
  methods: {
    showDetails () {
      if (!this.detailsFetched && !this.fetchingDetails) {
        this.fetchDetails()
      }

      if (!this.selectionTracked && !this.trackingSelection) {
        this.trackCodeSelection()
      }

      this.detailsShown = !this.detailsShown
    },
    fetchDetails () {
      this.fetchingDetails = true
      let url = `${this.data.API_BASE_URL}/codes/details/preview/${this.data.code}`

      let options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      this.$http
        .get(url, options)
        .then(response => {
          this.fetchingDetails = false
          this.detailsFetched = true

          let body = response.body
          if (body !== null) {
            let cim = body.cim.map((el, id) => {
              let newEl = {
                'code': el.c,
                'type': 'CIM'
              }
              return newEl
            })

            let ccam = body.ccam.map(el => {
              let newEl = {
                'code': el.c,
                'type': 'CCAM'
              }
              return newEl
            })

            this.associatedCodes = cim.concat(ccam)
          }
        }, response => {
          this.fetchingDetails = false
          console.log(response)
        })
    },
    trackCodeSelection () {
      this.trackingSelection = true

      let payload = {
        'code': this.data.code,
        'type': this.data.type
      }

      this.$store.dispatch('trackCodeSelection', payload)
        .then(() => {
          this.selectionTracked = true
        })
        .catch(() => { })
        .finally(() => {
          this.trackingSelection = false
        })
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
