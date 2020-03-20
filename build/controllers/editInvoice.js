"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const invoiceData_1 = __importDefault(require("../models/invoiceData"));
const JWTSECRET = 'signupProject';
///import InvoiceModel from '../models/invoiceData'
class Edit {
    constructor() {
        this.editInvoice = (req, res) => {
            const productid = req.body.productID;
            console.log("getting id ", productid);
            invoiceData_1.default.findById(productid, (err, invoice) => {
                if (err) {
                    console.log('not edited');
                }
                else {
                    console.log('findby id product', invoice);
                    res.render('invoiceEdit', { invoice: invoice });
                }
            });
        };
        this.posteditInvoice = (req, res) => {
            const productid = req.body.productId;
            console.log('body is   ', req.body);
            console.log("getting now id ", productid);
            invoiceData_1.default.findByIdAndUpdate(productid, req.body, (err, done) => {
                if (err) {
                    console.log('Not updated');
                }
                else {
                    console.log('Updated product', done);
                }
            });
            // res.({message:'Deletd'});
            res.redirect('/fetchData');
        };
    }
}
exports.default = new Edit();
