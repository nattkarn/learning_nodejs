import express from 'express'
import userController from "./controllers/user.controller.js";



const userRouter = express.Router();


userRouter.get("/", userController.getUser)
userRouter.post("/add", userController.addUser)



export default userRouter;