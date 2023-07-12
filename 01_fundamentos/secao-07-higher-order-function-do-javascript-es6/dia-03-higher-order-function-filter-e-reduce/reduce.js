const countries = require('./data');

// 1 - Calcule a quantidade total da população de todos os países.
// De olho na dica 👀: o valor inicial deve começar com 0, portanto o acumulador é um número.

const expectedResult = 120797034;
const getPopulation = () =>
  countries.reduce((acc, curr) => curr.population + acc, 0);


// 2 - Calcule a área total de todos os países.

const expectedResult2 = 4311757;
const getTotalArea = () => countries.reduce((acc, curr) => curr.area + acc, 0);


// 3 - Encontre o país com o maior nome.
// De olho na dica 👀: o reduce consegue comparar o valor do primeiro com o segundo parâmetro. Compare o tamanho da string name do primeiro parâmetro com a do segundo parâmetro e retorne aquele que for maior.

const expectedResult3 = {
  name: 'American Samoa',
  region: 'Oceania',
  currencies: [{ code: 'USD', name: 'United States Dollar' }],
  capital: 'Pago Pago',
  population: 55197,
  area: 199
}
const longestName = () => countries.reduce((acc, curr) =>
  curr.name.length < acc.name.length ? acc : curr 
, countries[0])


// 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.
// De olho na dica 👀: faça com que o array de nomes seja um array de letras.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
const expectedResult4 = 20;
const countA = () => {
  return names.map((name) => {
    const quantidadeA = name.split('').reduce((acc, curr) => {
      if (curr.toLowerCase() === 'a') {
        return acc + 1;
      }
      return acc;
    }, 0)
    return quantidadeA;
  }).reduce((acc, curr) =>
  curr + acc, 0)
}
console.log(countA());

// 5 - Crie um array de objetos e calcule a média de notas. Utilize as constantes students e grades para criar um array de objetos e calcule a média da nota das pessoas estudantes:
// De olho na dica 👀: você pode utilizar o map para iterar no array e utilizar o reduce para calcular a média.
// O index 0 do array `students` equivale ao index 0 do array `grades`

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
const expectedResult5 = [
 { name: 'Pedro Henrique', average: 7.8 },
 { name: 'Miguel', average: 9.2 },
 { name: 'Maria Clara', average: 8.8 },
];
const studentAverage = () => {
  const result = students.map((student) => {

  });

  return result = {};
}
