import { Funcionario } from "../../Models/Funcionario.js";

export class Gerente extends Funcionario{
    constructor (nome, nr, salario) {
        super(nome, nr, salario);
        this._bonificacao = 1.1;
    }
}