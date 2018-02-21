'use strict'

import state from './state'

const store = {
  'state': state,
  'strict': process.env.NODE_ENV !== 'production'
}

export default store
