import { UserDatabase } from "../database/UserDatabase"
import { LoginInput, LoginOutput, LoginUserInputDTO, SignupOutput, SignupUserInputDTO, UserDTO } from "../dtos/UserDTO"
import { BadRequestError } from "../errors/BadRequestError"
import { NotFoundError } from "../errors/NotFoundError"
import { User } from "../models/User"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager, TokenPayload, USER_ROLES } from "../services/TokenManager"
import { TUserDB } from "../types"

export class UserBusiness {

    constructor(
        private userDTO: UserDTO,
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private tokenManager: TokenManager
    ) { }


    public signupUser = async (input: SignupUserInputDTO) => {
        const { name, email, password } = input


        if (name.length < 2) {
            throw new BadRequestError("'name' deve possuir pelo menos 2 caracteres")
        }

        if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,12}$/g)) {
            throw new BadRequestError("'password' deve possuir entre 8 e 12 caracteres, com letras maiúsculas e minúsculas e no mínimo um número e um caractere especial")
        }


        const id = this.idGenerator.generate()

        const newUser = new User(
            id,
            name,
            email,
            password,
            USER_ROLES.NORMAL,
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

        const TokenPayload: TokenPayload = {
            id: newUser.getId(),
            name: newUser.getName(),
            role: newUser.getRole()

        }

        const token = this.tokenManager.createToken(TokenPayload)

        const output: SignupOutput = {
            message: "Cadastro realizado com sucesso",
            token: token
        }

        return output
    }

    public loginUser = async (input: LoginInput): Promise<LoginOutput> => {
        const { email, password } = input

        if (typeof email !== "string") {
            throw new Error("'email' deve ser string")
        }

        if (typeof password !== "string") {
            throw new Error("'password' deve ser string")
        }

        const userDB = await this.userDatabase.findUserByEmail(email)

        if (!userDB) {
            throw new NotFoundError("'email' não encontrado")
        }

        if (password !== userDB.password) {
            throw new BadRequestError("'email' ou 'password' incorretos")
        }

        const TokenPayload: TokenPayload = {

            id: userDB.id,
            name: userDB.name,
            role: userDB.role

        }

        const token = this.tokenManager.createToken(TokenPayload)

        const output: LoginOutput = {
            message: "Login realizado com sucesso",
            token: token
        }



        return output
    }
}