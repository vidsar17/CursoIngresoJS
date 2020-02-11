function mostrar()
{/*Al ingresar una edad debemos informar si la persona 
    es mayor de edad (mas de 18 años) o 
    adolescente (entre 13 y 17 años) o 
    niño (menor a 13 años)*/
    var edad;

    edad = document.getElementById("edad").value;

    if(edad > 12)
    {
        if(edad > 18)
        {
            alert("Es mayor");
        }
        else
        {
            alert("Es adolente");
        }
    }
    else
    {
        alert("Es menor");
    }
        
    

    // if(edad >= 18)
    // {
    //     alert("La persona es mayor de edad");
    // }
    // else if(edad >= 13 && edad <= 17)
    // {
    //     alert("La persona es adolencente");
    // }
    // else if(edad < 13)
    // {
    //     alert("La persona es niño");
    // }

}//FIN DE LA FUNCIÓN