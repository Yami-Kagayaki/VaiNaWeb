//1 - crie uma função que exiba uma mensagem no console

function sayHello() {
  console.log("Hello");
}

sayHello();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function say(String) {
  console.log(String);
}

say("Olá");

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function pessoa(nome, idade, estilo) {
  console.log(
    "Olá, eu sou o",
    nome,
    "e tenho",
    idade,
    "de idade. Gosto de",
    estilo,
    "bastate."
  );
}

pessoa("Lucas", "21", "Rock");

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function sayLorota(a, b) {
  console.log(a, b);
}

sayLorota("Dracula", "Loleny");

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplica(a) {
  console.log(a * 3);
}

triplica(9);

//6 - crie uma função que  verifique se uma  variável é true ou false

var yOrN = true;

function verificar() {
  if (yOrN === true) {
    console.log("É verdade");
  } else {
    console.log("É mentira");
  }
}

verificar();
