//import Person from '../models/registerModel';
import {RequestHandler} from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import Invoice from '../models/invoiceData'


var fetchUser:RequestHandler=(req,res)=>{
    console.log('Email',req.body.email);
    const email=req.body.email;
    Invoice.find({userEmail:email.email}).then((INVOICE:object)=>{
        console.log('123456',INVOICE);
      if(INVOICE){
       // console.log(INVOICE);
          return res.render('records',{invoice:INVOICE});
      }else{
        return res.json({status : false,code : 101,message : 'not found'});
      }
    });

};
export default fetchUser;