function mostrar()
{/* Ejercicio:
    Ingresar nombre, edad y pasaje('Urbano', 'Nacional', 'Internacional') y mostrar
    a) nombre del hombre con pasaje nacional más joven
    b) el sexo y pasaje del pasajero más viejo
    c) cantidad de mujeres con pasaje urbano o nacional
    d) promedio edad de la mujeres
    e) promedio de hombre con pasaje nacional
    */

    var respuesta;
    var nombre;
    var edad;
    var pasaje;
    var sexo;
    var primeraVezHombreNacional = true;
    var edadMinimaHombreNacional = 0;
    var nombreMinimoNacional;
    var pasajeMaximo;
    var sexoMaximo;
    var primeraVezMaximo = true;
    var edadMaxima;
    var cantidadMujeresUrbanoONacional = 0;
    var acumuladorMujeres = 0;
    var contadorMujeres = 0;
    var acumuladorHombresNacional = 0;
    var contadorHombresPasajeNacional = 0;
    var promedioHombres;
    var promedioMujeres;

  do{
      //valida nombre
      do{    
        nombre = prompt("Ingrese el nombre de la persona");
      }while(nombre == null || nombre == "");
      console.log("nombre: " + nombre);

      //valida edad
      do{
        edad = parseInt(prompt("Ingrese edad mayor a 18 de " + nombre));
      }while(isNaN(edad) || edad < 18);
      console.log("La edad: " + edad);

      //valida sexo
      do{
        sexo = prompt("Ingrese el sexo de: " + nombre +": \n 'F'(Femenino), 'M'(Masculino)").toLowerCase();
      }while(sexo != "f" && sexo != "m");
      console.log("sexo: " + sexo); 

      do{
        pasaje = prompt("Indique el tipo de pasaje: \n - 'Urbano', \n - 'Nacional', \n - 'Internacional'").toLowerCase();
      }while(pasaje != 'urbano' && pasaje != 'nacional' && pasaje != 'internacional');
      console.log("El pasaje: " + pasaje);

      // //a) nombre del hombre con pasaje nacional mas joven
      if(sexo == "m" && pasaje == "Nacional")
      {
        primeraVezHombreNacional = true;
          if(primeraVezHombreNacional = false)
          {
            edadMinimaHombreNacional = edad;
            nombreMinimoNacional = nombre;
          }else if(edad < edadMinimaHombreNacional)
          {
              edadMinimaHombreNacional = edad;
              nombreMinimoNacional = nombre;
          }
        }           

        // b) el sexo y pasaje del pasajero más viejo
        if(primeraVezMaximo)
        {
          if(primeraVezMaximo = false)
          {
            edadMaxima = edad;
            pasajeMaximo = pasaje;
            sexoMaximo = sexo;
          }
          else if(edad > edadMaxima)
          {
            edadMaxima = edad;
            pasajeMaximo = pasaje;
            sexoMaximo = sexo;
          }
        }
    
       // c) cantidad de mujeres con pasaje urbano o nacional
        if(sexo == 'f' && (pasaje == 'Urbano' || pasaje == 'Nacional'))
        {
          cantidadMujeresUrbanoONacional++;
        }

        //d) promedio edad de la mujeres
        if(sexo == 'f')
        {
          acumuladorMujeres += edad;
          contadorMujeres++;         
        }

        //e) promedio de hombre con pasaje nacional
        if(sexo == 'h' && pasaje == 'nacional')
        {
          acumuladorHombresNacional += edad;
          contadorHombresPasajeNacional++;
        }

  }while(respuesta = confirm("Desea continuar?"));

      if(contadorMujeres > 0)
      {
        promedioMujeres = acumuladorMujeres / contadorMujeres;
      }
      else
      {
        promedioMujeres = 0;
      }

      if(contadorHombresPasajeNacional > 0)
      {
        promedioHombres = acumuladorHombresNacional / contadorHombresPasajeNacional;
      }
      else
      {
        promedioHombres = 0;
      }

      document.write("Nombre del hombre con pasaje nacional más joven es: "+ nombreMinimoNacional + "<br>");
      document.write("El sexo " + sexoMaximo +" tiene el pasaje más viejo y es "+ pasajeMaximo + "<br>");
      document.write("cantidad de mujeres con pasaje urbano o nacional " + cantidadMujeresUrbanoONacional + "<br>");
      document.write("promedio edad de la mujeres "+ promedioMujeres + "<br>");
      document.write("promedio edad de la hombres con pasaje nacional es "+ promedioHombres + "<br>");
    }