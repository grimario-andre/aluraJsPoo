import { Funcionario } from "../../Models/Funcionario.js";

export class Diretor extends Funcionario{
    constructor (nome, nr, salario) {
        super(nome, nr, salario);
        this._bonificacao = 2;
    }
}