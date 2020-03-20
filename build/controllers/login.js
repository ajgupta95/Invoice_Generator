"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../models/userModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loguser = (req, res) => {
    console.log('body', req.body);
    const email = req.body.email;
    const pass = req.body.password;
    userModel_1.default.findOne({ email: email }).then((person) => {
        console.log(person);
        if (person === null) {
            return res.render('login.ejs', { pageTitle: 'logIn', message: 'User Not exists' });
        }
        if (person.passWord !== pass) {
            return res.render('login.ejs', { pageTitle: 'logIn', message: 'Wrong Password' });
        }
        var token = jsonwebtoken_1.default.sign({ email: person.email }, 'signupProject');
        res.cookie('jwtToken', token);
        console.log('jwtToken', token);
        res.redirect('/newgenerator');
    });
};
exports.default = loguser;
