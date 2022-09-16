    const texto0 = "Olá";
    const texto1 = 'mundo';

    const senha = "senhaSuperSegura123456!";

    const stringDeNumeros = "123456";

    const citacao0 = 'O Léo disse "oi"';

    const citacao1 = "Meu nome é: ";

    const meuNome = "Anderson";
    console.log(citacao0);

    // Concatenação
    console.log(citacao1 + meuNome);

    // Testando caracteres unicode

    const cifrao = '\u0024';
    const aMaiusculo = '\u0041';
    const tique = '\u2705';
    const hiragana = '\u3041';

    console.log(cifrao + ' ' + aMaiusculo + ' ' + tique + ' ' + hiragana);

    // Os caracteres \u no início do código são caracteres de escape que usamos para sinalizar ao JavaScript de que estamos falando de códigos Unicode, e não de strings de texto usuais.

    // O JavaScript usa, por padrão, o UTF-16. O número 16 está relacionado aos espaços em bits ocupados por cada catactere, 16 nesse caso.

    // Outra forma de escrever strings no javascript é o, Template String ou Template Literal.

    // Tratamento de strings para comparação, exemplo:

    const cidade = "belo horizonte";

    const input = "Belo Horizonte";

    console.log(cidade === input);

    const inputMinusculo = input.toLowerCase();

    console.log(cidade === inputMinusculo);

    // Como contar o tamanho de uma string:

    console.log(senha.length);

    // Outra forma de escrever senha.length com notação de colchetes

    console.log(senha["length"]);