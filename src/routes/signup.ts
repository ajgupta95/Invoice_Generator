import path from 'path';
import {Router} from 'express';
import postuserController from '../controllers/signup'

//import signUpcontroller from 



const router=Router();

router.get('/signUp',(req,res)=>{
    res.render('signUp',{pageTitle:'signUp',message:''})
})


router.post('/signup',postuserController)



export default router;