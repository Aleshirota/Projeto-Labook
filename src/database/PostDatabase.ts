import { PostWithCreatorDB, TPostDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";


export class PostDatabase extends BaseDatabase{

    public static TABLE_POSTS = "posts"

    public getPostsWithCreators = async (): Promise<PostWithCreatorDB[]> => {
        const result: PostWithCreatorDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .select(
                "posts.id",
                "posts.creator_id",
                "posts.content",
                "posts.likes",
                "posts.dislikes",
                "posts.created_at",
                "posts.updated_at",
                "users.name AS creator_name"
            )
            .join("users", "posts.creator_id", "=", "users.id")
        
        return result
    }

    public async findPosts(q: string | undefined) {
        if (q) {
            const result: TPostDB[] = await BaseDatabase
                .connection(PostDatabase.TABLE_POSTS)
                .where("content", "LIKE", `%${q}%`)

            return result

        } else {
            const result: TPostDB[] = await BaseDatabase
                .connection(PostDatabase.TABLE_POSTS)

            return result
        }
    }

    public async findPostById(id: string) {
        const [ postDB ]: TPostDB[] | undefined[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .where({ id })

        return postDB
    }

    public async insertPost(newPostDB: TPostDB) {
        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .insert(newPostDB)
    }

    // public async updatePost(postDB: TPostDB) {
    //     await BaseDatabase
    //         .connection(PostDatabase.TABLE_POSTS)
    //         .update(postDB)
    //         .where({ id: postDB.id })
    // }
    public updatePost = async (
        id: string,
        postDB: TPostDB
    ): Promise<void> => {
        await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
            .update(postDB)
            .where({ id })
    }


    public async deletePostById(id: string) {
        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .delete()
            .where({ id })
    }

}