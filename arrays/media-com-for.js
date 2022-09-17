    // Calcule a media das notas usando for

    const notas = [10, 6.5, 8, 7.5];

    let mediaFinal = 0;

    for(let i = 0; i < notas.length; i++) {
        mediaFinal += notas[i];
        
        if(i === notas.length -1) {
            mediaFinal = mediaFinal / notas.length;
        }
    }

    console.log(mediaFinal);