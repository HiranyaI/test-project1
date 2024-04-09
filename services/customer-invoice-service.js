const customerInvoiceModel = require('../models/customer-invoice-model');

async function getInvoicesByCustomerName(cName) {
    console.log(cName);
    try {
        const result = await customerInvoiceModel.findOne()
        return { status: 200, result };
    } catch (error) {
        return { status: 400, error };
    }
}

module.exports = {
    getInvoicesByCustomerName,
};
