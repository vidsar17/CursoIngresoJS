
function mostrar()
{/*                                            Enunciado
    
    Realizar la carga de 5 productos de prevención de contagio de cada uno se deben obtener los siguientes datos:
    el tipo (validar 'barbijo', 'jabón', o 'alcohol'), 
    el precio validar entre 100 y 300, 
    la cantidad de unidades (no puede se 0 o negativo y no debe superar las 1000 unidades), 
    la marca y el fabricante. 
    Se debe informar al usuario lo siguiente:
    a) Del mas caro de los barbijos, la cantidad de unidades y el fabricante
    b) Del item con más unidades, el fabricante
    C) Cuaáns unidades de jabones hay en total */

    var productos;
    var precio;
    var cantidad;
    var numProductos = 2;
    var marca;
    var fabricante;
    var flag = true;

    for(let i = 0; i < numProductos; i++)
    {

        do{ //validación productos
            productos = prompt("Ingrese producto: \n - barbijo \n - jabón \n - alcohol");

        }while(productos != "barbijo" && productos != "jabón" && productos != "alcohol");

        do{//validación precio
            precio = parseFloat(prompt("Ingrese precio de " + productos));

        }while(isNaN(precio) || precio < 100 || precio > 300);

        do{//validación cantidad
            cantidad = parseInt(prompt("Ingrese la cantidad de " + productos +" entre 1 a 100 "));

        }while(cantidad <= 0 || isNaN(cantidad) || cantidad > 1000);

        do{//validación marca
            marca = prompt("Ingrese la marca del " + productos);
            
        }while(marca == "" || ); //isNaN(marca));

        do{//validación fabricante
            fabricante = prompt("Ingrese la fabricante del " + productos);
            
        }while(fabricante == "" ); //|| isNaN(fabricante));


        

        //a) Del mas caro de los barbijos, la cantidad de unidades y el fabricante           
            if(productos == "barbijo" && cantidad )
            {

            }


        console.log(productos);
        console.log(precio);
        console.log(cantidad);
        console.log(marca);



    }
}
