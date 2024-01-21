// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

// -------------------------------------------------------------------------------
// function indiceDeMassaCorporal(altura, peso) {
//     console.log( imc = altura / peso**2);
// }
// let altura = prompt(('Digite seu peso (kg)'));
// let peso = prompt(('Digite sua altura (m)'));

// indiceDeMassaCorporal(altura, peso);

// -------------------------------------------------------------------------------
// function fatorialDeNumero(n) {
//     if (n < 0) {
//           return ('Numero negativo. Insira outro numero.');
//     } else {
//         if (n == 0) {
//         return 1;
//         } else {
//         return (fatorialDeNumero(n-1)*n);
//         }
//     }
//   }
//   console.log(fatorialDeNumero(5));

// -------------------------------------------------------------------------------
// function conversao(valor) {
//     return(emReais = 4.80 * valor);
// }

// console.log(conversao(30))

// -------------------------------------------------------------------------------
// function tamanhoSala(altura, largura) {
//     let area = largura * altura;
//     let perimetro = (2*largura) + (2*altura)
// alert(` A area e de ${area} metros quadrados e perimetro e de ${perimetro}m.`)
// }

// tamanhoSala(2, 3)

// -------------------------------------------------------------------------------
// function tamanhoSalaCircular(raio) {
//     let area = 3.14 * raio**2;
//     let perimetro = (2*3.14) * raio
// alert(` A area e de ${area} metros quadrados e perimetro e de ${perimetro}m.`)
// }

// tamanhoSalaCircular(5)

// -------------------------------------------------------------------------------
function tabuada(numero) {
    for(var i = 1; i <= 10; i++)
        result = 2;
        console.log(`${numero} x ${i} = ${result}`)
}
tabuada(2);