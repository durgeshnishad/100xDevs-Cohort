const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const port = 3000

app.use(bodyParser.json())// requires dependency, need to install and maintain  'body-parser' alternative is app.use(express.json()) comes with express

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/postreq1', (req, res) => {
  console.log(req.body)
  console.log(req.header)
  res.send('Hello from Post method/body-parser!')
})

app.post('/postreq2', (req, res) => {
  console.log(req.query.message)
  res.send('Hello from Post method/query params!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})