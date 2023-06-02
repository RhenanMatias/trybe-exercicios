/* 🚀 Exercício 6: Há um par entre nós
6 - Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
Faça esse exercício utilizando somente um if. */

const num1 = 13;
const num2 = 20;
const num3 = 37;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
}
