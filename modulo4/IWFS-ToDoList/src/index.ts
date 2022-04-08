import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection }from "./connection";

export const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
// FUNCTIONS
const getActorById = async (id: string): Promise<any> => {
   const result = await connection.queryBuilder()
      .select("*")
      .from("userToDo")
      .where({id: id})
   return result
}
// ENDPOINTS

// ALL USERS
app.get("/user", async (req: Request, res: Response): Promise<void> =>{
   try {
       const resultado = await connection("userToDo")
       res.status(200).send({users: resultado})
   } catch (error:any) {
       res.status(500).send(error.sqlMessage || error.message)
   }
})

// USER BY ID
app.get("/user/:id", async (req: Request, res: Response): Promise<void> =>{
   try {
       const id = req.params.id
       const user = await getActorById(id)
       res.status(200).send({users: user})
   } catch (error:any) {
       res.status(500).send(error.sqlMessage || error.message)
   }
})

// CREATE USER
app.post("/user", async(req : Request, res : Response): Promise<void> => {
   try{ 
      await insertUser(
           req.body.name,
           req.body.nickname,
           req.body.email
       )
       res.status(201).send("User Created")
   }catch(err:any){
       res.status(500).send(err.sqlMessage || err.message)
   }
})

const validateEmail = (email: any) => {
   var re = /\S+@\S+\.\S+/;
   return re.test(email);
 }
// INSERT USER
const insertUser =  async(
   name: string,
   nickname: string,
   email: string,
): Promise<void> =>{
   await connection("userToDo")
      .insert(
         {
            id: Date.now().toString(),
            name: name,
            nickname: nickname,
            email: email
         }
      )
}