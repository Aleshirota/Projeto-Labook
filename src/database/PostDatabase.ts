import { TPostDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";




export class PostDatabase extends BaseDatabase{

    public static TABLE_POSTS = "posts"

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

    public async updatePost(postDB: TPostDB) {
        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .update(postDB)
            .where({ id: postDB.id })
    }
    public async deletePostById(id: string) {
        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .delete()
            .where({ id })
    }

}