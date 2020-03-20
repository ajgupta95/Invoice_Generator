
import {RequestHandler} from 'express';
import fs from 'fs';

import jwt from 'jsonwebtoken';
import InvoiceModel from '../models/invoiceData'
const JWTSECRET = 'signupProject';
import pdfDocument from 'pdfkit';


//const doc=new pdfDocument();
//doc.pipe(fs.createWriteStream('../pdf'))
var addInvoice:RequestHandler=(req,res)=>{
    var token=req.cookies.jwtToken;
    console.log('cheking token',token);
    jwt.verify(token,JWTSECRET,(err:any,data:any)=>{
        if(err){ return res.status(403).send();

     }else{
         console.log('Gettinggg',data);
        // req.body.email=data;
         const userEmail=data.email;
        // const firstName=req.body.name;
        // const email=req.body.email;
        // const mobileNumber=req.body.number;
        console.log('Dataaa',req.body)

        const {productname,amount,quantity,totalamount,customername,customeraddress,companyname,companyaddress,imageurl,invoicenumber,date}=req.body;
        
        console.log(userEmail);
        const invoice= new InvoiceModel({userEmail,productname,amount,quantity,totalamount,customeraddress,customername,companyaddress,companyname,imageurl,invoicenumber,date});
    

         

        invoice.save().then((doc:any)=>{
            console.log(doc);
        // res.render(' fetchUser.ejs',{message:'Contact Added'});
         return res.render('newgenerator',{message:'Created'});
         
        },(e:any)=>{
            res.status(400).send(e);
         } )
        };
        
    });
   
}

export default addInvoice;