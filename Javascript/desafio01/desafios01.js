// Mostre um alerta com a mensagem "Boas vindas ao nosso site!".

// Declare uma variável chamada nome e atribua a ela o valor "Lua".

// Crie uma variável chamada idade e atribua a ela o valor 25.

// Defina uma variável numeroDeVendas e atribua a ela o valor 50.

// Defina uma variável saldoDisponivel e atribua a ela o valor 1000.

// Exiba um alerta com o texto "Erro! Preencha todos os campos."

// Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos." Agora exiba um alerta com o valor da variável mensagemDeErro.

// Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.

// Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.

// Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

// -------------------------------------------------------------------------------
alert("Boas vindas ao nosso site!");

// -------------------------------------------------------------------------------
let nome = "lua";
console.log(nome);

// -------------------------------------------------------------------------------
let idade = 25;
console.log(idade);

// -------------------------------------------------------------------------------
let numeroDeVendas = 50;
console.log(numeroDeVendas);

// -------------------------------------------------------------------------------
let saldoDisponivel = 1000;
console.log(saldoDisponivel);

// -------------------------------------------------------------------------------
alert("Erro! Preencha todos os campos.");

// -------------------------------------------------------------------------------
let mensagemDeErro = ("Erro! Preencha todos os campos.");
alert(mensagemDeErro);

// -------------------------------------------------------------------------------
let nome1 = prompt("Qual é o seu nome?: ");
console.log(nome1);

// -------------------------------------------------------------------------------
let idade1 = prompt("Digite a sua idade: ");
console.log(idade1);
if (idade1 >= 18) {
    alert("Já pode tirar carteira!");
}


