"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pdfcontroller_1 = __importDefault(require("../controllers/pdfcontroller"));
const express_1 = require("express");
const router = express_1.Router();
router.post('/pdf', pdfcontroller_1.default);
exports.default = router;
