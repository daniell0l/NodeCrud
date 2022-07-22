import { Request, Response } from "express";
import { DeleteCategoryService } from "../services/DeleteCategoryService";


export class DeleteCategoryController {
    async create(request: Request, response: Response) {
        const { id } = request.params;

        const newCategory = new DeleteCategoryService()

        const CreateCategoryService = await newCategory.execute(id)



        if (CreateCategoryService instanceof Error) {
            return response.status(400).json(CreateCategoryService.message)
        }

        return response.status(204).end();
    }
}