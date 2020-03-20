"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const editInvoice_1 = __importDefault(require("../controllers/editInvoice"));
const express_1 = require("express");
const JWTSECRET = 'signupProject';
//import router from './logIn';
const router = express_1.Router();
router.post('/update', editInvoice_1.default.editInvoice);
router.post('/postupdate', editInvoice_1.default.posteditInvoice);
exports.default = router;
