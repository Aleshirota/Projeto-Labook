import { PostModel } from "../types"


export interface GetPostsInputDTO {
    token: string | undefined
}

export type GetPostsOutputDTO = PostModel[]

export interface CreatePostInputDTO {
   
    token: string|undefined,
    name: unknown
  
}

export interface CreatePostOutputDTO {
    message: string,
    post: {
    
    content: string,
   
    }
}


export interface EditPostOutputDTO {
    message: string,
    post: {
        
        content: string,
        
    }
}

export interface EditPostInputDTO {
    idToEdit: string,
    token: string | undefined,
    name: unknown
}


export interface DeletePostInputDTO {
    idToDelete: string,
    token: string | undefined
}

export interface LikeDislikePostInputDTO {
    idToLikeOrDislike: string,
    token: string | undefined,
    like: unknown
}





