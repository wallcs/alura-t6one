let titulo = document.querySelector('h1');
titulo.innerHTTML = 'Hora do Desafio';

function botaoConsole() {
    console.log('O botão foi clicado');
}

function botaoAlerta() {
    console.log('Eu amo JS');
}

function botaoPrompt() {
    cidade = prompt(`Digite o nome de uma cidade brasileira:`);
    alert(`Estive em ${cidade} e lembrei de você!`);
}


function botaoSoma() {
    valor1 = parseInt(prompt(`Digite o primeiro número:`));
    valor2 = parseInt(prompt(`Digite o segundo número:`));
    let resultado = valor1 + valor2;
    console.log(resultado)
    alert(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);
}