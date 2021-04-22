import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
    @PrimaryColumn({ name: "id" })
    id: string;

    @Column({ name: "email" })
    email: string;

    @CreateDateColumn({ name: "created_at" })
    created_at: Date;

    constructor() {
        if(!this.id) this.id = uuid();
    }
};

export { User };