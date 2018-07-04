import {ATM} from './atm.class.js';

const atm = new ATM(2344499);
console.log(atm.numeroSerie === 2344499);
// a linha a seguir não deve fazer efeito
// atm.numeroSerie = 34883444;
console.log(atm.numeroSerie === 2344499);
// o ATM não tem dinheiro no início
console.log(atm.valor); // 0
console.log(atm.valor === 0);
// abastecendo com 33 notas de 100
// verificando a quantidade de cédulas de 100
atm.abastecer(33, 100);
console.log(atm.cedulas(100)); // 33
// espera-se 33 cédulas
console.log(atm.cedulas(100) === 33);
// e 33 * R$ 100 totalizando R$ 3300
console.log(atm.valor === 3300);
// espera-se nenhuma cédula de qualquer outro valor
console.log(atm.cedulas(5)); // 0
console.log(atm.cedulas(5) === 0);
console.log(atm.cedulas(50)); // 0
console.log(atm.cedulas(50) === 0);
// mesmo os que não existem podem ser consultados, mas retornam 0
console.log(atm.cedulas(3)); // 0
console.log(atm.cedulas(3) === 0);
// abastecimento de cédulas não existentes são rejeitados
atm.abastecer(8, 3); // 8 cédulas de R$ 3,00
console.log(atm.cedulas(3) === 0);
// consultando o valor
console.log(atm.valor); // 33 * 100 = 3300 reais
console.log(atm.valor === 3300);
// retirada rejeitada
atm.retirar(350); // não há cédulas de R$ 50,00
console.log(atm.cedulas(100) === 33);
console.log(atm.valor === 3300);
// retirada válida
atm.retirar(300); // 3 cédulas de 100
console.log(atm.cedulas(100) === 30);
console.log(atm.valor === 3000);
// retirada rejeitada
atm.retirar(3100); // não há cédulas suficientes
console.log(atm.cedulas(100) === 30);
console.log(atm.valor === 3000);
// retirada válida
atm.retirar(3000); // vai esvaziar o ATM
console.log(atm.cedulas(100));
console.log(atm.valor === 0);
// abastecimento de R$ 50,00 e R$ 10,00
atm.abastecer(10, 10); // 10 cédulas de R$ 10,00
atm.abastecer(10, 50); // 10 cédulas de R$ 50,00
console.log(atm.cedulas(10) === 10);
console.log(atm.cedulas(50) === 10);
console.log(atm.valor === 600); // 10 * 10 + 10 * 50
// retirada prioriza cédulas de maior valor
atm.retirar(100); // retira 2 cédulas de R$ 50,00
console.log(atm.cedulas(10) === 10);
console.log(atm.cedulas(50) === 8);
console.log(atm.valor === 500); // 10 * 10 + 8 * 50
// retirada combinada
atm.retirar(90); // 1 cédula de R$ 50,00 e 4 cédulas de R$ 10,00
console.log(atm.cedulas(10) === 6);
console.log(atm.cedulas(50) === 7);
console.log(atm.valor === 410); // 6 * 10 + 7 * 50


//meus casos de teste

const atm1 = new ATM(01293898);
atm1.abastecer(90, 100);
atm1.abastecer(80, 50);
atm1.abastecer(70, 20);
atm1.abastecer(60, 10);
atm1.abastecer(100, 5);

console.log(atm1.cedulas(100) === 90);
console.log(atm1.cedulas(50) === 80);
console.log(atm1.cedulas(20) === 70);
console.log(atm1.cedulas(10) === 60);
console.log(atm1.cedulas(5) === 100);
console.log(atm1.valor);

atm1.retirar(170); // 1 cédula de 100, 1 de 50 e 1 de 20
console.log(atm1.cedulas(100) === 89);
console.log(atm1.cedulas(50) === 79);
console.log(atm1.cedulas(20) === 69);
console.log(atm1.valor === 15330);

atm1.retirar(180); // 1 cédula de 100, 1 de 50, 1 de 20 e 1 de 10
console.log(atm1.cedulas(100) === 88);
console.log(atm1.cedulas(50) === 78);
console.log(atm1.cedulas(20) === 68);
console.log(atm1.cedulas(10) === 59);
console.log(atm1.valor === 15150);

atm1.retirar(280); // 2 cédulas de 100, 1 de 50, 1 de 20 e 1 de 10
console.log(atm1.cedulas(100) === 86);
console.log(atm1.cedulas(50) === 77);
console.log(atm1.cedulas(20) === 67);
console.log(atm1.cedulas(10) === 58);
console.log(atm1.valor === 14870);

atm1.retirar(285); // 2 cédulas de 100, 1 de 50, 1 de 20, 1 de 10 e 1 de 5
console.log(atm1.cedulas(100) === 84);
console.log(atm1.cedulas(50) === 76);
console.log(atm1.cedulas(20) === 66);
console.log(atm1.cedulas(10) === 57);
console.log(atm1.cedulas(5) === 99);
console.log(atm1.valor === 14585);

