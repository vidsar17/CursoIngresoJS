function mostrar()
{//Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
    var edad;

    edad = document.getElementById("edad").value;

    if(edad >= 13 && edad <= 17)
    {
        alert("La persona es adolencente");
    }

}//FIN DE LA FUNCIÓN