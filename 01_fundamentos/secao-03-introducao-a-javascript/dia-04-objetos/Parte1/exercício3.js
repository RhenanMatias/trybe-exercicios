const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes'
    },
    {
      title: 'Harry Potter e o Prisioneiro de Azkaban',
      author: 'JK Rowling',
      publisher: 'Rocco'
    }
  ]
}

function quantidade(arr) {
  let quantidade = 0;
  for (let index = 0; index < arr.length; index += 1) {
    quantidade += 1
  }
  return `${reader.name} tem ${quantidade} livros favoritos`;
}

console.log(quantidade(reader.favoriteBooks));