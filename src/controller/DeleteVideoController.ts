import { Request, Response } from "express";
import { DeleteVideoService } from "../services/DeleteVideoService";


export class DeleteVIdeoController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteVideoService();

        const result = await service.execute(id);

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}