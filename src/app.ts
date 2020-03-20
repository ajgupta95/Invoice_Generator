import path from 'path';

import express,{Request,Response,NextFunction} from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import  mongoose from 'mongoose';

 import logInRoutes  from './routes/login'
 import signUpRoutes  from './routes/signup'
 import fetchUserData from './routes/fetchData'
 import addinvoice from './routes/addInvoice'
 import logout from './routes/logout'
 import deleteinvoice from './routes/deleteInvoice'
 import editroutes from './routes/editInvoice'
//  import pdfroutes from './routes/pdf'
var pdfroutes = require('./routes/pdf');

const app=express();

app.set('view engine','ejs');
app.set('views', './views');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'../public')));


 app.use(logInRoutes);
 app.use(signUpRoutes);
app.use(fetchUserData);
 app.use(addinvoice);
 app.use(logout);
 app.use(deleteinvoice);
 app.use(editroutes);
 app.use(pdfroutes);





//mongoose.Promise=global.Promise;
mongoose.set('useUnifiedTopology',true)
mongoose.connect('mongodb://localhost:27017/InvoiceGenerator',{
    useNewUrlParser:true
}).then((res)=>{
    console.log('Connected to Db')

},(err)=>{
    console.log('Not connected to Db')
});

app.use((req,res)=>{
    res.status(404).render('404.ejs',{pageTitle:'Page Not Found'});
    });

app.listen(3000,()=>{
    console.log('Server is listening')
});