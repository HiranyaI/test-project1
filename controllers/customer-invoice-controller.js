const InvoiceService = require('../services/customer-invoice-service');
const response = require("../utils/response-utils");

async function getInvoicesByCustomerName(req, res) {
    //const { customerName: cName } = req.params; 
    console.log(req.params);
    const customerName = req.params.cName;
    console.log(customerName);
    try {
        const result = await InvoiceService.getInvoicesByCustomerName(customerName);
        if (result.status === 200) {
            return response.sendSuccessResponse("Invoices fetched successfully", result, res);
        } else {
            return response.sendBadRequestResponse("Error while fetching invoices", null, result.error, res);
        }
    } catch (err) {
        return response.sendServerErrorResponse("Error while fetching invoices", null, err, res);
    }
}

module.exports = {
    getInvoicesByCustomerName,
};
