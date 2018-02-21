'use strict'

import uuidV4 from 'uuid/v4'

const state = {
  // id of the user to track actions
  'id': uuidV4(),
  // search performed
  'search': '',
  // codes retrieved from the request
  'codes': [ ]
}

export default state
