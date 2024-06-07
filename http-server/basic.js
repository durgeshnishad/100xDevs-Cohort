const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/postreq', (req, res) => {
  console.log(req.body)
  console.log(req.header)
  res.send('Hello from Post method!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})