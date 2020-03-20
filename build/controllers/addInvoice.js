"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const invoiceData_1 = __importDefault(require("../models/invoiceData"));
const JWTSECRET = 'signupProject';
//const doc=new pdfDocument();
//doc.pipe(fs.createWriteStream('../pdf'))
var addInvoice = (req, res) => {
    var token = req.cookies.jwtToken;
    console.log('cheking token', token);
    jsonwebtoken_1.default.verify(token, JWTSECRET, (err, data) => {
        if (err) {
            return res.status(403).send();
        }
        else {
            console.log('Gettinggg', data);
            // req.body.email=data;
            const userEmail = data.email;
            // const firstName=req.body.name;
            // const email=req.body.email;
            // const mobileNumber=req.body.number;
            console.log('Dataaa', req.body);
            const { productname, amount, quantity, totalamount, customername, customeraddress, companyname, companyaddress, imageurl, invoicenumber, date } = req.body;
            console.log(userEmail);
            const invoice = new invoiceData_1.default({ userEmail, productname, amount, quantity, totalamount, customeraddress, customername, companyaddress, companyname, imageurl, invoicenumber, date });
            invoice.save().then((doc) => {
                console.log(doc);
                // res.render(' fetchUser.ejs',{message:'Contact Added'});
                return res.render('newgenerator', { message: 'Created' });
            }, (e) => {
                res.status(400).send(e);
            });
        }
        ;
    });
};
exports.default = addInvoice;
