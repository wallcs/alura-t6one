let numeroSecreto = numeroAleatorio();
let tentativas = 1;
function numeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);    
}
// let titulo = document.querySelector('h1');
// titulo.innerHTTML = 'Jogo do Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativas'
        let mensagemTentativas = ` Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);

    } else {
        if (chute < numeroSecreto){
            exibirTextoNaTela('p', `O numéro é maior que ${chute}`);
    } else {
        exibirTextoNaTela('p', `O numéro é menor que ${chute}`);
    }
        tentativas++;
}
}