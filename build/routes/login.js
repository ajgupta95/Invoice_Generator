"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = __importDefault(require("../controllers/login"));
const router = express_1.Router();
router.get('/', (req, res) => {
    res.render('login.ejs', { pageTitle: 'LogIn', message: '' });
});
router.post('/login', login_1.default);
exports.default = router;
