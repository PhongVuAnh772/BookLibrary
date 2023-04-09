const db = require("../models");

const getData = async (req, res) => {
  const response = await db.Rule.findAll({
    where: { is_deleted: false },
  });
  return res.status(200).json(response);
};

const deleteData = async (req, res) => {
  const id = req.params.id;

  try {
    const Rules = await db.Rule.findByPk(id);

    if (!Rules) {
      return res.status(404).send({ error: "Rule not found" });
    } else {
      await Rules.update({ is_deleted: true });

      res.send({ message: "Rule deleted successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Server error" });
  }
};
module.exports = {
  getData,
  deleteData,
};
