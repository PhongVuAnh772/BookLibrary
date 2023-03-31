const update = require('../service/updateRule')
const interalServerError = require('../middlewares/handle_errors')


const updateRule = async (req, res) => {
    try {
        let {rule_name, rule_desciption, status} = req.body
        if(!rule_name || !rule_desciption || !status){
            return res.status(200).json({
                success: false,
                message: 'Thiếu thông tin truyền lên'
            })
        }
        const response = await update.insertData(req.body)
        return res.status(200).json(response)
    }
    catch (err) {
        console.log(err)
        return res.status(200).json({
            success: false,
            message: "Có lỗi từ phía server"
        })
    }
}

module.exports = {
    updateRule
}