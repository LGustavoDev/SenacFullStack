
import {IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class criaUsusrio{
    @IsString()
    @IsNotEmpty({message: "nome não pode ser vazio"})
    nome: string

    @IsEmail(undefined, {message: "email inválido"})
    email: string

    @MinLength(6, {message: "senha deve ter no minimo 6 digito"})
    senha:string

    @IsNumber()
    idade: number;

    @IsString()
    cidade: string;


    @IsString()
    telefone: string;
    
}