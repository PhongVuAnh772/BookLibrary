const updateBookBill = require("../service/updateBookBill");
const db = require("../models");

const getData = async (req, res) => {
  const response = await db.booklistinbills.findAll();
  return res.status(200).json(response);
};

const updateBookBills = async (req, res) => {
  try {
    const response = await updateBookBill.updateBookBill();
    response.statusCode = 200;
  } catch (err) {
    return res;
  }
};

module.exports = {
  updateBookBills,
  getData,
};
