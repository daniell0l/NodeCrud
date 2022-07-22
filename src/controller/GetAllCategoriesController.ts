import { Request, Response } from "express";
import { GetAllCategoriesService } from "../services/GetAllCategoriesService";


export class GetAllCategoriesController {
    async create(request: Request, response: Response) {
        const newCategory = new GetAllCategoriesService()

        const categories = await newCategory.execute()

        return response.json(categories)
    }
}