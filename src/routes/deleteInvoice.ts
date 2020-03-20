import path from 'path';

import deleteInvoiceController from '../controllers/deleteInvoice'
//import {Router} from 'express';

;
import {RequestHandler,Router} from 'express';
const JWTSECRET = 'signupProject';
//import router from './logIn';


const router =Router();

router.post('/delete',deleteInvoiceController)
export default router;