import { Conta } from "./Conta.js";

export class Cliente {
    #primeiroNome;
    #numeroDeRegistro;
    #contaBancaria;

    constructor(primeiroNome, numeroDeRegistro, tipoDeConta, numeroDaAgencia) {
        this.setPrimeiroNome(primeiroNome);
        // this.setNumeroDeRegistro(numeroDeRegistro);
        this.#numeroDeRegistro = numeroDeRegistro;
        //Instância da classe Conta
        this.#contaBancaria = new Conta();
        this.#contaBancaria.setTipoDeConta(tipoDeConta);
        this.#contaBancaria.setNumeroDaAgencia(numeroDaAgencia);
        Conta.incrementoTotalDeContasBancarias();
    }

    //Getters&&Setters
    getPrimeiroNome() {
        return this.#primeiroNome;
    }

    setPrimeiroNome(primeiroNome) {
        return this.#primeiroNome = primeiroNome;
    }

    getNumeroDeRegistro() {
        return this.#numeroDeRegistro;
    }

    // setNumeroDeRegistro(numeroDeRegistro) {
    //     return this.#numeroDeRegistro = numeroDeRegistro;
    // }

    getContaBancaria() {
        return this.#contaBancaria;
    }

    transferirQuantia(valorATransferir, clienteDestinario) {
        const saldo = this.#contaBancaria.getSaldo();
        if (saldo < 0) {
            console.log('saldo é igual a zero');
            
            return `Saldo insuficiente ${saldo}`;
        }

        let valorASacar = valorATransferir;
        this.#contaBancaria.sacar(valorASacar);

        clienteDestinario.#contaBancaria.depositar(valorATransferir);
    }

    dadosDoCliente(cliente) {
        return console.log(`
            ====== Dados do Cliente ======
            Cliente: ${cliente.getPrimeiroNome()}
            Número de Registro: ${cliente.getNumeroDeRegistro()}
            Conta: ${cliente.#contaBancaria.getTipoDeConta()}
            Saldo: ${cliente.#contaBancaria.getSaldo()}
        `);

    }

    dadosDoDeposito(cliente, valorDoDeposito) {
        return console.log(`
            ======= Dados do Depósito =======
            Cliente: ${cliente.getPrimeiroNome()}
            Conta: ${cliente.#contaBancaria.getTipoDeConta()}
            Valor do depósito: ${valorDoDeposito}
            Saldo: ${cliente.#contaBancaria.getSaldo()}
        `);
    }

    dadosDaTransferencia(clienteDestinario, valorDaTransferencia) {
        return console.log(`
            ======= Dados da Transferência =======
            ClienteRemetente: ${this.getPrimeiroNome()}
            Conta: ${this.#contaBancaria.getTipoDeConta()}
            
            +++++++++++++++++++++++++++++++++++++++++++++++
            Valor da Transferência: ${valorDaTransferencia}

            ClienteDestinatário: ${clienteDestinario.getPrimeiroNome()}
            Conta: ${clienteDestinario.#contaBancaria.getTipoDeConta()}
            
        `);
    }
}