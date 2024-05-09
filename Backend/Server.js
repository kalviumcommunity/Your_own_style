const express = require('express')
const {startDatabase,isConnected} = require('./config/connection')
const app = express()

app.get("/",(req,res) =>{
    res.send("Hello world");
});
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

