const express = require('express')
const app = express()
const port = 3000

app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index.pug', {
    title: 'Hey',
    message: 'Hello'
  })
})

// app.get('/', (req, res) => {
//   res.send('Hello World !')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})