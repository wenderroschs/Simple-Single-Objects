import {Trabalhador} from './trabalhador.class.js';

const t1 = new Trabalhador('Carla', 'Engenheira Química', 66666.00, 2);
console.log(t1.nome);
console.log(t1.cargo);
console.log(t1.CHdiaria);
console.log(t1.salarioHr);
console.log(t1.SalarioDia);
console.log(t1.toString());

t1.aumentarSalario(60.50);
console.log(t1.salarioHr);
console.log(t1.salarioHr === 66726.5);

t1.diminuirSalario(30.37);
console.log(t1.salarioHr);
console.log(t1.salarioHr === 66696.13);

t1.alterarSalario(55555);
console.log(t1.salarioHr);
console.log(t1.salarioHr === 55555);

t1.aumentarCH(8);
console.log(t1.CHdiaria);
console.log(t1.CHdiaria === 10);

t1.diminuirCH(3);
console.log(t1.CHdiaria);
console.log(t1.CHdiaria === 7);

console.log(t1.cargaHorariaMensal(25));
console.log(t1.cargaHorariaMensal(25) === '175 horas');

console.log(t1.salarioMensal(25));
console.log(t1.salarioMensal(25) === 'R$ 9722125');

// não podem funcionar

// t1.salarioHr = 89379847;
// t1.CHdiaria = 9;
// t1.nome = diego;;
