// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'mel', 'uva'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));