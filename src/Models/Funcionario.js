export class Funcionario {
    _primeiroNome;
    _numeroDeRegisto;
    _salario;
    #senha;
    _bonificacao = 1;

    constructor (nome, nr, salario) {
        this._primeiroNome = nome;
        this._numeroDeRegisto = nr;
        this._salario = salario;
    }

    autenticar(senha) {
        return this.#senha == senha;
    }
    
    cadastrarSenha (senha) {
        return this.#senha = senha;
    }
}