const update = require("../service/update");
const interalServerError = require("../middlewares/handle_errors");

const updateJSON = async (req, res) => {
  try {
    let { name, category, inventory, price, author } = req.body;
    if (!name || !category || !inventory || !price || !author) {
      return res.status(200).json({
        success: false,
        message: "Thiếu thông tin truyền lên",
      });
    }
    const response = await update.insertData(req.body);
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      success: false,
      message: "Có lỗi từ phía server",
    });
  }
};

module.exports = {
  updateJSON,
};
