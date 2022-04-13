import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

export async function getAllUsers(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const users = await connection("aula49_users")   

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No user found")
        }

        const user = users.map(toUser)

        res.status(200).send(users)

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