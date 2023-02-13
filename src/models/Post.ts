export class Post {
	constructor(
		private id: string,
		private creator_id: string,
		private content: string,
		private likes: number,
        private dislikes: number,
        private created_at: string,
        private updated_at: string
		) {}

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

    public getLikes = (): number => {
		return this.likes
	}

	public setLikes = (newLikes: number): void => {
		this.likes = newLikes
	}

    public getDislikes = (): number => {
		return this.dislikes
	}

	public setDislikes = (newDislikes: number): void => {
		this.dislikes = newDislikes
	}
	
    public getCreatedAt = (): string => {
		return this.created_at
	}

	public setCreatedAt = (newCreatedAt: string): void => {
		this.created_at = newCreatedAt
	}
	
    public getUpdatedAt = (): string => {
		return this.updated_at
	}

	public setUpdatedAt = (newUpdatedAt: string): void => {
		this.updated_at = newUpdatedAt
	}
	
}