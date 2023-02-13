import { PostDatabase } from "../database/PostDatabase"
import { CreatePostInputDTO, PostDTO } from "../dtos/PostDTO"
import { BadRequestError } from "../errors/BadRequestError"
import { NotFoundError } from "../errors/NotFoundError"
import { Post } from "../models/Post"
import { TPostDB } from "../types"



export class PostBusiness {
    constructor (
        private postDTO: PostDTO,
        private postDatabase: PostDatabase
    ){}

    public getPosts = async (input: any) => {
        const { q } = input

        
        const postsDB = await this.postDatabase.findPosts(q)

        const posts: Post[] = postsDB.map((postDB) => new Post(
            postDB.id,
            postDB.creator_id,
            postDB.content,
            postDB.likes,
            postDB.dislikes,
            postDB.created_at,
            postDB.updated_at
        ))
return posts

    }


    public createPost = async (input: CreatePostInputDTO) => {
        const { id, creator_id, content, likes, dislikes  } = input

        if (content.length < 2) {
            throw new BadRequestError("'content' deve possuir pelo menos 2 caracteres")
        }

        const postDBExists = await this.postDatabase.findPostById(id)

        if (postDBExists) {
            throw new BadRequestError("'id' já existe")
        }

        const newPost = new Post(
            id,
            creator_id,
            content,
            likes,
            dislikes,
            new Date().toISOString(),
            new Date().toISOString()
        )

        const newPostDB: TPostDB = {
            id: newPost.getId(),
            creator_id: newPost.getCreator_id(),
            content: newPost.getContent(),
            likes: newPost.getLikes(),
            dislikes: newPost.getDislikes(),
            created_at: newPost.getCreatedAt(),
            updated_at: newPost.getUpdatedAt()
        }

        await this.postDatabase.insertPost(newPostDB)

        const output = this.postDTO.createPostOutput(newPost)

        return output
    }


    public editPost = async (input: any) => {
        const {
            idToEdit,
            newId,
            newCreator_id,
            newContent,
            newLikes,
            newDislikes,
            newCreated_at,
            newUpdated_at
        } = input

        if (newContent.length < 2) {
            throw new BadRequestError("'content' deve possuir pelo menos 2 caracteres")
        }

        if (newLikes <= 0) {
            throw new BadRequestError("'likes' não pode ser zero ou negativo")
        }
        if (newDislikes <= 0) {
            throw new BadRequestError("'dislikes' não pode ser zero ou negativo")
        }

        const postToEditDB = await this.postDatabase.findPostById(idToEdit)

        if (!postToEditDB) {
            throw new NotFoundError("'id' para editar não existe")
        }

        const post = new Post(
            postToEditDB.id,
            postToEditDB.creator_id,
            postToEditDB.content,
            postToEditDB.likes,
            postToEditDB.dislikes,
            postToEditDB.created_at,
            postToEditDB.updated_at
            
            
        )

        newId && post.setId(newId)
        newCreator_id && post.setCreator_id(newCreator_id)
        newContent && post.setContent(newContent)
        newLikes && post.setLikes(newLikes)
        newDislikes && post.setDislikes(newDislikes)
        newCreated_at && post.setCreatedAt(newCreated_at)
        newUpdated_at && post.setUpdatedAt(newUpdated_at)

        const updatePostDB: TPostDB = {
            id: post.getId(),
            creator_id:post.getCreator_id(),
            content: post.getContent(),
            likes: post.getLikes(),
            dislikes: post.getDislikes(),
            created_at: post.getCreatedAt(),
            updated_at: post.getUpdatedAt(),
           
        }

        await this.postDatabase.updatePost(updatePostDB)


        const output = this.postDTO.editPostOutput(post)

        return output
    }
    public deletePost = async (input: any) => {
        const { idToDelete } = input

        const postDatabase = new PostDatabase()
        const postToDeleteDB = await postDatabase.findPostById(idToDelete)

        if (!postToDeleteDB) {
            throw new NotFoundError("'id' para deletar não existe")
        }

        await postDatabase.deletePostById(postToDeleteDB.id)

        const output = {
            message: "Post deletado com sucesso"
        }

        return output
    }

}