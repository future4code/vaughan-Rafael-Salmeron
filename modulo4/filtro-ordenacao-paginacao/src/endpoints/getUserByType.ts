import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

export async function getUserByType(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { type } = req.query
        const users = await connection("aula49_users")
            .select("*")
            .where("type", "like", `%${type}%`)
        
        if (!users.length) {
            res.statusCode = 404
            throw new Error("No user found")
        }
        
        const user = users.map(toUser)
        
        res.status(200).send(user)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

const toUser = (input: any): user => {
    return {
       id: input.id,
       name: input.name,
       email: input.email,
       password: input.password,
       recipes: input.recipe,
    }
 }