const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController')
const bookController = require('../controllers/bookController')
const insertController = require('../controllers/insertController')
const updateJSON = require('../controllers/updateJSON')
const ruleController = require('../controllers/RuleController')
const updateRule = require('../controllers/updateRule')
const bookBillController = require('../controllers/bookBillController')
const arinvoiceController = require('../controllers/arinvoiceController')




router.post('/login', accountController.loginUser)
router.post('/register', accountController.registerUser)
router.get('/book', bookController.getData)
router.get('/insert', insertController.insertData)
router.post('/update-json-file', updateJSON.updateJSON)
router.get('/rule', ruleController.getData)
router.post('/add-rule', updateRule.updateRule)
router.post('/add-arinvoice', arinvoiceController.updateArinvoice)
router.delete('/delete-row/:key', bookBillController.updateBookBills)



module.exports = router