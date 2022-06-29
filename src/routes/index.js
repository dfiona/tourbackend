import { Router } from "express";
import Usercontroller from "../controllers/usercontroller";

const route =Router();
route.post("/user/test",Usercontroller.testcontroller);


 export default route;