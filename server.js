const express = require('express')

const app = express()
const path = require('path')
const PORT = 3000 || process.env.PORT

//static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', (req,res)=> {
    res.send('hello')
})



app.listen(PORT, ()=> {
    console.log(`listening on ${PORT}`)
})