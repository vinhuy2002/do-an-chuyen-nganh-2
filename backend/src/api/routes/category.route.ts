import express from "express";
import { addCategoryController, getCategoryController } from "../controllers/category.controller";
const route = express.Router();

route.get("/", getCategoryController);
route.post("/add-category", addCategoryController);

export default route;