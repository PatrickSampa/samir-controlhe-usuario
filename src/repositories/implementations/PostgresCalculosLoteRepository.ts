import { DeleteResult, getRepository } from "typeorm";
import { CalculosLote } from "../../entities/CalculosLote";
import { User } from "../../entities/User";
import { ICalculosLoteRepository } from "../ICalculosLoteRepository";

export class PostgresCategoryRepository implements ICalculosLoteRepository {
    async save(calculosLote: CalculosLote) {
        return this.repository().save(calculosLote);
    }
    async findById(id: string): Promise<CalculosLote> {
        const calculosLote = await this.repository().findOne({ id });
        return calculosLote;
    }
    async findByIdUser(idUser: User): Promise<CalculosLote[]> {
        const calculosLote = await this.repository().find({ idUser })
        return calculosLote;
    }
    async delete(id: string): Promise<DeleteResult> {
        return await this.repository().delete(id);
    }
    repository() {
        return getRepository(CalculosLote);
    }
}