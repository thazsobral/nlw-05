import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("settings")
class Setting {

    @PrimaryColumn({ name: "id" })
    id: string;

    @Column({ name: "username" })
    username: string;

    @Column({ name: "chat" })
    chat: boolean;

    @CreateDateColumn({ name: "updated_at" })
    updated_at: Date;

    @CreateDateColumn({ name: "created_at" })
    created_at: Date;

    constructor() {
        if(!this.id) this.id = uuid();
    }
};

export { Setting };
