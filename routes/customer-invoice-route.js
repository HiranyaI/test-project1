const express = require('express');
const router = express.Router();
const controller = require("../controllers/customer-invoice-controller");

//router.get("/customer/:cName", controller.getInvoicesByCustomerName);

router.route("/customer/:cName").get((req, res) => {
    controller.getInvoicesByCustomerName(req,res)
})

module.exports = router;
