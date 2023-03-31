const insert = require('../service/insert')
const interalServerError = require('../middlewares/handle_errors')


const insertData = async (req, res) => {
    try {
        const response = await insert.insertData()
        response.statusCode = 200
    }
    catch (err) {
     return interalServerError(res)
    }
}

module.exports = {
    insertData
}