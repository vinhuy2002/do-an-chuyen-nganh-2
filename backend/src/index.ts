import express, {Request, Response} from "express";
const app = express();
require("dotenv").config();

app.get("/", (req: Request, res: Response) => {
    res.json({
        Message: "Hello World",
    });
});

app.get("/:id", (req: Request, res: Response) => {
    const id = req.params.id
    res.json({
        Message: "Hello user " + id,
    });
});

app.get("/user", (req: Request, res: Response) => {
    res.json({
        Message: "This is a user page",
    });
});

app.listen(process.env.HOST_PORT, () => {
    console.log(`Running on http://localhost:${process.env.HOST_PORT}`);
});