const db = require('../models')
const data = require('../../book.json')
const generateCode = require('../helpers/fn')
const fs = require('fs');


const insertData = (data) => new Promise(async(resolve, reject) => {
    try {

        let check = await db.Rule.create({
            rule_name: data.rule_name,
            rule_desciption: data.rule_desciption,
            status: data.status,
            
        })
        if(!check){
            resolve({
                success: false,
                message: 'tạo bản ghi thất bại'
            })
        }else {
            resolve({
                success: true,
                message: 'tạo bản ghi thành công'
            })
        }
    } catch (err) {
        reject(err)
    }
}
)
module.exports = {
    insertData
}