    // Variáveis podem ser declaradas de três maneiras, utilizando as palavras chave reservadas: "var", "let" e "cosnt"

    // Declaração com "var":

    var minhaVariavel = "Variável de texto";

    // Variaveis declaradas sem a "categoria precedente" são do tipo var, ex:

    minhaNovaVariavel = "Nova variável de texto";
    minhaOutraNovaVariavel;

    console.log(minhaVariavel + ' utilizando o "var"');
    console.log(minhaNovaVariavel + ' com declaração direta');
    console.log(minhaOutraNovaVariavel + ' com declaração de var após inicialização e utilização antes de ser declarada');
    
    var minhaOutraNovaVariavel = "Outra variável de texto";

    console.log(minhaOutraNovaVariavel + ' com atribuição usando var após utilização');

    // O escopo de atuação desse tipo de variável "var" é maior que o das outras duas, além disso devido as características apresentadas não é indicado para uso no dia a dia por questões de boas práticas pois podem ocorrer "Bugs"

    
    // Declaração com "let":

    let umaVariavel = "!";
    let umaOutraVariavel;

    console.log(umaOutraVariavel + umaVariavel);

    umaOutraVariavel = "?";

    console.log(umaOutraVariavel);

    // Escopo reduzido ao escopo local de declaração, além disso é possível declarar sem inicializar, mas deve ser declarada ainda que não inicializada antes de sua utilização obrigatóriamente. Podem ser atribuidos valores mutáveis


    // Declaração com "const":

    const variavelConstante = "Valor constante";

    console.log(variavelConstante);
    
    // Caso especial com "const":

    const arrayConstante = []; // nesse caso é possível colocar outros itens dentro do array, "modificando" a variável "const"

    // Variáveis do tipo "const" não trocam de valor, possuem um valor constante, porém quando declaramos uma variável do tipo "const" como um tipo array o Js por ser dinamico "prevê" um espaço de array na memória e um array pode ser preenchido da forma que for necessária, devido a isso mesmo que uma variável do tipo "const" seja declarada quando se trata de array, o valores dentro dele podem ou não ser mutáveis