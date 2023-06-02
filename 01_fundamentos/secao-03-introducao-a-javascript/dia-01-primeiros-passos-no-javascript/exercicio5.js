/* Exercício 5
Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
⭐️ Desafio extra, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

Exemplo: Bispo -> Diagonais. */

let piece = 'rei'

switch (piece) {
    case 'peão':
        return 'Pode andar uma casa para frente'
    break;
    case 'torre':
        return 'Verticais e horizontais quantas casas quiser.'
    break;
    case 'cavalo':
        return'Se movimenta em L'
    break;
    case 'bispo':
        return 'Se movimenta em diagonais'
    break;
    case 'rainha':
        return 'Se movimenta quantas casas quiser em qualquer direção'
    break;
    case 'rei':
        return 'Se movimenta para qualquer direção um casa.'
    break;
    default:
        return 'Error'
} 

console.log(piece)