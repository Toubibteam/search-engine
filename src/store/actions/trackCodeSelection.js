'use strict'

import axios from 'axios'

/* Send a code selection event message to the API.

  ARGS:
    context: (object) copy of the store
    payload: (object)
      code: (string) id of the selected code
*/
const action = ({ state }, payload) => {
  return new Promise((resolve, reject) => {
    let url = process.env.API.TRACK_CODE_SELECTION

    let body = {
      'id': state.id,
      'search': state.search,
      'code': payload.code
    }

    let headers = { 'Content-Type': 'application/json' }

    axios({
      'url': url,
      'method': 'post',
      'headers': headers,
      'data': body
    })
      .then(response => {
        resolve()
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export default action
