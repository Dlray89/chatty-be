const express = require('express')
const bodyParser = require('body-parser')
const cor = require('cors')

//helps with building Rest API's
const app = express()


//provides express middleware to enable CORS
let corsOptions = {
    origin: 'https://chatty-be.herokuapp.com'
}
app.use(cor(corsOptions))

//help parse the request being sent and creates the res.body object
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const db = require('./model')
const Role = db.role
db.sequelize.sync({ force: true }).then(() => {
    console.log('drop and resync DB')
    initial()
})

function initial() {
    Role.create({
        id: 1,
        name: "user"
    })

    Role.create({
        id: 2,
        name:'mod'
    })

    Role.create({
        id: 3,
        name:'admin'
    })
}

db.sequelize.sync()

require('./routes/auth.routes')(app)
require('./routes/user.router')(app)
require('./routes/comments.route')(app)


app.get('/', (req, res) => {
    res.json({message: 'Welcome to chatty backend'})
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log('Server up!!')
})