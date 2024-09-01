const express = require('express')
require('colors');
const connectDB = require('./db')
require('dotenv').config()
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')

const app = express()
const port = process.env.PORT

// middleware
app.use(cors())
mgmt_db
connectDB('mongodb+srv://ommydev:dev254@cluster0.5uisi.mongodb.net/mgmt_db?retryWrites=true&w=majority&appName=Cluster0/')

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, () => console.log(`Server running on port ${port}!...`.yellow.italic))