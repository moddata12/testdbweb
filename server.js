const data = require('./data.json')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.get('/' , (req,res) => {
    res.send("<h1>Node.js is a Javascript runtime built on Chrome's v8 Javascript engine<h1>")
})
app.get('/api/getemployeedata' , (req,res) => {
    res.send(data)
})
app.listen(5000 , err => {
    if(err) console.log(err)
    console.log(`Server is started at PORT Number 5000`)
})
