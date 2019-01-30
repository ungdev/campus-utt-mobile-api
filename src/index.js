const http = require('http')
const main = require('./main')
const dotenv = require('dotenv')

module.exports = async function(app, express) {
  dotenv.config()
  main(app)

  const server = http.Server(app)

  app.locals.app = app
  app.locals.server = server

  if (process.send) {
    process.send('ready')
  }

  return app
}
