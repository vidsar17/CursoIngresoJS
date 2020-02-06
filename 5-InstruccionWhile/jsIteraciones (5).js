function mostrar()
{
var sexo;

    sexo = prompt("ingrese f ó m .");

    while(sexo == "f" || sexo == "m")
    {
        console.log("Sexo ingresado: " + sexo);
        document.getElementById('Sexo').value = sexo;
    }

}//FIN DE LA FUNCIÓN