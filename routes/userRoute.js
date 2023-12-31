import express from "express";
import {registerUserCtrl,loginUserCtrl,getUserProfileCtrl,updateShippingAddresctrl} from '../controllers/usersCtrl.js'
const userRoutes = express.Router();
import {isLoggedIn} from "../middlewares/isLoggedIn.js"


userRoutes.post('/register',registerUserCtrl);
userRoutes.post('/login',loginUserCtrl);
userRoutes.get('/profile',isLoggedIn,getUserProfileCtrl);
userRoutes.put('/update/shipping',isLoggedIn,updateShippingAddresctrl);


export default userRoutes;