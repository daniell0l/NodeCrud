import { AppDataSource } from "../data-source";
import { Category } from "../entities/Category";


    export class GetAllCategoriesService {
        async execute() {
            const CreateCategoryService = AppDataSource.getRepository(Category);

            const categories = await CreateCategoryService.find()

            return categories;

        }
    }