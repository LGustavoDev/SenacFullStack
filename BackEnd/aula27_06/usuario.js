class Usuario {
     constructor(name, email, senha) {
        this.name = name;
        this.email = email;
        this.senha = senha;
        this.assinatura = 0;
     }

     fazerLogin(email, senha){
        if (senha == this.senha)
            if (email == this.email){
                return 'Login-efetuado'
            }

     }

     validarAssinatura(){

     }

     adicionarAssinatura(){

     }
}

module.export = Usuario