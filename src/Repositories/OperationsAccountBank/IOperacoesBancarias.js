/**
 * @interface
 */
export class IOperacoesBancarias {
     constructor() {
        if (new.target === IOperacoesBancarias) {
            throw new Error("Classe abstrata não pode ser instanciada diretamente.");
        }
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