// Criar uma função que exibe "Olá, mundo!" no console.

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

// -------------------------------------------------------------------------------
// function olaMundo(){
//     console.log("Olá Mundo");
// }

// olaMundo();

// -------------------------------------------------------------------------------
// function recebeNome(nome){
//     console.log(`Olá, ${nome}`);
// }
// recebeNome('José')

// -------------------------------------------------------------------------------
// function dobro(numero){
//     let resultado = numero * 2;
//     console.log(`O dobro do numero ${numero} é ${resultado}`);
// }
// dobro(100)

// -------------------------------------------------------------------------------
// function media(num1, num2, num3){
//     let resultado = (num1 + num2 + num3)/3 ;
//     console.log(`A média dos valores informados é ${resultado}`);
// }
// media(10, 8, 12)

// -------------------------------------------------------------------------------
// function maiorNum(num1, num2){
//     if (num1 > num2){
//         console.log(`${num1} é maior que ${num2}`)
//     } else{
//         console.log(`${num2} é maior que ${num1}`)
//     }
// }
// maiorNum(18, 1)

// -------------------------------------------------------------------------------
function mult(numero){
    let resultado = numero ** 2 ;
    console.log(`A multiplicação do número ${numero} é ${resultado}`);
}
mult(7)