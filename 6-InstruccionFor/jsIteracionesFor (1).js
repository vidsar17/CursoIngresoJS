function mostrar()
{ //al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10.
    var numero;
    numero = 10;

    for (let index = 1; index <= numero; index++) {
        console.log("El número es: ", index);          
        document.write("<p> Número: ", index + "</p>");
    }   
}