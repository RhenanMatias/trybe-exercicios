/*Exercício 2
Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados. */

let number1 = 6;
let number2 = 9;
let message = '';

if (number1 > number2) {
    message = 'É o maior número'
} else {
    message = 'É o menor número'
}

console.log(message);