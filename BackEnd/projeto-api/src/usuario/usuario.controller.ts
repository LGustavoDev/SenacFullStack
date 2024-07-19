
import { Body, Controller, Post, Get } from "@nestjs/common";
import { criaUsusrio } from "./dto/usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import {v4 as uuid} from "uuid"
import { UsuarioArmazenado } from "./usuario.dm";


@Controller('/usuario')
export class UsuarioController {
    Usuarios = new UsuarioArmazenado()
;
    @Post()
    async criaUsusrio (@Body() dadosUsuario:criaUsusrio) {
        var novoUsuario = new UsuarioEntity(uuid(), dadosUsuario.nome, dadosUsuario.idade, dadosUsuario.cidade, dadosUsuario.email, dadosUsuario.telefone, dadosUsuario.senha)

        this.Usuarios.AdicionarUsuario(novoUsuario);
       
        var usuario = {
            status:'Usuario criado',
            Usuario: dadosUsuario
        }

        return usuario
    }

    @Get()

    async retornaUsuario() {
        return {Usuarios: this.Usuarios.Usuarios}
    }
}