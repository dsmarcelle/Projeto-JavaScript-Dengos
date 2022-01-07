export class Cliente {
    nome;
    _cpf;

    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf, tipoPessoa) {
        this.nome = nome
        this._cpf = cpf;
    }
}