import { helperValidaValorInformado } from "../Helpers/helperValidaValorInformado.js";

export class Conta {
    #tipoDeConta;
    #numeroDaAgencia;
    #saldo = 0;

    static #totalDeContasBancarias = 0;

    //Getters&&Setters
    getTipoDeConta() {
        return this.#tipoDeConta;
    }

    setTipoDeConta(tipoDeConta) {
        return this.#tipoDeConta = tipoDeConta;
    }

    getNumeroDaAgencia() {
        return this.#numeroDaAgencia;
    }

    setNumeroDaAgencia(numeroDaAgencia) {
        return this.#numeroDaAgencia = numeroDaAgencia;
    }

    getSaldo(){
        return this.#saldo;
    }

    getTotalDeContasBancarias () {
        console.log(`Total de contas bancárias: ${Conta.#totalDeContasBancarias}`);
        ;
    }

    static incrementoTotalDeContasBancarias () {
        Conta.#totalDeContasBancarias++;
    }

    consultarSaldo () {
        return `Saldo em conta: ${this.getSaldo()}`;
    }

    depositar (valor) {   
        if (!helperValidaValorInformado(valor)) {    
            return console.log(`Valor inválido`);
        }

        this.#saldo += valor;    
        return console.log(`Depósito Efetuado`);
    }

    sacar (valor){
        if (!helperValidaValorInformado(valor)) {    
            return console.log(`Valor inválido`);
        }

        let consultarSaldo = this.getSaldo();
        if (consultarSaldo < 0 || consultarSaldo < valor) {
            return `Saldo insuficiente :(`;
        }
        this.#saldo -= valor;

        return `Saque disponível aguarde a contagem das cédulas`;
    }

}