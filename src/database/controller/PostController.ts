import { Post } from "../../models/Post"
import { PostDatabase } from "../PostDatabase"
import { Request, Response } from "express"


export class PostController {

public getPosts = async (req: Request, res: Response) => {

    try {
        const q = req.query.q as string|undefined

        const postsDatabase = new PostDatabase()
        const postsDB = await postsDatabase.findPosts(q)
                    
        const posts: Post[] = postsDB.map((postDB)=> new Post(
            postDB.id,
            postDB.creator_id,
            postDB.content,
            postDB.likes,
            postDB.dislikes,
            postDB.createdAt,
            postDB.updatedAt,
        ))

        res.status(200).send(posts) 

    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }

}

}