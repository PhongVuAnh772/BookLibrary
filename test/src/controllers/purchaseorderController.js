const db = require('../models')

const getData = async (req, res) =>  {
        const response = await db.purchaseorder.findAll();
        return res.status(200).json(response);    
}


module.exports = {
    getData
}