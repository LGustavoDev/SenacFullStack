
export class Pessoa {
    #anoNascimento
    constructor(nome,anoNascimento,nacionalidade) {
        this.nome = nome;
        this.anoNascimento = anoNascimento;
        this.nacionalidade = nacionalidade;
    }

    get idade() {
        getfullYear() - this.#anoNascimento

    }
}