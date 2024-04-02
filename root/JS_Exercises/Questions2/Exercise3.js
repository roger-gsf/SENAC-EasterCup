const readline = require('readline-sync');

class CalculadoraArea {
    calcularAreaCirculo(raio) {
        return Math.PI * raio * raio;
    }

    calcularAreaTriangulo(base, altura) {
        return (base * altura) / 2;
    }

    calcularAreaQuadrado(lado) {
        return lado * lado;
    }
}

const calculadora = new CalculadoraArea();

function calcularArea() {
    const forma = readline.question("Escolha a forma geometrica (circulo, triangulo, quadrado): ").toLowerCase();

    let area;

    switch (forma) {
        case 'circulo':
            const raioCirculo = parseFloat(readline.question("Digite o raio do circulo: "));
            area = calculadora.calcularAreaCirculo(raioCirculo);
            break;
        case 'triangulo':
            const baseTriangulo = parseFloat(readline.question("Digite a base do triangulo: "));
            const alturaTriangulo = parseFloat(readline.question("Digite a altura do triangulo: "));
            area = calculadora.calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
            break;
        case 'quadrado':
            const ladoQuadrado = parseFloat(readline.question("Digite o lado do quadrado: "));
            area = calculadora.calcularAreaQuadrado(ladoQuadrado);
            break;
        default:
            console.log("Forma geometrica invalida.");
            return;
    }

    console.log(`A area do ${forma} eh: ${area.toFixed(2)}`);
}

calcularArea();