// Fraction(numerator, denominator)
import {Fraction} from './fraction.class.js';
const fr = new Fraction(3, 4); // para representar "três quartos"
console.log(fr.numerator === 3);
console.log(fr.denominator === 4);
console.log(fr.toString()); // imprime, por exemplo: "3/4"
console.log(fr.toString() === '3/4');
// as seguintes linhas não devem funcionar
//fr.numerator = 10;
//fr.denominator = 10;
// -----------------------

const f1 = new Fraction(4, 15);
console.log(f1.toString() === '4/15');

const f2 = new Fraction(5, 15);
console.log(f2.toString() === '5/15');

const f3 = f1.plus(f2); // representaria uma situação de: f1 + f2
console.log(f3.toString()); // imprime "9/15"
console.log(f3.toString() === '9/15');

const f4 = new Fraction(1, 3);
console.log(f4.canReduce); // imprime false
console.log(f4.canReduce === false);

const f5 = new Fraction(9, 15);
console.log(f5.canReduce); // imprime true
console.log(f5.canReduce === true);

f5.reduce();
console.log(f5.toString() === '3/5');
console.log(f5.canReduce === false);

const f6 = new Fraction(25, 4);
const f7 = new Fraction(2, 5);

const f8 = f6.divide(f7);
console.log(f8); // imprime "125/8"

const f9 = new Fraction(3, 7);
const f10 = new Fraction(2, 3);

const f11 = f9.multiply(f10);
console.log(f11.toString()); // imprime "6/21"
console.log(f11.toString() === '6/21'); // imprime "6/21"

const f12 = new Fraction(7, 8);
const f13 = new Fraction(2, 5);

console.log(f12.greaterThan(f13)); // imprime "true"
console.log(f12.greaterThan(f13) === true);
console.log(f12.lessThan(f13)); // imprime "false"
console.log(f12.lessThan(f13) === false);
console.log(f12.equals(f13)); // false
console.log(f12.equals(f13) === false);

const f14 = new Fraction(2, 3);
const f15 = new Fraction(12, 36);
const f16 = new Fraction(1, 3);

// Meus casos de teste
const f19 = new Fraction(19, 23);
const f20 = new Fraction(2, 3);
const f21 = new Fraction(30, 15);

const f22 = f19.plus(f20);
const f23 = f21.plus(f19);
const f24 = f20.plus(f21);

console.log(f22.toString() === "103 / 69");
console.log(f23.toString() === "975 / 345");
console.log(f24.toString() === "120 / 45");

const f25 = new Fraction(6, 27);
f25.reduce();
console.log(f25.toString() === "2/9");
console.log(f25.canReduce === false);

const f26 = new Fraction(3, 9);
console.log(f26.canReduce === true);
f26.reduce();
console.log(f26.toString() === "1/3");

const f27 = new Fraction(3, 12);
console.log(f27.canReduce === true);
f27.reduce();
console.log(f27.toString() === "1/4");
const f28 = new Fraction(3, 7);
const f29 = new Fraction(10, 5);
const f30 = new Fraction(13, 9);

const f31 = f28.divide(f29);
console.log(f31 === "15/70");

const f32 = f29.divide(f30);
console.log(f32 === "90/65");

const f33 = f28.divide(f30);
console.log(f33 === "27/91");

const f34 = f28.multiply(f29);
console.log(f34 === "30/35");

const f35 = f29.multiply(f30);
console.log(f35 === "130/45");

const f36 = f28.multiply(f30);
console.log(f36 === "39/63");

console.log(f28.greaterThan(f29) === false);
console.log(f29.greaterThan(f30) === true);
console.log(f28.greaterThan(f30) === false);

console.log(f28.lessThan(f29) === true);
console.log(f29.lessThan(f30) === false);
console.log(f28.lessThan(f30) === true);

console.log(f28.equals(f29) === false);
console.log(f29.equals(f30)=== false);
console.log(f28.equals(f30) === false);

const f17 = new Fraction(4);
console.log(f17.toString() === "4/undefined");
const f18 = new Fraction();
console.log(f18.toString() === "undefined/undefined");
