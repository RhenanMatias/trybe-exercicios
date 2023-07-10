const books = require("./database");

 // Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
 // De olho na dica 👀: use a função find.
const findFirstAuthor = (birthYear) => {
  const firstAuthor = books.find((book) =>
    book.author.birthYear === birthYear);
    return firstAuthor;
};


 // Retorne o nome do livro com menor número de caracteres (menor nome).
 // De olho na dica 👀: use a função forEach.
 const smallerName = () => {
  let nameBook;

  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
}
