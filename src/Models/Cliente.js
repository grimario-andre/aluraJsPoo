import { Conta } from "./Conta.js";

export class Cliente {
    #primeiroNome;
    #numeroDeRegistro;
    #contaBancaria;
    #senha

    constructor(primeiroNome, numeroDeRegistro, tipoDeConta, numeroDaAgencia, senha) {
        this.setPrimeiroNome(primeiroNome);
        // this.setNumeroDeRegistro(numeroDeRegistro);
        this.#numeroDeRegistro = numeroDeRegistro;
        //Instância da classe Conta e Passando paramentro para Instância da classe TipoDeConta
        this.#contaBancaria = new Conta(tipoDeConta, numeroDaAgencia);
        this.#senha = senha;
        this.autenticavel = 1;

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

    getContaBancaria() {
        return this.#contaBancaria;
    }

    dadosDoCliente() {
        return console.log(`
            ====== Dados do Cliente ======
            Cliente: ${this.getPrimeiroNome()}
            Número de Registro: ${this.getNumeroDeRegistro()}
            Conta: ${this.#contaBancaria.getTipoDeConta().getTipoContaBancaria()}
            Agencia: ${this.#contaBancaria.getNumeroDaAgencia()}
            Saldo: ${this.#contaBancaria.consultarSaldo()}
        `);

    }

    dadosDoDeposito(cliente, valorDoDeposito) {
        return console.log(`
            ======= Dados do Depósito =======
            Cliente: ${cliente.getPrimeiroNome()}
            Conta: ${cliente.#contaBancaria.getTipoDeConta().getTipoContaBancaria()}
            Valor do depósito: ${valorDoDeposito}
            Saldo: ${cliente.#contaBancaria.consultarSaldo()}
        `);
    }

    dadosDoSaque(cliente, valorDoSaque) {
        return console.log(`
            ======= Dados do Saque =======
            Cliente: ${cliente.getPrimeiroNome()}
            Conta: ${cliente.#contaBancaria.getTipoDeConta().getTipoContaBancaria()}
            Valor do depósito: ${valorDoSaque}
            Valor da taxa: ${cliente.#contaBancaria.getTipoDeConta().getTipoDeConta().consultarTaxa()}
            Saldo: ${cliente.#contaBancaria.consultarSaldo()}
        `);
    }

    // dadosDaTransferencia(clienteDestinario, valorDaTransferencia) {
    //     return console.log(`
    //         ======= Dados da Transferência =======
    //         ClienteRemetente: ${this.getPrimeiroNome()}
    //         Conta: ${this.#contaBancaria.getNomeTipoDeConta()}
            
    //         +++++++++++++++++++++++++++++++++++++++++++++++
    //         Valor da Transferência: ${valorDaTransferencia}

    //         ClienteDestinatário: ${clienteDestinario.getPrimeiroNome()}
    //         Conta: ${clienteDestinario.#contaBancaria.getNomeTipoDeConta().getTipodeConta()}
            
    //     `);
    // }

    autenticar() {
        return true;
    }
}