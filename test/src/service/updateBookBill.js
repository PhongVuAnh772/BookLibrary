const db = require("../models");
const data = require("../../book.json");
const generateCode = require("../helpers/fn");
const fs = require("fs");

const updateBookBill = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      let check = await db.booklistinbills.create({
        name_book: DataTypes.STRING,
        quatity: DataTypes.INTEGER,
        total_price: DataTypes.INTEGER,
        bill_id: DataTypes.INTEGER,
      });
      if (!check) {
        resolve({
          success: false,
          message: "tạo bản ghi thất bại",
        });
      } else {
        resolve({
          success: true,
          message: "tạo bản ghi thành công",
        });
      }
    } catch (err) {
      reject(err);
    }
  });
module.exports = {
  updateBookBill,
};
