    // Existem 3 formas de imprimir funções no Js
    
    function imprimeTexto(texto) {
        console.log(texto);
    }

    imprimeTexto("Oi!");
    imprimeTexto("Bom Dia!");

    function soma() {
        // É obrigatório que a palavra "Return seja o último statement"
        return 2 + 2;
    }

    console.log(soma());

    imprimeTexto(soma());