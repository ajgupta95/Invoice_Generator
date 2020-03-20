import path from 'path';

import pdfController from '../controllers/pdfcontroller'


;
import {RequestHandler,Router} from 'express';


const router =Router();

router.post('/pdf',pdfController)
export default router;