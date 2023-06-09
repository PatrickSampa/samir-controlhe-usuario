import { Request, Response } from "express";
import { DeleteInformationsForCalculeUseCase } from "./DeleteInformationsForCalculeUsecase";

export class DeleteInformationsForCalculeController {
    constructor(
        private deleteCalculoLoteUseCase: DeleteInformationsForCalculeUseCase,
    ) { }
    async execute(request: Request, response: Response): Promise<Response> {
        const id = request.params.id;
        try {

            const newCalculosLote = await this.deleteCalculoLoteUseCase.handle(
                id
            );
            return response.status(200).json(newCalculosLote);
        } catch (error) {
            console.log(error.message)
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
}