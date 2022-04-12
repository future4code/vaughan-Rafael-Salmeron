import { app } from "./app";
import { getUsers4 } from "./endpoints/exercicio4";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getAllUsers } from "./endpoints/getAllusers";
import { getUserByName } from "./endpoints/getUserByName";
import { getUserByType } from "./endpoints/getUserByType";
import { getUserOrder } from "./endpoints/getUserOrder";
import { getUsersLimited } from "./endpoints/getUsersLimited";

app.get("/users", getUsers4)
app.get("/recipes", getAllRecipes)
app.get("/user", getUserByName)
app.get("/users/type", getUserByType)
app.get("/users/", getAllUsers)
app.get("/users/order", getUserOrder)
app.get("/users/pag", getUsersLimited)
