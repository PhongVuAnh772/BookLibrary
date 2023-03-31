const updateBookBill = require('../service/updateBookBill')


const updateBookBills = async (req, res) => {
    try {
        const response = await updateBookBill.updateBookBill()
        response.statusCode = 200
    }
    catch (err) {
     return res
    }
}

module.exports = {
    updateBookBills
}