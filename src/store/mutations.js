'use strict'

const mutations = {
  /* Save the search performed by the user.

    ARGS:
      state: (object) actual state
      payload: (object)
        search: (string)
  */
  saveSearch (state, payload) {
    state.search = payload.search
  },
  /* Save the codes retrieved from the search engine.

    ARGS:
      state: (object) actual state
      payload: (object)
        codes: (array) contains the codes to save
  */
  saveCodes (state, payload) {
    state.codes = payload.codes
  }
}

export default mutations
