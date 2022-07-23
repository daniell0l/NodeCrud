import { AppDataSource } from "../data-source";
import { Video } from "../entities/video";


export class DeleteVideoService {
    async execute(id: string) {
        const repo = AppDataSource.getRepository(Video);

        if(!(await repo.findOneBy({id}))) {
            return new Error("VIdeo does not exists")
        }

        await repo.delete(id)
    }
}