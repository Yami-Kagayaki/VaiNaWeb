// 01 - Crie um array que receba 5 itens e exiba no console.

const a = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
console.log(a);

// 02 - Utilize um método para adicionar um nome ao inicio do array.

const b = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
b.unshift("Item 0");
console.log(b);

// 03 - Utilize um método para remover o último nome do array.

b.pop();
console.log(b);

// 04 - Utilize um método para adicionar dois nomes ao fim do array.

b.push("Item 5", "Item 6");
console.log(b);

// 05 - Utilize um método para remover o primeiro nome do array.

b.shift();
console.log(b);

// 06 - Utilize um método para organizar em ordem crescente o seguinte array:

let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
numbers.sort();
console.log(numbers);

// 07 - Crie um objeto que receba ao menos três propriedades sobre você.

const objeto = {
  nome: "Lucas",
  idade: 21,
  genero: "Masc",
};

// 08 - Adicione uma nova propriedade sem alterar seu objeto inicial.

objeto.cidade = "natal";

// 09 - Remova uma propriedade desse objeto.

delete objeto.cidade;

// 10 - Mostre no console todas as propriedades desse objeto.

console.log(objeto);

// 11- Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 itens.

const cadastro = [
  {
    nome: "Lucas",
    idade: "21",
    telefone: "(99) 99999-9999",
    amigos: ["Amigo 1", "Amigo 2", "Amigo 3", "Amigo 4"],
  },
  {
    nome: "Lucas",
    idade: "21",
    telefone: "(99) 99999-9999",
    amigos: ["Amigo 1", "Amigo 2", "Amigo 3", "Amigo 4"],
  },
  {
    nome: "Lucas",
    idade: "21",
    telefone: "(99) 99999-9999",
    amigos: ["Amigo 1", "Amigo 2", "Amigo 3", "Amigo 4"],
  },
  {
    nome: "Lucas",
    idade: "21",
    telefone: "(99) 99999-9999",
    amigos: ["Amigo 1", "Amigo 2", "Amigo 3", "Amigo 4"],
  },
  {
    nome: "Lucas",
    idade: "21",
    telefone: "(99) 99999-9999",
    amigos: ["Amigo 1", "Amigo 2", "Amigo 3", "Amigo 4"],
  },
];

// 12 - Mostre no console o nome de um amigo de cada lista.

for (i = 0; i < cadastro.length; i++) {
  console.log(cadastro[i].amigos[1]);
}
