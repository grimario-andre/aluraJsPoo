import { Cliente } from "./src/Models/Cliente.js";

const cliente = new Cliente("Grimário André", '382.702.198.78', 'Corrente', 1009);
const cliente2 = new Cliente("Joaquim Ferreira", '382.702.523.12', 'Poupança', 1009);

cliente.dadosDoCliente(cliente);
cliente2.dadosDoCliente(cliente2);

const valorDoDeposito = 0;
if (cliente.getContaBancaria().depositar(valorDoDeposito) == `Depósito Efetuado`) {
    cliente.dadosDoDeposito(cliente, valorDoDeposito);
}


const valorATransferir = 25;
cliente.transferirQuantia(valorATransferir, cliente2);
cliente.dadosDaTransferencia(cliente2, valorATransferir);

cliente.getContaBancaria().getTotalDeContasBancarias();



// cliente.dadosDoCliente(cliente);
// cliente2.dadosDoCliente(cliente2);

// const sacar = cliente.contaBancaria.sacar(75);
// console.log(sacar);





