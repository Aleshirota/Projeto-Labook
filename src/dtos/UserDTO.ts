import { BadRequestError } from "../errors/BadRequestError"
import { User } from "../models/User"


export interface SignupUserInputDTO {
    id: string,
    name: string,
    email: string,
    password: string,
    role: string

}

export interface SignupUserOutputDTO {
    message: string,
    user: {
        // id: string,
        name: string,
        email: string,
        password: string,
        // role: string,
        // created_at: string
    }
}

export interface LoginUserInputDTO {
    id: string,
    name: string,
    email: string,
    password: string,
    role: string

}

export interface LoginUserOutputDTO {
    message: string,
    user: {
        // id: string,
        // name: string,
        email: string,
        password: string,
        // role: string,
        // created_at: string
    }
}

export class UserDTO {
public signupUserInput(
    id: unknown,
    name: unknown,
    email: unknown,
    password: unknown,
    role: unknown
    
): SignupUserInputDTO {

    if (typeof id !== "string") {
        throw new BadRequestError("'id' deve ser string")
    }
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

    id,
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
            //  id: user.getId(),
             name: user.getName(),
             email: user.getEmail(),
             password: user.getPassword()
            //  role:user.getRole(),
            //  created_at: user.getCreated_at(),
           
        }
    }
    return dto
}

public loginUserInput(
    id: unknown,
    name: unknown,
    email: unknown,
    password: unknown,
    role: unknown
    
): LoginUserInputDTO {

    if (typeof id !== "string") {
        throw new BadRequestError("'id' deve ser string")
    }
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
        

const dto: LoginUserInputDTO ={

    id,
    name,
    email,
    password,
    role
    
  
}

return dto
}

public loginUserOutput(user: User): LoginUserOutputDTO {
    const dto: LoginUserOutputDTO = {
        message: "Login realizado com sucesso",
        user: {
            //  id: user.getId(),
            //  name: user.getName(),
             email: user.getEmail(),
             password: user.getPassword()
            //  role:user.getRole(),
            //  created_at: user.getCreated_at(),
           
        }
    }
    return dto
}


}

