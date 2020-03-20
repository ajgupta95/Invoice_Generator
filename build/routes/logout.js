"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.post('/logout', (req, res) => {
    res.clearCookie('jwtToken');
    res.header('cache-control', 'private,no-cache, no-store, must-revalidate');
    res.header('Expires', '0');
    res.header('Pragma', 'no-cache');
    res.redirect('/');
});
exports.default = router;
