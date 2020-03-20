"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const invoiceData_1 = __importDefault(require("../models/invoiceData"));
const JWTSECRET = 'signupProject';
const pdfkit_1 = __importDefault(require("pdfkit"));
var getpdf = (req, res) => {
    console.log('in req', req.body);
    const productid = req.body.productID;
    console.log("getting id ", productid);
    invoiceData_1.default.findById(productid, (err, invoice) => {
        if (err) {
            console.log('not edited');
        }
        else {
            console.log('findby id product', invoice);
            // res.render('invoiceEdit',{invoice:invoice});
            const doc = new pdfkit_1.default;
            doc.pipe(res);
            doc.image(invoice.imageurl, 5, 5, { scale: .5 });
            doc.fontSize(10).text(invoice.companyname, { width: 500, align: 'right' });
            //.moveDown(0.5);
            doc.fontSize(10).text(invoice.companyaddress, { width: 500, align: 'right' })
                .moveDown(2);
            doc.fontSize(10).text(invoice.customername, { width: 500, align: 'right' });
            doc.fontSize(10).text(invoice.customeraddress, { width: 500, align: 'right' })
                .moveDown(2);
            doc.fontSize(15).text(`Invoice Number:${invoice.invoicenumber}`, { width: 500, align: 'center' });
            doc.fontSize(10).text(`Product Name:${invoice.productname}`, { width: 500, align: 'center' });
            //  doc.text(invoice.amount,invoice.quantity,{width:500,align:'center'})
            doc.text(`Product per unit cost :${invoice.amount}`, { width: 500, align: 'center' });
            doc.text(`Product Quantity: ${invoice.quantity}`, { width: 500, align: 'center' });
            // doc.text(`Product Quantity:${invoice.totalamount}`,{width:500,align:'center'})
            doc.text(`Total Bill:${invoice.totalamount}`, { width: 500, align: 'center' })
                .moveDown(5);
            doc.fontSize(25).text('Pay with in 15 days', { width: 500, align: 'center' });
            // .text('Scale', 320, 265);
            doc.end();
        }
    });
};
exports.default = getpdf;
