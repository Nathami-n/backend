const express = require('express')
const {logger} = require('./middleware/eventLogger')
const errorHandler = require('./middleware/errorHandler')
const app = express()
const path = require('path')
const PORT = 3000 || process.env.PORT

app.use(logger)
//static files
app.use(express.static(path.join(__dirname, 'public')));

//middleware for logging events


app.use('/', (req,res)=> {
    res.send('hello')
})

app.use('/nathan', (req, res) => {
    res.json({success: true, message: 'hello'})
})


app.use(errorHandler)

app.listen(PORT, ()=> {
    console.log(`listening on ${PORT}`)
})