import express from "express";
import { checkAccessToken } from "../middlewares/jwt.middleware";
import { addCommentController, getCommentController } from "../controllers/comment.controller";
const route = express.Router();

route.post("/comment-to-item", checkAccessToken, addCommentController);
route.get("/comment/:item_id", getCommentController);
export default route;