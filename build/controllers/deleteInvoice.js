"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const invoiceData_1 = __importDefault(require("../models/invoiceData"));
const JWTSECRET = 'signupProject';
///import InvoiceModel from '../models/invoiceData'
var deleteInvoice = (req, res) => {
    const productid = req.body.productID;
    console.log("getting id ", productid);
    invoiceData_1.default.findByIdAndRemove(productid, (err, done) => {
        if (err) {
            console.log('not deleted');
        }
        else {
            console.log('Deleted product', done);
        }
    });
    // res.({message:'Deletd'});
    res.redirect('/fetchData');
};
exports.default = deleteInvoice;
