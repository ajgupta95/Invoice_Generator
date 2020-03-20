import Person from '../models/userModel';
import {RequestHandler} from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import InvoiceModel from '../models/invoiceData'
const JWTSECRET = 'signupProject';
///import InvoiceModel from '../models/invoiceData'

var deleteInvoice:RequestHandler=(req,res)=>{
   const productid=req.body.productID;
   console.log("getting id " ,productid);
   InvoiceModel.findByIdAndRemove(productid,(err,done)=>{
       if(err){
           console.log('not deleted')
       }else{
           console.log('Deleted product',done);
       }
   });
 // res.({message:'Deletd'});
   res.redirect('/fetchData');
}
         export default deleteInvoice;