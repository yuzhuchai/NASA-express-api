require ('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
const app = express()
const PORT = process.env.PORT

require('./db/db')


app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false
}))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const corsOptions = {
	origin: process.env.ORIGIN,
	credentials: true,
	optionSuccessStatus: 200
}


app.listen(process.env.PORT, () => {
	console.log('listening on port '+process.env.PORT);
})