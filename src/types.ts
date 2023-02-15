export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export type TPostDB = {
    id: string,
    creator_id: string,
    content: string,
    likes: number,
    dislikes: number,
    created_at: string,
    updated_at: string
}

export type TUserDB = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES,
    created_at: string
   
}
