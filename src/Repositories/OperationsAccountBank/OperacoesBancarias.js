import { IOperacoesBancarias } from "./IOperacoesBancarias.js";

export class OperacoesBancarias extends IOperacoesBancarias {
    constructor() {
        super();
    }

    consultarSaldo() {
        throw new Error("Método 'consultarSaldo()' deve ser implementado.");
    }

    depositar(valor) {
        throw new Error("Método 'depositar(valor)' deve ser implementado.");
    }

    sacar(valor) {
        throw new Error("Método 'sacar(valor)' deve ser implementado.");
    }

    transferirQuantia(valorATransferir, clienteDestinario) {
        throw new Error("Método 'transferirQuantia(valorATransferir, clienteDestinario)' deve ser implementado.");
    }
}