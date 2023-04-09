const updateInvoice = require("../service/updateInvoice");
const interalServerError = require("../middlewares/handle_errors");
const db = require("../models");

const getData = async (req, res) => {
  const response = await db.Arinvoice.findAll({
    where: { customer_id: false },
  });
  return res.status(200).json(response);
};

const updateArinvoice = async (req, res) => {
  try {
    let { nameCus, phone, address, email } = req.body;
    if (!nameCus || !phone || !address || !email) {
      return res.status(200).json({
        success: false,
        message: "Thiếu thông tin truyền lên",
      });
    }
    const response = await updateInvoice.insertData(req.body);
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      success: false,
      message: "Có lỗi từ phía server",
    });
  }
};

const deleteData = async (req, res) => {
  const ids = req.params.id;

  try {
    const Arinvoices = await db.Arinvoice.findByPk(ids);

    if (!Arinvoices) {
      return res.status(200).json({
        success: false,
        message: `Không tìm thấy dữ liệu ${ids}`,
      });
    }
    await Arinvoices.update({ customer_id: true });
    res.send({ message: "Rule deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(200).json({
      success: false,
      message: "Có lỗi từ phía server",
    });
  }
};

module.exports = {
  updateArinvoice,
  getData,
  deleteData,
};
