import { Request, Response } from "express";
import { ICreateUserRequestDTO } from "../../DTO/ICreateUserRequestDTO";
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const data: ICreateUserRequestDTO = request.body;
        try {
            const newUser = await this.createUserUseCase.execute(
                data
            );
            return response.status(201).json(newUser);
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
} 