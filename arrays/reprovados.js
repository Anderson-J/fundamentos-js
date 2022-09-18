const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];

const notas = [7, 4.5, 8, 7.5];

const aprovados = alunos.filter((_, indice) => notas[indice] > 5);
const reprovados = alunos.filter((_, indice) => notas[indice] < 5);

console.log(`Aprovados: ${aprovados}`);
console.log(`Reprovados: ${reprovados}`);
