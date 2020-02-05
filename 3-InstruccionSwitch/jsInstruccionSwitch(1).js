function mostrar()
{/* al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!. */
    var mesDelAño;

    mesDelAño = document.getElementById("mes").value;

    switch(mesDelAño)
    {
        case "Enero": 
            alert("que comiences bien el año!!!.");
        break;

        case "Febrero": 
            alert();
        break;

        case "Marzo": 
            alert("a clases!!!.");
        break;

        case "Abril": 
            alert();
        break;

        case "Mayo": 
            alert();
        break;

        case "Junio": 
            alert();
        break;

        case "Julio": 
            alert("se vienen las vacaciones!!!.");
        break;

        case "Agosto": 
            alert();
        break;

        case "Septiembre": 
            alert();
        break;

        case "Octubre": 
            alert();
        break;

        case "Noviembre": 
            alert();
        break;

        case "Diciembre": 
            alert("Felices fiesta!!!");
        break;
    }


}//FIN DE LA FUNCIÓN