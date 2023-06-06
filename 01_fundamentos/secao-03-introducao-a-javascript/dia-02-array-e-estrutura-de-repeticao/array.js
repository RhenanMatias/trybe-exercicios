const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1

console.log(numbers);

// 2

let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}

console.log(soma);

// 3

let media = 0;
for (let index = 0; index < numbers.length; index += 1) {
  media += numbers[index] / numbers.length;
}

console.log(media);

// 4

let resultadoMedia = "";
if (media > 20) {
  resultadoMedia = "O valor da média aritmética é maior que 20";
} else {
  resultadoMedia = "O valor da média aritmética é menor que 20";
}

console.log(resultadoMedia);

// 5

let maiorNum = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (maiorNum < numbers[index]) {
    maiorNum = numbers[index];
  }
}

console.log(maiorNum);

// 6

let countOdd = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 1) {
    countOdd += 1;
  }
}
if (countOdd > 0) {
  countOdd = `Quantidade de números impares: ${countOdd}`;
} else {
  countOdd = "Nenhum valor ímpar encontrado";
}
console.log(countOdd);
