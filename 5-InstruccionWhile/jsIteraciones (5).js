function mostrar()
{    
    var sexo;

    sexo = prompt("ingrese f ó m .");

    while(sexo != "f" || sexo != "m")
    {
        
        if(sexo == "f" || sexo == "m")
        {
        console.log("Sexo ingresado: " + sexo);
        document.getElementById('Sexo').value = sexo;
        break;
        }

        sexo = prompt("El sexo ingresado debe ser m ó f");

    }

}//FIN DE LA FUNCIÓN