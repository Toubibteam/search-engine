'use strict'

import mutations from './mutations'
import state from './state'

const store = {
  'state': state,
  'mutations': mutations,
  'strict': process.env.NODE_ENV !== 'production'
}

export default store
