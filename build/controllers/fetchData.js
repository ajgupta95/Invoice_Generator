"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const invoiceData_1 = __importDefault(require("../models/invoiceData"));
var fetchUser = (req, res) => {
    console.log('Email', req.body.email);
    const email = req.body.email;
    invoiceData_1.default.find({ userEmail: email.email }).then((INVOICE) => {
        console.log('123456', INVOICE);
        if (INVOICE) {
            // console.log(INVOICE);
            return res.render('records', { invoice: INVOICE });
        }
        else {
            return res.json({ status: false, code: 101, message: 'not found' });
        }
    });
};
exports.default = fetchUser;
