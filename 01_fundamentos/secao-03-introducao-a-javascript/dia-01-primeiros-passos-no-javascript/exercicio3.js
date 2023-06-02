/*Exercício 3
Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.*/

let number1 = 15;
let number2 = 9;
let number3 = 22;
let message = '';

if (number1 > number2 && number1 > number3) {
    message = 'variável 1 é o maior número'
} else if (number2 > number1 && number2 > number3) {
    message = 'variável 2 é o maior número'
} else {
    message = 'variável 3 é o maior número'
}

console.log(message);