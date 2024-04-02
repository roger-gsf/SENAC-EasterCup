const rl = require("readline-sync");

Exercise1:
    function calcularFatorial(numero) {
        let fatorial = 1;
        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }
        return fatorial;
    }

const numero = rl.questionInt("Digite um numero inteiro para calcular o fatorial: ");

if (isNaN(numero)) {
    console.log("Por favor, insira um numero valido.");
} else if (numero < 0) {
    console.log("O fatorial de numeros negativos nao esta definido.");
} else {
    const resultado = calcularFatorial(numero);
    console.log(`O fatorial de ${numero} eh: ${resultado}`);
}