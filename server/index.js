import express from 'express'
import webpack from 'webpack'

const render = require('../dist/assets/SSR')

const port = process.env.PORT || 3000
const app = express()

app.get('/', render.default)

app.listen(port)
console.log(`Listening to port ${port}`)