const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser') 

const {startDatabase,isConnected} = require('./config/connection')
const {getRouter, postRouter, deleteRouter, putRouter} = require('./Routes/Tops.routes')
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.get("/",(req,res) =>{
    res.send("Hello world");
});
app.use(getRouter)
app.use(postRouter)
app.use(deleteRouter)
app.use(putRouter)
app.get('/home', (req, res) => {
    res.json({
      message: isConnected() ? 'Database is connected' : 'Disconnected from database'
    })
    })
startDatabase()
.then(()=>{
  app.listen(3000,async()=>{
    console.log('Starting Server ....🚀')
    console.log('Server started running on port 3000 🏃‍♂️')
})
})


