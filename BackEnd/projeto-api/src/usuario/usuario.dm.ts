
import { Injectable } from "@nestjs/common/decorators";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()

export class UsuarioArmazenado{
    #usuarios: UsuarioEntity[] = [];

    AdicionarUsuario(usuario:UsuarioEntity) {
        this.#usuarios.push(usuario);
    }

    validaEmail(email:string) {
        const possivelUsuario = this.#usuarios.find(
            usuario => usuario.email === email
        );
        return (possivelUsuario !== undefined)
    }

    get Usuarios(){
        return this.#usuarios
    }
}