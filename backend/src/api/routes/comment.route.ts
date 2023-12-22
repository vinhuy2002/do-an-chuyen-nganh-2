import express from "express";
import { checkAccessToken } from "../middlewares/jwt.middleware";
import { addCommentController, getCommentController, deleteCommentController, getCommentByIdController } from "../controllers/comment.controller";
const route = express.Router();

route.post("/add", checkAccessToken, addCommentController);
route.post("/delete", checkAccessToken, deleteCommentController);
route.get("/:item_id", getCommentController);
route.get("/user/:user_id", checkAccessToken, getCommentByIdController);
export default route;