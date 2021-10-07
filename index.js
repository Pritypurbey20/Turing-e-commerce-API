const express = require('express')

const app = express()
const Router = require('./Routes/routes')

app.use(express.json())
app.use('/',Router)

app.listen(3030,()=>console.log('Listening to the port..'))

