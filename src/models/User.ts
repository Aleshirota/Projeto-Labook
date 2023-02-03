export class User {
	constructor(
		private id: string,
		private name: string,
		private email: string,
		private role: string,
        private createdAT: string) 
        {

        }

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

    public getRole = (): string => {
		return this.role
	}

	public setRole = (newRole: string): void => {
		this.role = newRole
	}

    public getCreatedAT = (): string => {
		return this.createdAT
	}

	public setCreatedAT = (newCreatedAT: string): void => {
		this.createdAT = newCreatedAT
	}
	
}