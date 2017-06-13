import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../app/components/App'
import html from '../app/html'

const port = process.env.PORT || 3000
const app = express()

app.get('/', (req,res) => {
  const appToString = renderToString(<App/>)

  res.send(html({
    body: appToString,
    title: 'Render From Server'
  }))
})

app.listen(port)
console.log(`Listening to port ${port}`)