import path from 'path';

import jwt from 'jsonwebtoken';
const JWTSECRET = 'signupProject';
import addInvoiceController from '../controllers/addInvoice'
//import {Router} from 'express';

;
import {RequestHandler,Router} from 'express';
//const JWTSECRET = 'signupProject';
//import router from './logIn';


var verifyToken:RequestHandler=(req,res,next)=>{
    var token=req.cookies.jwtToken;
    if(token){
        jwt.verify(token,JWTSECRET,(err:any,data:any)=>{
           if(err){ return res.status(403).send();

        }else{
            console.log('Getting',data);
            req.body.email=data;
            next(); 
        }
        }); 
    }else{
        res.render('login',{message:'Not authorised',pageTitle:'logIn'});
    }
};

const router =Router();
router.get('/newgenerator',verifyToken,(req,res)=>{
    res.render('newgenerator')
});
router.post('/addinvoice',addInvoiceController)
export default router;