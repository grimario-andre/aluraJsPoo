import { ContaCorrente } from '../AccountBank/ContaCorrente.js';

export class TipoContaBancaria {
    #nomeTipoDeConta;
    #conta;
    constructor(tipoDeConta) {
        switch (tipoDeConta) {
            case "corrente":
                this.#conta = new ContaCorrente();
                this.#nomeTipoDeConta = tipoDeConta;
                break;

            case "poupanca":
                this.#conta = 'poupanca';
                break;
            default:
                    throw new Error("Tipo de conta Invpalido");
                break;
        }
    }

    getTipoContaBancaria() {
        return this.#nomeTipoDeConta;
    }

    getTipoDeConta() {
        return this.#conta;
    }
}