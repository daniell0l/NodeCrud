import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn,  } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("categories")
export default class Category {
    
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name:string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}