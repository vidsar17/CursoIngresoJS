function mostrar()
{/**                        Enunciado
    
Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para preparar comida al por mayor,
hasta que el cliente quiera:
- peso entre 10 y 1000 en kilo
- precio por kilo más de cero(0)
- tipo vialidad ('v'(vegetal), 'a'(animal), 'm'(mezcla))
- si compró más de 100 kilos tiene un 15% de descuento del total de la compra
- si compró mas de 300 kilos tiene un 25% de descuento dle total de la compra
a) el importe a total a pagar bruto sin descuento
b) el importe a pagar con descuento solo si corresponde
c) informar el tipo de alimento más caro
d) el promedio de precio por kilo  */

var peso;
var precio;
var tipoVialidad;
var descuento1 = 0.15;
var descuento2 = 0.25;
var totalPagar;
var totalPagarConDescuento;
var promedioPesoPorKilo = 0;
var contadorPeso = 0;
var acumuladorPeso = 0;
var respuesta;
var flag = true;
var alimentoCaro;
var precioCaro;

do{
    //validar peso
    do{
    peso = parseFloat(prompt("Ingrese el peso del producto entre 10 y 1000"));
    }while(isNaN(peso) || peso == "" || peso < 10 || peso > 1000);
        acumuladorPeso += peso;
        contadorPeso++;
    console.log("peso: " + peso);

    //precio por kilo
    do{
        precio = parseFloat(prompt("Ingrese el precio de los " + peso + " kilos"));
    }while(isNaN(precio) || precio == '' || precio < 0);
    console.log("precio: " + precio);

    //vialidad
    do{
        tipoVialidad = prompt("Ingrese vialidad: \n - 'v'(vegetal), \n - 'a'(animal), \n - 'm'(mezcla)").toLowerCase();
    }while(tipoVialidad != "v" && tipoVialidad != "a" && tipoVialidad != "m");
    console.log("vialidad: " + tipoVialidad);

    totalPagar = peso * precio;
    totalPagar = parseFloat(totalPagar);

    //validación descuento
    if(peso >= 100 && peso < 300)
    {
        totalPagarConDescuento = totalPagar - (totalPagar * descuento1);
        totalPagarConDescuento = parseFloat(totalPagarConDescuento);
    }else if(peso >= 300 && peso <= 1000)
    {
        totalPagarConDescuento = totalPagar - (totalPagar * descuento2);
        totalPagarConDescuento = parseFloat(totalPagarConDescuento);
    }
    console.log("Total pagar con descuento es: $" + totalPagarConDescuento);
   
     //b) el importe a pagar con descuento solo si corresponde
    document.write("total pagar con descuento es: $" + totalPagarConDescuento + "<br>");

     ////a) el importe a total a pagar bruto sin descuento
     document.write("El importe a pagar bruto sin descuento es de: $" + totalPagar + "<br>")

    //c) informar el tipo de alimento más caro
    if(flag)
        {
            flag = false;
            alimentoCaro = tipoVialidad;
            precioCaro = precio;
        }
        else if(precio > precioCaro)
        {
                alimentoCaro = tipoVialidad;
                precioCaro= precio;
        }        
        
    console.log("El producto más caro es: " + alimentoCaro + ", y el precio es de: $" + precioCaro);    

        
}while(respuesta = confirm("Desea ingresar más productos?"));

    document.write("El alimento más caro es: " + alimentoCaro + ", y el precio es de: $" + precioCaro + "<br>");

    promedioPesoPorKilo = acumuladorPeso / contadorPeso;
    promedioPesoPorKilo = parseFloat(promedioPesoPorKilo);
    document.write("El promedio de peso por kilo es : " + promedioPesoPorKilo + "<br>");   

}
