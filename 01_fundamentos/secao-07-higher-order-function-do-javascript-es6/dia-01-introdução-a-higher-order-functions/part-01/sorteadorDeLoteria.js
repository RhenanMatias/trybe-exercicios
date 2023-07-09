/* Sorteador de loteria

Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).*/


const generateRandomNumber = () => Math.floor(Math.random() * 5) + 1;
const randomNumber = generateRandomNumber()

const compareNumberWithRandomNumber = (number) => {
  const randomNumber = generateRandomNumber();
  return number === randomNumber;
};

const resultadoDoSorteio = (numeroApostado, funcaoDeVerificacao) => {
  const numeroSorteado = generateRandomNumber();
  if (funcaoDeVerificacao(numeroApostado, numeroSorteado)) {
    return "Parabens, você ganhou"
  } else {
    return "Tente novamente";
  }
};

console.log(resultadoDoSorteio(randomNumber, compareNumberWithRandomNumber));