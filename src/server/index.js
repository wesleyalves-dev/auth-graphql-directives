const express = require('express')
const morgan = require('morgan')
const apollo = require('./apollo')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

apollo.applyMiddleware({ app, path: '/graphql' })

module.exports = app
