alert("Boas vindas ao jogo do número secreto!");
let numMax = 10;
let numSecreto = parseInt(Math.random()* numMax + 1);
console.log(numSecreto);
let guess;
let tentativa = 1;

while (guess != numSecreto) {
    guess = prompt(`Insira seu número de 1 e ${numMax}:`);
    if (numSecreto == guess) {
        break;
    } else {
        if ( guess < numSecreto){
            alert(`O número secreto é maior que ${guess}`);
        } else {
            alert(`O número secreto é menor que ${guess}`);
        }
        // tentativa = tentativa + 1;
        tentativa++
    }
}
// if (tentativa > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numSecreto} com ${tentativa} tentativas!`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numSecreto} com ${tentativa} tentativa!`);
// }


// Operador ternário
let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa" ;
alert(`Isso ai! Você descobriu o número secreto ${numSecreto} com ${tentativa} ${palavraTentativa}!`);


