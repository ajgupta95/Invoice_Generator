"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deleteInvoice_1 = __importDefault(require("../controllers/deleteInvoice"));
const express_1 = require("express");
const JWTSECRET = 'signupProject';
//import router from './logIn';
const router = express_1.Router();
router.post('/delete', deleteInvoice_1.default);
exports.default = router;
