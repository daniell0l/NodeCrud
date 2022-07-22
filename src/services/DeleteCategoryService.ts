import { AppDataSource } from "../data-source";
import { Category } from "../entities/Category";


export class DeleteCategoryService {
    async execute(id: string) {
        const CreateCategoryService = AppDataSource.getRepository(Category);
 
        if (!(await CreateCategoryService.findOneBy({id}))) {
            return new Error("Category does net exists!");
        }

        await CreateCategoryService.delete(id)
    }
}