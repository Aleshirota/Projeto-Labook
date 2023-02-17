import { UserController } from "../controller/UserController"
import express from "express"
import { UserBusiness } from "../business/UserBusiness"
import { UserDatabase } from "../database/UserDatabase"
import { UserDTO } from "../dtos/UserDTO"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"
import { HashManager } from "../services/HashManager"


export const userRouter = express.Router()

const userController = new UserController(
    new UserDTO(),
    new UserBusiness(
    new UserDTO(),
    new UserDatabase(),
    new IdGenerator(),
    new TokenManager(),
    new HashManager()
    )
)

userRouter.post("/signup", userController.signupUser)
userRouter.post("/login", userController.loginUser)


