import { AppDataSource } from "../data-source";
import { Category } from "../entities/Category"

export const CreateCategoryService = AppDataSource.getRepository(Category);