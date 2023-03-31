const express = require('express')
const cors = require('cors')
const rootRouter = require('./src/routers/web.js')
const { Sequelize } = require('sequelize')

const PORT = 5000

const sequelize = new Sequelize('bookstoremanagerment', 'root', '22092002', {
    host: 'localhost',
    dialect: 'mysql'
});


const connectDB = async () => {

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}



connectDB()
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', rootRouter)







app.listen(PORT, () => console.log(`app listened on port: ${PORT}`))
