import { PrismaClient } from "@prisma/client";
import { Category } from "../interfaces/category.interface";
const prisma = new PrismaClient();

export const getCategoryService = async () => {
    try {
        const category = await prisma.category.findMany();
        return category;
    } catch (error) {
        
    }
}

export const addCategoryService = async(category: Category) => {
    try {
        const addCat = await prisma.category.create({
            data: {
                category_name: category.category_name,
                description: category.description
            }
        });
        return addCat;
    } catch (error) {
        
    }
}