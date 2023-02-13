import { BadRequestError } from "../errors/BadRequestError"
import { Post } from "../models/Post"


export interface CreatePostInputDTO {
    id: string,
    creator_id: string,
    content: string,
    likes: number,
    dislikes: number
    // created_at: string,
    // updated_at: string
}

export interface CreatePostOutputDTO {
    message: string,
    post: {
    //     id: string,
    // creator_id: string,
    content: string,
    // likes: number,
    // dislikes: number,
    // created_at: string,
    // updated_at: string
    }
}
export interface EditPostInputDTO {
    idToEdit: string,
    newId: string | undefined,
    newCreator_id: string | undefined,
    newcontent: string | undefined,
    newlikes: number | undefined,
    newdislikes: number | undefined,
    newcreated_at: string | undefined,
    newupdated_at: string | undefined

}

export interface EditPostOutputDTO {
    message: string,
    post: {
        // id: string,
        // creator_id: string,
        content: string,
        // likes: number,
        // dislikes: number,
        // created_at: string,
        // updated_at: string
    }
}

export class PostDTO {
public createPostInput(
    id: unknown,
    creator_id: unknown,
    content: unknown,
    likes: unknown,
    dislikes: unknown
): CreatePostInputDTO {

    if (typeof id !== "string") {
        throw new BadRequestError("'id' deve ser string")
    }
    if (typeof creator_id !== "string") {
        throw new BadRequestError("'creator_id' deve ser string")
    }

    if (typeof content !== "string") {
        throw new BadRequestError("'content' deve ser string")
    }

        if (typeof likes !== "number") {
            throw new BadRequestError("'likes' deve ser number")
        }

    if (typeof dislikes !== "number") {
        throw new BadRequestError("'dislikes' deve ser number")
    }
    
const dto: CreatePostInputDTO ={

    id,
    creator_id,
    content,
    likes,
    dislikes
}
return dto
}

public createPostOutput(post: Post): CreatePostOutputDTO {
    const dto: CreatePostOutputDTO = {
        message: "Post criado com sucesso",
        post: {
            // id: post.getId(),
            // creator_id: post.getCreator_id(),
            content: post.getContent(),
            // likes:post.getLikes(),
            // dislikes:post.getDislikes(),
            // created_at: post.getCreatedAt(),
            // updated_at:post.getUpdatedAt()
        }
    }
    return dto
}

public editPostInput(
    idToEdit: string,
    newId: unknown,
    newCreator_id: unknown,
    newcontent: unknown,
    newlikes: unknown,
    newdislikes: unknown,
    newcreated_at: unknown,
    newupdated_at: unknown
) {
    if (newId !== undefined) {
        if (typeof newId !== "string") {
            throw new BadRequestError("'id' deve ser string")
        }
    }

    if (newCreator_id !== undefined) {
        if (typeof newCreator_id !== "string") {
            throw new BadRequestError("'Creator_id' deve ser string")
        }
    }

    if (newcontent !== undefined) {
        if (typeof newcontent !== "string") {
            throw new BadRequestError("'newcontent' deve ser string")
        }
    }

    if ( newlikes !== undefined) {
        if (typeof  newlikes !== "number") {
            throw new BadRequestError("'likes' deve ser number")
        }
    }
    if ( newdislikes !== undefined) {
        if (typeof  newdislikes !== "number") {
            throw new BadRequestError("'dislikes' deve ser number")
        }
    }

    if (newcreated_at !== undefined) {
        if (typeof newcreated_at !== "string") {
            throw new BadRequestError("'created_at' deve ser string")
        }
    }
    if (newupdated_at !== undefined) {
        if (typeof newupdated_at !== "string") {
            throw new BadRequestError("'updated_at' deve ser string")
        }
    }

    const dto: EditPostInputDTO = {
    idToEdit,
    newId,
    newCreator_id,
    newcontent,
    newlikes,
    newdislikes,
    newcreated_at,
    newupdated_at
    }

    return dto
}

public editPostOutput (post: Post): EditPostOutputDTO{
    const dto: EditPostOutputDTO = {
        message: "Post editado com sucesso",
        post: {
            // id: post.getId(),
            // creator_id: post.getCreator_id(),
            content: post.getContent(),
            // likes:post.getLikes(),
            // dislikes:post.getDislikes(),
            // created_at: post.getCreatedAt(),
            // updated_at:post.getUpdatedAt()
        }
    }
    return dto
}

}

