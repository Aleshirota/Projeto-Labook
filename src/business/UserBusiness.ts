import { UserDatabase } from "../database/UserDatabase"
import { LoginUserInputDTO, SignupUserInputDTO, UserDTO } from "../dtos/UserDTO"
import { BadRequestError } from "../errors/BadRequestError"
import { User } from "../models/User"
import { TUserDB } from "../types"

export class UserBusiness {

    constructor (
        private userDTO: UserDTO,
        private userDatabase: UserDatabase
    ){}


    public signupUser = async (input: SignupUserInputDTO) => {
        const { id, name, email, password, role  } = input

        if (id.length < 4) {
            throw new BadRequestError("'id' deve possuir pelo menos 4 caracteres")
        }

        if (name.length < 2) {
            throw new BadRequestError("'name' deve possuir pelo menos 2 caracteres")
        }

        if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,12}$/g)) {
            throw new BadRequestError("'password' deve possuir entre 8 e 12 caracteres, com letras maiúsculas e minúsculas e no mínimo um número e um caractere especial")
        }

        const userDBExists = await this.userDatabase.findUserById(id)

        if (userDBExists) {
            throw new BadRequestError("'id' já existe")
        }

        const newUser = new User(
            id,
            name,
            email,
            password,
            role,
            new Date().toISOString()
        )

        const newUserDB: TUserDB = {
            id: newUser.getId(),
            name: newUser.getName(),
            email: newUser.getEmail(),
            password: newUser.getPassword(),
            role: newUser.getRole(),
            created_at: newUser.getCreated_at()
           
        }

        await this.userDatabase.insertUser(newUserDB)

    
        const output = this.userDTO.signupUserOutput(newUser)

        return output
    }

    public loginUser = async (input: LoginUserInputDTO) => {
        const { id, name, email, password, role  } = input

        if (id.length < 4) {
            throw new BadRequestError("'id' deve possuir pelo menos 4 caracteres")
        }

        if (name.length < 2) {
            throw new BadRequestError("'name' deve possuir pelo menos 2 caracteres")
        }

        if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,12}$/g)) {
            throw new BadRequestError("'password' deve possuir entre 8 e 12 caracteres, com letras maiúsculas e minúsculas e no mínimo um número e um caractere especial")
        }

        const userDBExists = await this.userDatabase.findUserById(id)

        if (userDBExists) {
            throw new BadRequestError("'id' já existe")
        }

        const newUser = new User(
            id,
            name,
            email,
            password,
            role,
            new Date().toISOString()
        )

        const newUserDB: TUserDB = {
            id: newUser.getId(),
            name: newUser.getName(),
            email: newUser.getEmail(),
            password: newUser.getPassword(),
            role: newUser.getRole(),
            created_at: newUser.getCreated_at()
           
        }

        await this.userDatabase.insertUser(newUserDB)

    
        const output = this.userDTO.loginUserOutput(newUser)

        return output
    }

}

