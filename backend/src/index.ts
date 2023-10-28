import express, {Request, Response} from "express";
import { createClient } from "redis";
import userRoute from "./api/routes/user.route"
const app = express();
const client = createClient();
require("dotenv").config();
// const functRedis = async () => {
//     client.on('error', err => console.log('Redis Client Error', err));
//     await client.connect();
//     await client.set('a1', 'vinhuy');
//     const value = await client.get('a1');
//     console.log(value);
// }
// functRedis();
// app.get("/", (req: Request, res: Response) => {
//     res.json({
//         Message: "Hello World",
//     });
// });

// app.get("/:id", (req: Request, res: Response) => {
//     const id = req.params.id
//     res.json({
//         Message: "Hello user " + id,
//     });
// });

// app.get("/user", (req: Request, res: Response) => {
//     res.json({
//         Message: "This is a user page",
//     });
// });

// app.get("/user/add", (req: Request, res: Response) => {
//     res.json({
//         Message: "This is add user",
//     });
// });

app.use("/api/v1/user", userRoute);

app.listen(process.env.HOST_PORT, () => {
    console.log(`Running on http://localhost:${process.env.HOST_PORT}`);
});