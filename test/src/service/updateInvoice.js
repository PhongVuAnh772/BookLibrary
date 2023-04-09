const db = require("../models");
const data = require("../../book.json");
const generateCode = require("../helpers/fn");
const fs = require("fs");

const insertData = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      let check = await db.Arinvoice.create({
        name: data.nameCus,
        phone: data.phone,
        adress: data.address,
        paid: 0,
        tob: 0,
        customer_id: 0,
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
  insertData,
};
