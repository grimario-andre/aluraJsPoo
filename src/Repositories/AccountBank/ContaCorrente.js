import { helperValidaValorInformado } from "../../Helpers/helperValidaValorInformado.js";
import { OperacoesBancarias } from "../OperationsAccountBank/OperacoesBancarias.js";

export class ContaCorrente extends OperacoesBancarias {
    #saldo = 0;
    #taxa = 0;

    constructor() {
        super();
    }

    consultarSaldo() {
        return this.#saldo;
    }

    consultarTaxa() {
        return this.#taxa;
    }

    depositar (valor) {   
        if (!helperValidaValorInformado(valor)) {    
            return console.log(`Valor inválido para depósito`);
        }

        this.#saldo += valor;    
        return true;
    }

    sacar(valor) {
        let taxaSacar = 1.1;
        if (!helperValidaValorInformado(valor)) {    
            return console.log(`Valor inválido para saque`);
        }

        //Validação saldo disponível
        let consultarSaldo = this.#saldo;
        if (consultarSaldo < 0 || consultarSaldo < valor) {
            return `Saldo insuficiente :(`;
        }

        let valorAtualizadoParaSacar = valor * taxaSacar;
        this.#taxa = taxaSacar;
        this.#saldo -= valorAtualizadoParaSacar;

        return true;
    }
}