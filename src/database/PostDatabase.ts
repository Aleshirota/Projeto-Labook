import { TPostDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";




export class PostDatabase extends BaseDatabase{

    public static TABLE_POSTS = "posts"
 
    public async findPosts(q: string|undefined){
    let postsDB

    if (q) {
        const result: TPostDB[] = await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .where("content", "LIKE", `%${q}%`)
        postsDB = result
    } else {
        const result: TPostDB[] = await BaseDatabase.connection("posts")
        postsDB = result 
    }
    return postsDB
}


}