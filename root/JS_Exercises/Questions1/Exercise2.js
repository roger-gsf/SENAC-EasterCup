const readline = require('readline-sync');

const number = parseInt(readline.question('Digite um número para gerar a tabuada: '));

if (isNaN(number)) {
  console.log('Você precisa digitar um número válido!');
  process.exit(1);
}

for (let i = 1; i <= 10; i++) {
  const result = number * i;
  console.log(`${number} x ${i} = ${result}`);
}
