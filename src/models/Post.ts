export class Post {
	constructor(
		private id: string,
		private creator_id: string,
		private content: string,
		private likes: string,
        private dislikes: string,
        private createdAt: string,
        private updatedAt: string) 
        {

        }

	public getId = (): string => {
		return this.id
	}

	public setId = (newId: string): void => {
		this.id = newId
	}

	public getCreator_id = (): string => {
		return this.creator_id
	}

	public setCreator_id = (newCreator_id: string): void => {
		this.creator_id = newCreator_id
	}

    public getContent = (): string => {
		return this.content
	}

	public setContent = (newContent: string): void => {
		this.content = newContent
	}

    public getLikes = (): string => {
		return this.likes
	}

	public setLikes = (newLikes: string): void => {
		this.likes = newLikes
	}

    public getDislikes = (): string => {
		return this.dislikes
	}

	public setDislikes = (newDislikes: string): void => {
		this.dislikes = newDislikes
	}
	
    public getCreatedAt = (): string => {
		return this.createdAt
	}

	public setCreatedAt = (newCreatedAt: string): void => {
		this.createdAt = newCreatedAt
	}
	
    public getUpdatedAt = (): string => {
		return this.updatedAt
	}

	public setUpdatedAt = (newUpdatedAt: string): void => {
		this.updatedAt = newUpdatedAt
	}
	
}