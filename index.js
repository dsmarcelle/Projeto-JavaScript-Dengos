import { Cliente } from "./Cliente.js"
import { Produto } from "./Produto.js"
import { Venda } from "./Venda.js"

console.log("Vendas realizadas")

//const cliente1 = new Cliente("Maria", 11122233309);
//const cliente2 = new Cliente("Marta", 88822233355);
//const cliente3 = new Cliente("Isadora", 45236915245);
//const cliente4 = new Cliente("Mauri", 74525365124);

let clientes = [new Cliente("Maria", 11122233309),
new Cliente("Marta", 88822233355),
new Cliente("Isadora", 45236915245),
new Cliente("Mauri", 74525365124)]

const produtos = [new Produto("Boneca", "Dalila", "30cm", "Porcelana", "Vestido Rosa"),
new Produto("Homem Aranha", "Diego", "18cm", "Vermelho, Azul e Preto", "Macacão Azul"),
new Produto("Coelho", "Bruno", "23cm", "Pérola", "Jardineira Rosa"),
new Produto("Astronalta", "Pedrinho", "20cm", "Branco e Azul", "Macacão Branco")]
//const produto1 = new Produto("Boneca", "Dalila", "30cm", "Porcelana", "Vestido Rosa");
//const produto2 = new Produto("Homem Aranha", "Diego", "18cm", "Vermelho, Azul e Preto", "Macacão Azul");
//const produto3 = new Produto("Coelho", "Bruno", "23cm", "Pérola", "Jardineira Rosa");
//const produto4 = new Produto("Astronalta", "Pedrinho", "20cm", "Branco e Azul", "Macacão Branco");


const venda2 = new Venda(clientes[3], [produtos[1], produtos[3]]);

console.log(venda2);
