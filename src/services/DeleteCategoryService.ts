import { AppDataSource } from "../data-source";
import { Category } from "../entities/Category";

export class DeleteCategoryService {
    async execute(id: string) {
        const repo = AppDataSource.getRepository(Category);

        if(!(await repo.findOneBy({id}))) {
            return new Error("Category does not exists")

        }

        await repo.delete(id)
    }
}