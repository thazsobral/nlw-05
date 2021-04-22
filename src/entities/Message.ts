import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("messages")
class Message {
    @PrimaryColumn({ name: "id" })
    id: string;

    @Column({ name: "admin_id" })
    admin_id: string;

    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => User)
    user: User;

    @Column({ name: "user_id" })
    user_id: string;

    @Column({ name: "text" })
    text: string;

    @CreateDateColumn({ name: "created_at" })
    created_at: Date;

    constructor() {
        if(!this.id) this.id = uuid();
    }
};

export { Message };
