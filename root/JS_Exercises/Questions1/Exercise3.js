const readline = require('readline-sync');

class Aluno {
    constructor(nome, idade, notas) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    }

    calcularMedia() {
        let soma = 0;
        for (const nota of this.notas) {
            soma += nota;
        }
        return soma / this.notas.length;
    }
}

function cadastrarAluno() {
    const nome = readline.question('Digite o nome do aluno: ');
    const idade = parseInt(readline.question('Digite a idade do aluno: '));
    const notas = [];
    for (let i = 1; i <= 3; i++) {
        let nota = parseFloat(readline.question(`Digite a nota ${i} do aluno: `));
        while (nota < 0 || nota > 10) {
            nota = parseFloat(readline.question('Nota invalida! Digite a nota novamente: '));
        }
        notas.push(nota);
    }

    const aluno = new Aluno(nome, idade, notas);
    return aluno;
}

function exibirMediaAlunos(alunos) {
    if (alunos.length === 0) {
        console.log('Nenhum aluno cadastrado!');
        return;
    }

    console.log('Média das notas dos alunos:');
    for (const aluno of alunos) {
        const media = aluno.calcularMedia();
        console.log(`- ${aluno.nome}: ${media.toFixed(2)}`);
    }
}

let alunos = [];

alunos.push(cadastrarAluno());
alunos.push(cadastrarAluno());

exibirMediaAlunos(alunos);