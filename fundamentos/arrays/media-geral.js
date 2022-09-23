const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

const nomes = ['Ana', 'Juliana', 'Leo', 'Paula', 'Lara', 'Marjorie'];

function calculaMedia(arrayDeNotas) {
    const somaDasNotas = arrayDeNotas.reduce((acumulador, valorAtual) => acumulador + valorAtual);
    const mediaFinal = somaDasNotas / arrayDeNotas.length;
    return mediaFinal;
}

console.log(calculaMedia(salaJS));
console.log(calculaMedia(salaJava));
console.log(calculaMedia(salaPython));

const notas = [10, 6.5, 8, 7.5];

const somatorioDasNotas = notas.reduce((acum, valorAtual) => valorAtual + acum, 0)

const mediaDasNotas = somatorioDasNotas / notas.length;

console.log(mediaDasNotas);