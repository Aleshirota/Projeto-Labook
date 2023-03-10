import { USER_ROLES } from "../services/TokenManager"

export class User {
	constructor(
		private id: string,
		private name: string,
		private email: string,
		private password: string,
		private role: USER_ROLES,
        private created_at: string
		) {}


	public getId = (): string => {
		return this.id
	}

	public setId = (newId: string): void => {
		this.id = newId
	}

	public getName = (): string => {
		return this.name
	}

	public setName = (newName: string): void => {
		this.name = newName
	}

    public getEmail = (): string => {
		return this.email
	}

	public setEmail = (newEmail: string): void => {
		this.email = newEmail
	}
	public getPassword = (): string => {
		return this.password
	}

	public setPassword = (newPassword: string): void => {
		this.password = newPassword
	}

    public getRole = (): USER_ROLES => {
		return this.role
	}

	public setRole = (newRole: USER_ROLES): void => {
		this.role = newRole
	}

    public getCreated_at = (): string => {
		return this.created_at
	}

	public setCreated_at = (newCreatedAT: string): void => {
		this.created_at = newCreatedAT
	}
	
}