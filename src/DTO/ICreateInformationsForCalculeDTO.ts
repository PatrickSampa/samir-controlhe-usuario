import { BeneficiosAcumuladoForCalcule } from "../entities/BeneficiosAcumuladoForCalcule";

export interface ICreateInformationsForCalculeDTO {
    numeroDoProcesso: string,
    nome: string,
    dataAjuizamento: string,
    cpf: string,
    dibInicial: string,
    dibFinal?: string,
    rmi: string,
    beneficio: string,
    nb: string,
    dip: string,
    aps?: string,
    citacao?: string,
    beneficiosAcumulados?: BeneficiosAcumuladoForCalcule[],
    urlProcesso: string,
    dibAnterior: string,
    beneficioAcumuladoBoolean: boolean,
    tipo: string
}