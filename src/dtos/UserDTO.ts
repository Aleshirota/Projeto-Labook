import { BadRequestError } from "../errors/BadRequestError"
import { User } from "../models/User"
import { IdGenerator } from "../services/IdGenerator"


export interface SignupUserInputDTO {
    name: string,
    email: string,
    password: string,
    role: string

}

export interface SignupUserOutputDTO {
    message: string,
    user: {
        name: string,
        email: string,
        password: string,
    }
}

export interface SignupOutput{
    message: string,
    token: string
}

export interface LoginUserInputDTO {
    email: string,
    password: string
    
}

export interface LoginUserOutputDTO {
    message: string,
    user: {
       
        email: string,
        password: string,
       
    }
}

export interface LoginInput {
    email: unknown,
    password: unknown
}

export interface LoginOutput {
    message: string,
    token: string
}



export class UserDTO {


public signupUserInput(
    name: unknown,
    email: unknown,
    password: unknown,
    role: unknown
    
): SignupUserInputDTO {

    if (typeof name !== "string") {
        throw new BadRequestError("'name' deve ser string")
    }
    if (typeof email !== "string") {
        throw new BadRequestError("'email' deve ser string")
    }

    if (typeof password !== "string") {
        throw new BadRequestError("'password' deve ser string")
    }

        if (typeof role !== "string") {
            throw new BadRequestError("'role' deve ser string")
        }
        

const dto: SignupUserInputDTO ={

    name,
    email,
    password,
    role
    
}

return dto
}

public signupUserOutput(user: User): SignupUserOutputDTO {
    const dto: SignupUserOutputDTO = {
        message: "Cadastro realizado com sucesso",
        user: {
             name: user.getName(),
             email: user.getEmail(),
             password: user.getPassword()

        }
    }
    return dto
}


public loginUserOutput(user: User): LoginUserOutputDTO {
    const dto: LoginUserOutputDTO = {
        message: "Login realizado com sucesso",
        user: {
           
             email: user.getEmail(),
             password: user.getPassword()
          
        }
    }
    return dto
}


}

