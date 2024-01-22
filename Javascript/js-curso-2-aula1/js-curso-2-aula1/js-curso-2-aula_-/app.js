let listaDeNumerosSorteados = []
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function numeroAleatorio() { // Funcai que gera numero aleatorio
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
    let quantidadeElementosLista = listaDeNumerosSorteados.length;

    if (quantidadeElementosLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido;
    }
}
function exibirTextoNaTela(tag, texto) { // Funcao que edita texto por tag selecionada
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirSaudacao() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10:');
}
exibirSaudacao();

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirSaudacao();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}

function verificarChute() { // Compara o numero digitado pelo usuario com o numero ramdom gerado
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa'
        let mensagemTentativas = ` Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute < numeroSecreto){
            exibirTextoNaTela('p', `O numéro é maior que ${chute}`);
    } else {
        exibirTextoNaTela('p', `O numéro é menor que ${chute}`);
    }
        tentativas++;
        limparCampo();
        }
}
function limparCampo() { 
    chute = document.querySelector('input');
    chute.value = '';
    }
