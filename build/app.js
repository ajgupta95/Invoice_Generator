"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const login_1 = __importDefault(require("./routes/login"));
const signup_1 = __importDefault(require("./routes/signup"));
const fetchData_1 = __importDefault(require("./routes/fetchData"));
const addInvoice_1 = __importDefault(require("./routes/addInvoice"));
const logout_1 = __importDefault(require("./routes/logout"));
const deleteInvoice_1 = __importDefault(require("./routes/deleteInvoice"));
const editInvoice_1 = __importDefault(require("./routes/editInvoice"));
const pdf_1 = __importDefault(require("./routes/pdf"));
const app = express_1.default();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(cookie_parser_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use(login_1.default);
app.use(signup_1.default);
app.use(fetchData_1.default);
app.use(addInvoice_1.default);
app.use(logout_1.default);
app.use(deleteInvoice_1.default);
app.use(editInvoice_1.default);
app.use(pdf_1.default);
//mongoose.Promise=global.Promise;
mongoose_1.default.set('useUnifiedTopology', true);
mongoose_1.default.connect('mongodb://localhost:27017/InvoiceGenerator', {
    useNewUrlParser: true
}).then((res) => {
    console.log('Connected to Db');
}, (err) => {
    console.log('Not connected to Db');
});
app.use((req, res) => {
    res.status(404).render('404.ejs', { pageTitle: 'Page Not Found' });
});
app.listen(3000, () => {
    console.log('Server is listening');
});
