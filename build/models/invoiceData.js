"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const invoice = new mongoose_1.Schema({
    userEmail: { type: String, required: true },
    companyname: { type: String, required: true },
    companyaddress: { type: String, required: true },
    invoicenumber: { type: Number, required: true, unique: true },
    date: { type: String, required: true },
    customername: { type: String, required: true },
    customeraddress: { type: String, required: true },
    productname: { type: String, required: true },
    amount: { type: Number, required: true },
    quantity: { type: Number, required: true },
    totalamount: { type: Number, required: true },
    imageurl: { type: String, required: true }
    // productname:{type:String,required:true}
});
const Invoice = mongoose_1.default.model('Invoice', invoice);
exports.default = Invoice;
