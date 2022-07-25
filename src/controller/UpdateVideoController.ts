import { Request, Response } from "express";
import { UpdateVideosService } from "../services/UpdateVideoService";


export class UpdateVideoController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, description, duration } = request.body;

        const service = new UpdateVideosService()

        const result = service.execute({id, name, description, duration,});

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json();
    }
}