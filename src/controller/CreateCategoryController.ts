import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService"
export class CreateCategoryController {
    async create(request: Request, response: Response) {
        const { name,  description } = request.body;

        if(!name) {
            return response.status(400).json({ message: "O nome é obrigatório" });
        }

        try{
            const newCategory = CreateCategoryService.create({name, description})

            await CreateCategoryService.save(newCategory)

            return response.status(201).json(newCategory)
        } catch (error) {
            console.log(error)
            return response.status(500).json({ message: "Internal Server Error" })
        }
    }
}