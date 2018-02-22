'use strict'

const API_BASE_URL = 'https://catalysr-api-prod.herokuapp.com'

module.exports = {
  NODE_ENV: JSON.stringify('production'),
  API_BASE_URL: JSON.stringify(API_BASE_URL),
  API: JSON.stringify({
    SEARCH: `${API_BASE_URL}/codes/search`,
    TRACK_CODE_SELECTION: `${API_BASE_URL}/tracking/code-selection`
  })
}
