// ===> node js 
// const HTTP = require('http')
// const PORT = 3000

// const app = HTTP.createServer((request, response) => {
//   response.statusCode = 200
//   response.setHeader = ('Content0Type', 'text/pain')
//   response.end('Hello World')
// })

// app.listen(PORT, () => {
//   console.log(`server is running on http://localhost:${PORT}`)
// })


// ===> express
const express = require('express')
const app = express()

app.get('/', (request , response) => {
  response.status(200).json({
    'aa':'aa'
  })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`)
})