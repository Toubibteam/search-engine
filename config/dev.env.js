'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

const API_BASE_URL = 'http://localhost:8040'

module.exports = merge(prodEnv, {
  NODE_ENV: JSON.stringify('development'),
  API_BASE_URL: JSON.stringify(API_BASE_URL),
  API: JSON.stringify({
    SEARCH: `${API_BASE_URL}/codes/search`
  })
})
