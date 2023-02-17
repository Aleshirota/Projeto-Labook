import { PostModel, TPostDB } from "../types"

export class Post {
	constructor(
		private id: string,
		private content: string,
		private likes: number,
        private dislikes: number,
        private created_at: string,
        private updated_at: string,
		private creator_id: string,
		private creatorName: string,
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

	public addLike() {
        this.likes += 1
    }

    public removeLike() {
        this.likes -= 1
    }

    public addDislike() {
        this.dislikes += 1
    }

    public removeDislike() {
        this.dislikes -= 1
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

	public getCreatorName(): string {
        return this.creatorName
    }

    public setCreatorName(value: string): void {
        this.creatorName = value
    }
	
	public toDBModel(): TPostDB {
        return {
            id: this.id,
            creator_id: this.creator_id,
            content: this.content,
            likes: this.likes,
            dislikes: this.dislikes,
            created_at: this.created_at,
            updated_at: this.updated_at
        }
    }

    public toBusinessModel(): PostModel {
        return {
            id: this.id,
            content: this.content,
            likes: this.likes,
            dislikes: this.dislikes,
            created_at: this.created_at,
            updated_at: this.updated_at,
            creator: {
                id: this.creator_id,
                name: this.creatorName
            }
        }
    }

}

