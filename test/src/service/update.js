const db = require('../models')
const data = require('../../book.json')
const generateCode = require('../helpers/fn')
const fs = require('fs');


const insertData = (data) => new Promise(async(resolve, reject) => {
    try {
        let check = await db.Book.create({
            book_author: data.author,
            book_category: data.category,
            book_name: data.name,
            book_inventory: data.inventory,
            book_price: data.price,
            category_code: ''
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