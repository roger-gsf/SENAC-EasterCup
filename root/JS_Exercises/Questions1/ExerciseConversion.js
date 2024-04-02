const rl = require('readline-sync');

function converterMoeda(valor, moedaOrigem, moedaDestino) {
    const taxaConversao = {
        'dolar': 1,
        'real': 5.06,
        'dirham marroquino': 10.08,
        'won sul-coreano': 1355.92,
    };

    moedaOrigem = moedaOrigem.toLowerCase();
    moedaDestino = moedaDestino.toLowerCase();

    if (!(moedaOrigem in taxaConversao) || !(moedaDestino in taxaConversao)) {
        return "Moeda de origem ou destino não suportada!";
    }

    const valorEmDolar = valor / taxaConversao[moedaOrigem];
    const valorConvertido = valorEmDolar * taxaConversao[moedaDestino];

    return valorConvertido.toFixed(5);
}

function solicitarValor(mensagem) {
    while (true) {
        let valor = parseFloat(rl.question(mensagem));
        if (!isNaN(valor)) {
            return valor;
        } else {
            console.log("Por favor, insira um valor numérico válido.");
        }
    }
}

const valor = solicitarValor("Insira o valor a ser convertido: ");
const moedaOrigem = rl.question("Insira a moeda de origem (Won sul-coreano, Dirham marroquino, Dolar, Real): ");
const moedaDestino = rl.question("Insira a moeda de destino (Won sul-coreano, Dirham marroquino, Dolar, Real): ");

const valorConvertido = converterMoeda(valor, moedaOrigem, moedaDestino);
console.log(`O valor convertido é: ${valorConvertido} ${moedaDestino}`);