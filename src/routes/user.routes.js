import { Router } from "express";
import { registerUser } from "./../controllers/user.controler.js";
import { upload } from './../middlewares/multer';

const router = Router();

router.route("/register").post(
    upload.fields([
        { name: 'avater', maxCount: 1 },
        {name:"coverImage",maxCount:1}
    ]),  // multer middleware for file uploading
    registerUser);


export default router;
