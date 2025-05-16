import { TipoContaBancaria } from "../Repositories/AccountBank/TipoContaBancaria.js";

export class Conta {
    #tipoDeConta;
    #numeroDaAgencia;
    
    static #totalDeContasBancarias = 0;

    constructor (tipoDeConta, numeroDaAgencia) {
        this.#tipoDeConta = new TipoContaBancaria(tipoDeConta);
        this.#numeroDaAgencia = numeroDaAgencia;
        Conta.#totalDeContasBancarias++;
    }

    //Getters&&Setters
    getTipoDeConta() {
        return this.#tipoDeConta;
    }

    getNumeroDaAgencia() {
        return this.#numeroDaAgencia;
    }
    
    getTotalDeContasBancarias () {
        console.log(`Total de contas bancárias: ${Conta.#totalDeContasBancarias}`);
    }

    consultarSaldo () {
        return this.#tipoDeConta.getTipoDeConta().consultarSaldo();
    }

    depositar (valor) {   
        return this.#tipoDeConta.getTipoDeConta().depositar(valor);
    }

    sacar (valor) {
        return this.#tipoDeConta.getTipoDeConta().sacar(valor);
    }
}