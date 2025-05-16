import { Cliente } from "./src/Models/Cliente.js";
import { Gerente } from "./src/Repositories/Employees/Gerente.js";
import { Diretor } from "./src/Repositories/Employees/Diretor.js";
import { SistemaLogin }  from "./src/Repositories/Auth/SistemaLogin.js";


const diretor1 = new Diretor("Fabio Junior", '382.702.856.04', 10000);
console.log(diretor1);
diretor1.cadastrarSenha('123456');
let direntor1LoginStatus = SistemaLogin.login(diretor1, '123456');
console.log(direntor1LoginStatus);

const gerente1 = new Gerente("Grimário André", '382.702.198.78', 5000);
console.log(gerente1);
gerente1.cadastrarSenha(gerente1, '123456');
let gerente1LoginStatus = SistemaLogin.login(gerente1, '123456');
console.log(gerente1LoginStatus);


const cliente1 = new Cliente("Grimário André", '382.702.198.78', 'corrente', 1009, '456');
console.log(cliente1);

let cliente1LoginStatus = SistemaLogin.login(cliente1, '456');
console.log(cliente1LoginStatus);












// const cliente = new Cliente("Grimário André", '382.702.198.78', 'corrente', 1009);
// const cliente2 = new Cliente("Joaquim Ferreira", '382.702.523.12', 'poupanca', 1009);

// cliente.dadosDoCliente();
// // cliente2.dadosDoCliente(cliente2);

// let valorDoDeposito = 50;
// console.log("Executando Depósito! Aguarde.");

// if (cliente.getContaBancaria().depositar(valorDoDeposito) == true) {
//     cliente.dadosDoDeposito(cliente, valorDoDeposito);
// }

// valorDoDeposito = 35;
// if (cliente.getContaBancaria().depositar(valorDoDeposito) == true) {
//     cliente.dadosDoDeposito(cliente, valorDoDeposito);
// }

// console.log("Executando Saque! Aguarde.");

// let valorDoSaque = -10;
// if (cliente.getContaBancaria().sacar(valorDoSaque) == true) {
//     cliente.dadosDoSaque(cliente, valorDoSaque);
// }




