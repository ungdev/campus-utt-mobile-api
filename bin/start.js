#!/usr/bin/env node

'use strict'

// this will be overrided by .env and .env.local
process.env.NODE_ENV = 'production'

const express = require('express')
const debug = require('debug')('campus-utt-mobile-api:bin')
const app = express()
const env = require('../src/env')

require('../src')(app, express)

app.listen(process.env.PORT, () =>
  debug(`server started on port ${env.PORT} [${env.NODE_ENV}]`)
)
