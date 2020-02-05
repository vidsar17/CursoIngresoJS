function mostrar()
{//Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad 
    var edad;

    edad = document.getElementById("edad").value;

    if(edad >= 18)
    {
        alert("La persona es mayor de edad");
    }
    else
    {
        alert("La persona es menor de edad");
    }


}//FIN DE LA FUNCIÓN