import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

export async function getUsersLimited(
    req: Request,
    res: Response
): Promise<void> {
    try {
        let pag = Number(req.query.pag)
        let q = 5
        let offset = q * (pag -1) 
        const users = await connection("aula49_users")
            .select("*")
            .limit(q)
            .offset(offset)
        if (!users.length) {
            res.statusCode = 404
            throw new Error("No user found")
        }
        if(pag <= 0 ){
            throw new Error("Pag deve ser acima de 1")
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