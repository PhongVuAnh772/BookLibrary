const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");
const bookController = require("../controllers/bookController");
const insertController = require("../controllers/insertController");
const updateJSON = require("../controllers/updateJSON");
const ruleController = require("../controllers/RuleController");
const updateRule = require("../controllers/updateRule");
const bookBillController = require("../controllers/bookBillController");
const arinvoiceController = require("../controllers/arinvoiceController");
const purchaseorderList = require("../controllers/purchaseorderController");
const customerList = require("../controllers/customerController");

router.post("/login", accountController.loginUser);
router.post("/register", accountController.registerUser);
router.get("/book", bookController.getData);
router.get("/purchaseorder", purchaseorderList.getData);
router.get("/customer", customerList.getData);
router.get("/insert", insertController.insertData);
router.post("/update-json-file", updateJSON.updateJSON);
router.get("/rule", ruleController.getData);
router.post("/add-rule", updateRule.updateRule);
router.delete("/collection/:id", arinvoiceController.deleteData);
router.get("/get-bookbill", bookBillController.getData);
router.get("/arinvoice-list", arinvoiceController.getData);

router.post("/add-arinvoice", arinvoiceController.updateArinvoice);
router.delete("/delete-book/:id", bookBillController.updateBookBills);
router.delete("/delete-rule/:id", ruleController.deleteData);

module.exports = router;
