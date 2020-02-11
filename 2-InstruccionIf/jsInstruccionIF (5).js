function mostrar()
{//Al ingresar una edad solo debemos informar si la persona NO es adolescente.
    var edad;

    edad = document.getElementById("edad").value;

    if(edad < 13 || edad > 17)
    {
        alert("La persona NO es adolecente");
    }

}//FIN DE LA FUNCIÓN