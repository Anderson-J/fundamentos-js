    const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
    const mediaDosAlunos = [10, 7, 9, 6];

    const listaDeNotasEAlunos = [alunos, mediaDosAlunos];

    // includes -> sempre retorna um boolean
    // indexOf -> retorna um número

    const exibeNomeENota = (nomeDoAluno) => {
        if(listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
            const indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
            return listaDeNotasEAlunos[0][indice] + ', a sua média é: ' + listaDeNotasEAlunos[1][indice];
        } else {
            return `O aluno não está cadastrado nessa lista`;
        }
    }

    console.log(exibeNomeENota('Ana'));

    console.log(exibeNomeENota('José'));