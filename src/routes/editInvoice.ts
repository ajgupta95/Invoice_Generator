import path from 'path';

import  Edit from '../controllers/editInvoice'
//import {Router} from 'express';

;
import {RequestHandler,Router} from 'express';
const JWTSECRET = 'signupProject';
//import router from './logIn';


const router =Router();
router.post('/update',Edit.editInvoice)
router.post('/postupdate',Edit.posteditInvoice)
export default router;