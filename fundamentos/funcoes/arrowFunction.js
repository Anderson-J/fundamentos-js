    // Declaração de função comum
    function apresentarNome() {
        return `Meu nome é: ${nome}`;
    }
    
    // Formas de declarar arrow function:
    
    // Com um argumento e um statement:
    const apresentarArrow = nome => `Meu nome é: ${nome}`;

    // Com mais de um argumento e um statement:
    const soma = (num1, num2) => num1 + num2;

    // Com mais de um argumento e mais de um statement:

    const verificaIdades = (idade1, idade2) => {
        if(idade1 >= 18 && idade2 >= 18) {
            return `Já podem casar`;
        } else {
            return `Os dois precisam ter 18 anos para se casar`;
        }
    }

    // Sem nenhum argumento:

    const exibeMensagemDeAcerto = () => `Você acertou`;

    // Quanto ao "hoisting" a arrow function se comporta da mesma maneira que expressões de função