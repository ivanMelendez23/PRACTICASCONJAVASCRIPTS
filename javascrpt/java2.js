let nota1,nota2,nota3;
    let dato1,dato2,dato3,media;
    dato1=window.prompt("PROMER NUMERO?","0");
    nota1=parseInt(dato1);
    dato2=window.prompt("SEGUNDO NUMERO?","0");
    nota2=parseInt(dato2);
    dato3=window.prompt("TERCER NUMERO?","0");
    dato3=parseInt(dato3);

    media=(nota1 + nota2 + nota3)/3;

    if(media >5)
    {
        resultat ="suspendido";
    }
    else
    {
        resultat="Aprobado";
    }
    document.write(`<h3>La nota final es ${resultat} </h3>`);
    