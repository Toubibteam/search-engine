'use strict'

import axios from 'axios'

const actions = {
  /* Fetch codes from API.

    ARGS:
      context: (object) copy of the store
      payload: (object)
        search: (string) search performed by the user
  */
  fetchCodes ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let url = process.env.API.SEARCH

      let body = {
        diagnostic: payload.search
      }

      let headers = { 'Content-Type': 'application/json' }

      axios({
        'url': url,
        'method': 'post',
        'headers': headers,
        'data': body
      })
        .then(response => {
          let codes = response.data.map((o, i) => {
            return {
              id: i,
              code: o.code,
              description: o.description,
              tarif: 0,
              type: o.type
            }
          })

          commit('saveCodes', { 'codes': codes })
          commit('saveSearch', { 'search': payload.search })
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default actions
