import Person from '../models/userModel';
import {RequestHandler} from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import InvoiceModel from '../models/invoiceData'
const JWTSECRET = 'signupProject';
///import InvoiceModel from '../models/invoiceData'
class Edit{
 editInvoice:RequestHandler=(req,res)=>{
   const productid=req.body.productID;
   console.log("getting id " ,productid);
   InvoiceModel.findById(productid,(err:any,invoice:any)=>{
       if(err){
           console.log('not edited')
       }else{
           console.log('findby id product',invoice);
           res.render('invoiceEdit',{invoice:invoice});
       }
   });
 
   
}

 posteditInvoice:RequestHandler=(req,res)=>{
    const productid=req.body.productId;
    console.log('body is   ',req.body)
    console.log("getting now id " ,productid);
    InvoiceModel.findByIdAndUpdate(productid,req.body,(err:any,done:any)=>{
        if(err){
            console.log('Not updated')
        }else{
            console.log('Updated product',done);
        }
    });
  // res.({message:'Deletd'});
    res.redirect('/fetchData');
 }
}
         export default new Edit();
         