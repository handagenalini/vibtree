const express = require('express');
const cors=require('cors')
const dotenv=require('dotenv')


const app = express();
app.use(cors())
dotenv.config()
app.use(express.json())


const routes=require('./Routes/twiliorouter')
app.use(routes)

app.listen(5000)