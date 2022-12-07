import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CalculosLote } from "./CalculosLote";
const { v4: uuid } = require("uuid");

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    cpf: string;

    @Column()
    password: string;


    @OneToMany(() => CalculosLote, calculosLote => calculosLote.idUser)
    calculosLotes?: CalculosLote[];

    constructor(props: Omit<User, "id">, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        } else {
            this.id = id;
        }
    }
}