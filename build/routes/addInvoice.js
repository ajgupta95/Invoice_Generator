"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWTSECRET = 'signupProject';
const addInvoice_1 = __importDefault(require("../controllers/addInvoice"));
const express_1 = require("express");
//const JWTSECRET = 'signupProject';
//import router from './logIn';
var verifyToken = (req, res, next) => {
    var token = req.cookies.jwtToken;
    if (token) {
        jsonwebtoken_1.default.verify(token, JWTSECRET, (err, data) => {
            if (err) {
                return res.status(403).send();
            }
            else {
                console.log('Getting', data);
                req.body.email = data;
                next();
            }
        });
    }
    else {
        res.render('login', { message: 'Not authorised', pageTitle: 'logIn' });
    }
};
const router = express_1.Router();
router.get('/newgenerator', verifyToken, (req, res) => {
    res.render('newgenerator');
});
router.post('/addinvoice', addInvoice_1.default);
exports.default = router;
