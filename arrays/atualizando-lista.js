    // Ana e Caio sairam da escola e Rodrigo entrou na escola, atualize a lista

    const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

    //O primeiro parâmetro é de qual índice vai começar a exclusão, incluindo ele mesmo, o segundo serve para indicar quantos items serão removidos do array e o terceiro é se algo vai ser adicionado a partir da posição do parâmetro inicial

    listaDeChamada.splice(1, 2, 'Rodrigo');

    // Caso queira adicionar um novo elemento sem apagar nenhum também é possível, basta informar o primeiro parâmetro e deixar o segundo parâmetro zerado como no exemplo abaixo:

    listaDeChamada.splice(3, 0, 'José'); //José será adicionado ao índice 3

    // Lembrando que no caso do método splice o Array original é alterado, diferente do método slice

    console.log(`Lista de chamada atualizada: ${listaDeChamada}`);