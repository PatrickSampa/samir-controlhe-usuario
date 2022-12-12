import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

const { v4: uuid } = require("uuid");

@Entity()
export class CalculosLote {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    numeroDoProcesso: string;
    @Column()
    nome: string;
    @Column()
    dataDeAjuizamento: string;
    @Column()
    cpf: string;
    @Column()
    termoInicia: string;
    @Column()
    termoFinal: string;
    @Column({ type: "float" })
    rmi: number;
    @Column()
    beneficio: string;
    @Column()
    numeroDoBeneficio: string;
    @Column()
    dataDePagamento: string;
    @Column()
    citacao: string;
    @Column()
    aps: string;
    @Column()
    recebeuBeneficio: boolean;
    @Column("text", { array: true, nullable: true })
    nomeBeneficioBeneficioAcumulado?: string[];
    @Column("text", { array: true, nullable: true })
    dataDeInicioBeneficioAcumulado?: string[];
    @Column("text", { array: true, nullable: true })
    dataFinalBeneficioAcumulado?: string[];
    @Column("text", { array: true, nullable: true })
    rmilBeneficioAcumulado?: string[];
    @Column()
    inicioJuros: string;
    @Column()
    dib: string;
    @Column()
    salario13Obrigatorio: boolean;
    @Column("text", { array: true })
    data: string[];
    @Column("float", { array: true })
    reajusteAcumulado: number[];
    @Column("float", { array: true })
    devido: number[];
    @Column("float", { array: true })
    reajusteRecebido: number[];
    @Column("float", { array: true })
    recebido: number[];
    @Column("float", { array: true })
    salario: number[];
    @Column("float", { array: true })
    correcao: number[];
    @Column("float", { array: true })
    salarioCorrigido: number[];
    @Column("float", { array: true })
    juros: number[];
    @Column("float", { array: true })
    salarioJuros: number[];
    @Column("float", { array: true })
    salarioTotal: number[];
    @Column({ type: "float" })
    pacelasVencidas: number;
    @Column({ type: "float" })
    total_processos: number;
    @Column({ type: "float" })
    valor_total: number;
    @Column({ type: "float" })
    valor_juros: number;
    @Column({ type: "float" })
    valor_corrigido: number;
    @Column({ type: "float" })
    valorHonorarios: number;
    @Column({ type: "float" })
    iPvalorAnoAnterior: number;
    @Column({ type: "float" })
    iPvalorAnoAtual: number;
    @Column({ type: "float" })
    competenciaAnoAnterior: number;
    @Column({ type: "float" })
    competenciaAnoAtual: number;
    @Column({ type: "float" })
    porcentagemRMI: number;
    @Column()
    honorarioAdvocativosData: string;
    @Column({ type: "float" })
    honorariosAdvocativos: number;
    @Column()
    textoHonorarios: string;
    @Column()
    decricaoJuros: string;
    @Column()
    descricaoCorrecao: string;
    @Column({ type: "float" })
    alcadaValor: number;
    @Column({ type: "float" })
    salariominimosAlcada: number;
    @Column({ type: "float" })
    alcadaJuros: number;
    @Column({ type: "float" })
    alcadaCorrecao: number;
    @Column({ type: "float" })
    alcadaTotal: number;
    @Column()
    textoPeriodoAlcada?: string;
    @Column({ type: "float" })
    alcadaJurosPorcentagem?: number;
    @Column({ type: "float" })
    alcadaCorrecaoPorcetagem?: number;
    @Column({ type: "float" })
    acordo?: number;
    @Column({ type: "int" })
    tipoJuros: number;
    @Column({ type: "int" })
    tipoCorrecao: number;
    @Column()
    possuiDecimoTerceiro?: boolean;
    @Column()
    possuiJuros?: boolean;
    @Column()
    alcada?: boolean;
    @Column()
    salarioMinimo?: boolean;
    @Column()
    limiteMinimoMaximo?: boolean;
    @Column({ type: "int" })
    usuario?: number;
    @Column()
    atualizacao: string;
    @Column()
    dibAnterior?: string;
    @Column()
    url?: string;
    @Column()
    tipo?: string;
    @Column("float", { array: true, nullable: true })
    porcentagemRmiBeneficioAcumulado?: number[];
    @Column("boolean", { array: true, nullable: true })
    salario13ObrigatorioBeneficioAcumulado?: boolean[];
    @Column("boolean", { array: true, nullable: true })
    salario13BeneficioAcumulado?: boolean[];
    @Column("boolean", { array: true, nullable: true })
    salarioMinimoBeneficioAcumulado?: boolean[];
    @Column("boolean", { array: true, nullable: true })
    limiteMinimoMaximoBeneficioAcumulado?: boolean[];

    @Column({ length: 99999, nullable: false, })
    conteudoHTML: string;

    @ManyToOne(() => User, { onDelete: 'CASCADE', eager: true })
    @JoinColumn()
    idUser: User;

    constructor(props: Omit<CalculosLote, "id">, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        } else {
            this.id = id;
        }
    }
}


// /**
//  *@swagger
//   components:
//     schemas:
//       CalculosLote:
//         type: object
//         required:
//           - id
//           - numeroDoProcesso
//           - nome
//           - dataDeAjuizamento
//           - cpf
//           - termoInicia
//           - termoFinal
//           - rmi
//           - beneficio
//           - dataDePagamento
//           - citacao
//           - aps
//           - recebeuBeneficio
//           - inicioJuros
//           - dib
//           - salario13Obrigatorio
//           - data
//           - reajusteAcumulado
//           - devido
//           - reajusteRecebido
//           - recebido
//           - salario
//           - correcao
//           - salarioCorrigido
//           - juros
//           - salarioJuros
//           - salarioTotal
//           - pacelasVencidas
//           - total_processos
//           - valor_total
//           - valor_juros
//           - valorHonorarios
//           - iPvalorAnoAnterior
//           - iPvalorAnoAtual
//           - competenciaAnoAnterior
//           - competenciaAnoAtual
//           - porcentagemRMI
//           - honorarioAdvocativosData
//           - honorariosAdvocativos
//           - textoHonorarios
//           - decricaoJuros
//           - descricaoCorrecao
//           - alcadaValor
//           - salariominimosAlcada
//           - tipoJuros
//           - tipoCorrecao
//           - atualizacao
//           - conteudoHTML
//           - idUser
//         properties:
//           id:
//             type: string
//             description: The auto-generated id
//           name:
//             type: string
//             description: the name of the author of the process
//           cpf:
//             type: string
//             description: the CPF of the author of the process
//           numeroDoProcesso:
//             type: string
//             description: the number of the process
//           dataDeAjuizamento:
//             type: string
//             description: the filing date of the case
//           termoInicia:
//             type: string
//             description: the start date of the calculation
//           termoFinal:
//             type: string
//             description: the end date of the calculation
//           rmi:
//             type: number
//             description: initial monthly income for calculation
//           beneficio:
//             type: string
//             description: the name of the benefit of the author
//           numeroDoBeneficio:
//             type: string
//             description: the author benefit number
//           dataDePagamento:
//             type: string
//             description: The auto-generated id
//           citacao:
//             type: string
//             description: The user name
//           aps:
//             type: string
//             description: The user cpf
//           recebeuBeneficio:
//             type: boolean
//             description: The userName for user authentication
//           nomeBeneficioBeneficioAcumulado:
//             type: array
//             items:
//               type: string
//             example: ["88 - LOAS IDOSO", "7 - APOSENTADORIA POR IDADE  DO TRABALHADOR RURAL", "32 - APOSENTADORIA POR INVALIDEZ"]
//             description: TThe password for user authentication
//           dataDeInicioBeneficioAcumulado:
//             type: array
//             items:
//               type: string
//             example: ["11/10/2015"]
//             description: The auto-generated id
//           dataFinalBeneficioAcumulado:
//             type: array
//             items:
//               type: string
//             example: ["11/10/2019"]
//             description: The user name
//           rmilBeneficioAcumulado:
//             type: array
//             items:
//               type: string
//             example: ["1045"]
//             description: The user cpf
//           inicioJuros:
//             type: string
//             description: The userName for user authentication
//           dib:
//             type: string
//             description: The auto-generated id
//           salario13Obrigatorio:
//             type: boolean
//             description: The user name
//           data:
//             type: array
//             items:
//               type: string
//             example: ["11/10/2014", "01/11/2014", "01/12/2014", "01/01/2015", "01/02/2015", "01/03/2015", "01/04/2015", "01/05/2015", "01/06/2015", "01/07/2015", "01/08/2015", "01/09/2015", "01/10/2015", "01/11/2015", "01/12/2015" ]
//             description: The user name
//           reajusteRecebido:
//             type: string
//             description: The userName for user authentication
//           reajusteAcumulado:
//             type: string
//             description: TThe password for user authentication
//           recebido:
//             type: string
//             description: The auto-generated id
//           salario:
//             type: string
//             description: The user name
//           correcao:
//             type: string
//             description: The user cpf
//           salarioCorrigido:
//             type: string
//             description: The userName for user authentication
//           juros:
//             type: string
//             description: TThe password for user authentication
//           salarioJuros:
//             type: string
//             description: The auto-generated id
//           salarioTotal:
//             type: string
//             description: The user name
//           pacelasVencidas:
//             type: string
//             description: The user cpf
//           valor_juros:
//             type: string
//             description: The userName for user authentication
//           total_processos:
//             type: string
//             description: TThe password for user authentication
//           valor_total:
//             type: string
//             description: The auto-generated id
//           valor_corrigido:
//             type: string
//             description: The user name
//           valorHonorarios:
//             type: string
//             description: The user cpf
//           iPvalorAnoAnterior:
//             type: string
//             description: The userName for user authentication
//           iPvalorAnoAtual:
//             type: string
//             description: TThe password for user authentication
//           competenciaAnoAnterior:
//             type: string
//             description: The auto-generated id
//           competenciaAnoAtual:
//             type: string
//             description: The user name
//           porcentagemRMI:
//             type: string
//             description: The user cpf
//           honorarioAdvocativosData:
//             type: string
//             description: The userName for user authentication
//           honorariosAdvocativos:
//             type: string
//             description: TThe password for user authentication
//           textoHonorarios:
//             type: string
//             description: The auto-generated id
//           decricaoJuros:
//             type: string
//             description: The user name
//           descricaoCorrecao:
//             type: string
//             description: The user cpf
//           alcadaValor:
//             type: string
//             description: The userName for user authentication
//           salariominimosAlcada:
//             type: string
//             description: TThe password for user authentication
//           alcadaJuros:
//             type: string
//             description: The auto-generated id
//           alcadaCorrecao:
//             type: string
//             description: The user name
//           alcadaTotal:
//             type: string
//             description: The user cpf
//           textoPeriodoAlcada:
//             type: string
//             description: The userName for user authentication
//           alcadaJurosPorcentagem:
//             type: string
//             description: TThe password for user authentication
//           alcadaCorrecaoPorcetagem:
//             type: string
//             description: TThe password for user authentication
//           acordo:
//             type: string
//             description: The auto-generated id
//           tipoJuros:
//             type: string
//             description: The user name
//           tipoCorrecao:
//             type: string
//             description: The user cpf
//           possuiDecimoTerceiro:
//             type: string
//             description: The userName for user authentication
//           possuiJuros:
//             type: string
//             description: TThe password for user authentication
//           alcada:
//             type: string
//             description: The auto-generated id
//           salarioMinimo:
//             type: string
//             description: The user name
//           limiteMinimoMaximo:
//             type: string
//             description: The user cpf
//           atualizacao:
//             type: string
//             description: TThe password for user authentication
//           dibAnterior:
//             type: string
//             description: The auto-generated id
//           url:
//             type: string
//             description: The user name
//           tipo:
//             type: string
//             description: The user cpf
//           porcentagemRmiBeneficioAcumulado:
//             type: string
//             description: The userName for user authentication
//           salario13ObrigatorioBeneficioAcumulado:
//             type: string
//             description: TThe password for user authentication
//           salario13BeneficioAcumulado:
//             type: string
//             description: The auto-generated id
//           salarioMinimoBeneficioAcumulado:
//             type: string
//             description: The user name
//           limiteMinimoMaximoBeneficioAcumulado:
//             type: string
//             description: The user cpf
//           conteudoHTML:
//             type: string
//             description: The userName for user authentication
//           idUser:
//             type: string
//             description: TThe password for user authentication
//         example:
//           id:
//           name:
//           cpf:
//           numeroDoProcesso:
//           dataDeAjuizamento:
//           termoInicia:
//           termoFinal:
//           rmi:
//           beneficio:
//           numeroDoBeneficio:
//           dataDePagamento:
//           citacao:
//           aps:
//           recebeuBeneficio:
//           nomeBeneficioBeneficioAcumulado:
//           dataDeInicioBeneficioAcumulado:
//           dataFinalBeneficioAcumulado:
//           rmilBeneficioAcumulado:
//           inicioJuros:
//           password:
//           dib:
//           salario13Obrigatorio:
//           data:
//           reajusteRecebido:
//           reajusteAcumulado:
//           recebido:
//           salario:
//           correcao:
//           salarioCorrigido:
//           juros:
//           salarioJuros:
//           salarioTotal:
//           pacelasVencidas:
//           valor_juros:
//           total_processos:
//           valor_total:
//           valor_corrigido:
//           valorHonorarios:
//           iPvalorAnoAnterior:
//           iPvalorAnoAtual:
//           competenciaAnoAnterior:
//           competenciaAnoAtual:
//           porcentagemRMI:
//           honorarioAdvocativosData:
//           honorariosAdvocativos:
//           textoHonorarios:
//           decricaoJuros:
//           descricaoCorrecao:
//           alcadaValor:
//           salariominimosAlcada:
//           alcadaJuros:
//           alcadaCorrecao:
//           alcadaTotal:
//           textoPeriodoAlcada:
//           alcadaJurosPorcentagem:
//           alcadaCorrecaoPorcetagem:
//           acordo:
//           tipoJuros:
//           tipoCorrecao:
//           possuiDecimoTerceiro:
//           possuiJuros:
//           alcada:
//           salarioMinimo:
//           limiteMinimoMaximo:
//           atualizacao:
//           dibAnterior:
//           url:
//           tipo:
//           porcentagemRmiBeneficioAcumulado:
//           salario13ObrigatorioBeneficioAcumulado:
//           salario13BeneficioAcumulado:
//           salarioMinimoBeneficioAcumulado:
//           limiteMinimoMaximoBeneficioAcumulado:
//           conteudoHTML:
//           idUser:
//  */