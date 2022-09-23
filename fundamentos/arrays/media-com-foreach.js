    // Calcule a media das notas usando foreach

    const notas = [10, 6.5, 8, 7.5];

    let mediaFinal = 0;
    
    notas.forEach(nota => {
        mediaFinal += nota;

        if(nota === notas[notas.length - 1]) {
            mediaFinal = mediaFinal / notas.length;
        }
    })

    console.log(mediaFinal);