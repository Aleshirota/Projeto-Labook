import { BaseError } from "../errors/BaseError"
import { Request, Response } from "express"
import { UserDTO } from "../dtos/UserDTO"
import { UserBusiness } from "../business/UserBusiness"

export class UserController {

    constructor(
        private userDTO: UserDTO,
        private userBusiness: UserBusiness
    ){}

    public signupUser = async (req: Request, res: Response) => {
        try {
        
            const input = this.userDTO.signupUserInput(
                req.body.id,
                req.body.name,
                req.body.email,
                req.body.password,
                req.body.role
              
            )
           

            const output = await this.userBusiness.signupUser(input)

            res.status(201).send(output)
        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public loginUser = async (req: Request, res: Response) => {
        try {
        
            const input = this.userDTO.loginUserInput(
                req.body.id,
                req.body.name,
                req.body.email,
                req.body.password,
                req.body.role
              
            )
           

            const output = await this.userBusiness.loginUser(input)

            res.status(201).send(output)
        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }
}