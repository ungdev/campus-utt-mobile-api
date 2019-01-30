const dotenv = require('dotenv')

const localConfig = dotenv.config()
module.exports = localConfig.parsed
  ? Object.assign({}, process.env, localConfig.parsed)
  : process.env
