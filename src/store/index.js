'use strict'

import actions from './actions'
import mutations from './mutations'
import state from './state'

const store = {
  'state': state,
  'mutations': mutations,
  'actions': actions,
  'strict': process.env.NODE_ENV !== 'production'
}

export default store
