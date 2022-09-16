    const idadeMinima = 18;
    const idadeCliente = 16;

    if(idadeCliente >= 18) {
        console.log("Cerveja");
    } else {
        console.log("Suco");
    }

    // Funcionamento do ternário

    const nome = "Leo";
    const idade = 23;
    const bebidaMaior = "Cerveja";
    const bebidaMenor = "Suco";

    const podeBeber = idade >= idadeMinima ? true : false;


    console.log(podeBeber ? `As opções são: ${bebidaMaior} e ${bebidaMenor}` : `A opção disponível é: ${bebidaMenor}`);