function mostrar()
{//Al ingresar una edad debemos informar solo si la persona es mayor de edad
    var edad;

    edad = document.getElementById("edad").value;

    if(edad >= 18)
    {
        alert("La persona es mayor de edad");
    }
    else
    {
        alert("La persona no es mayor de edad");
    }

}//FIN DE LA FUNCIÓN