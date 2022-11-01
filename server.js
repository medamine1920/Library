if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')

const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, URL, {useNewUrlParser: true })
const db = mongoose.connection


const url = "mongodb+srv://medamine:medamine@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected !'))


app.use('/', indexRouter)

app.use('/authors', authorRouter)


app.listen(process.env.PORT || 3000)
