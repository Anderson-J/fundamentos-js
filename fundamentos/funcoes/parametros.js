    // Declaração de função:

    function soma(num1, num2) {
        const resultado = num1 + num2;
        return resultado;
    }

    console.log(soma(2, 3));

    function nomeIdade(nome, idade) {
        const novoNome = String(nome);
        const novaIdade = Number(idade);
        return console.log(`Meu nome é ${novoNome} e minha idade é ${novaIdade} ano(s)`);
    }

    nomeIdade('Anderson', 32);

    function multiplica(num1, num2) {
        const resultado = num1 * num2;
        return resultado;
    }

    // Importante salientar que a ordem dos argumentos é respeitada conforme o exemplo abaixo:
    function divide(dividendo, divisor) {
        return dividendo / divisor;
    }

    console.log(soma(multiplica(2, 7), divide(12, 4)));

    // Declarando funções com parâmetros padrão:

    function exponencia(base, expoente = 1) {
        return base ** expoente;
    }

    // Expressão de função:
    const constSoma = function(num1, num2) {return num1 + num2;}

    console.log(constSoma(1, 2));

    // A diferença principal entre expressão de função e declaração de função é que na declaração de função ela é listada para o topo do código "hoisted" diferente da expressão de função, conforme o exemplo abaixo:
    
    console.log(saudacao());

    function saudacao() {
        return "Bom dia!";
    }

    console.log(bomDia());

    const bomDia = function() {return "Bom dia!";} // Erro de declaração