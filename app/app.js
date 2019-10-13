const express        = require('express')
const app            = express()
const router         = express.Router
const appRouter      = require('./appRouter')
const config         = require('./config/config.json')

app.use('/', appRouter)

app.listen(config.server.port, () => console.log(`Server running on localhost:${config.server.port}`))

module.exports = router