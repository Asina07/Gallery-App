import express from 'express';
let router = express.Router();
import { getAllUserData,signup,login } from '../controllers/User_Controllers'


router.get("/",getAllUserData)
router.post("/signup",signup)
router.post("/login",login)


export default router;