import { UserController } from "../controller/UserController"
import express from "express"
import { UserBusiness } from "../business/UserBusiness"
import { UserDatabase } from "../database/UserDatabase"
import { UserDTO } from "../dtos/UserDTO"


export const userRouter = express.Router()

const userController = new UserController(
    new UserDTO(),
    new UserBusiness(
    new UserDTO(),
    new UserDatabase()
    )
)

userRouter.post("/signup", userController.signupUser)
userRouter.post("/login", userController.loginUser)


