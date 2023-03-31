const db = require('../models')
const data = require('../../book.json')
const generateCode = require('../helpers/fn')


const insertData = () => new Promise((resolve, reject) => {
    try {
        
        const dataArr = Object.entries(data)
        dataArr.forEach(async(item) => {
            item[1]?.map(async(book) => {
                await db.Book.create({
                    book_name: book.bookTitle,
                    book_price: +book.bookPrice,
                    book_inventory: book.available,
                    book_author: book.author,
                    book_category: book.upc,
                    category_code: generateCode.generateCode(item[0])
                })
            })
        }) 
    } catch (err) {
        reject(err)
    }
}
)
module.exports = {
    insertData
}