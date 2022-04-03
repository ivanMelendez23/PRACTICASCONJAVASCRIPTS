
        let marca,modelo,descuento=0;

        marca=wndow.prompt("Marca?","0");
        modelo =window.prompt("Modelo?","0");

        if((marca =="ford")&&(modelo=="fiesta"))
        {
            descuento=5;
        }
        if((marca =="ford") && (modelo =="focus"))
        {
            descuento=10;
        }
        document.write(`<h3>Su descuento es ${descuento}</h3>`);
