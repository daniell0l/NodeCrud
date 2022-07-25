import { AppDataSource } from "../data-source";
import { Video } from "../entities/video";


type VideoUpdateRequest = {
    id: string;
    name: string;
    description: string;
    duration: number;
}

export class UpdateVideosService {
    async execute({id, name, description, duration}: VideoUpdateRequest) {
        const repo = AppDataSource.getRepository(Video);

        const video = await repo.findOneBy({id});

        if(!video){
            return new Error("Video does not exists!") 
        }

        video.name = name ? name : video.name;
        video.description = description ? description: video.description;
        video.duration = duration ? duration: video.duration;
        
        await repo.save(video)

        return video
    }
}