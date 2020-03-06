function mostrar()
{/* Ejercicio:
    Ingresar nombre, edad y pasaje('Urbano', 'Nacional', 'Internacional') y mostrar
    1 - cantidad de hombres con pasajes nacional*/

    var respuesta;
    var nombre;
    var edad;
    var pasaje;
    var sexo;
    var primeraVezHombreNacional = true;
    var primeraVezHombre = true;
    var edadMinimaHombreNacional = 0;
    var nombreMinimo;

  do{
      //valida nombre
      do{
    
        nombre = prompt("Ingrese el nombre de la persona");

      }while(nombre == null || nombre =="");
      console.log("nombre: " + nombre);

      //valida edad
      do{

        edad = prompt("Ingrese edad mayor a 18");

      }while(isNaN(edad) || edad < 18);
      console.log("La edad: " + edad);

      //valida sexo
      do{

        sexo = prompt("Ingrese el sexo de la persona: \n 'F'(Femenino), 'M'(Masculino)").toLowerCase();
      
      }while(sexo != "f" && sexo != "m");
      console.log("sexo: " + sexo); 

      //valida pasaje
      do{

        pasaje = prompt("Indique el tipo de pasaje: \n 'Urbano', 'Nacional', 'Internacional'").toLowerCase();


      }while(pasaje != 'urbano' && pasaje != 'nacional' && pasaje != 'internacional');
      console.log("El pasaje: " + pasaje);

      //calculos
      if(sexo == "m" && sexo == "Nacional")
      {
          if(primeraVezHombreNacional)
          {
            primeraVezHombre = false;
            edadMinimaHombreNacional = edad;
            nombreMinimo = nombre;
          }else if(edad < edadMinimaHombreNacional)
          {
              edadMinimaHombreNacional = edad;
              nombreMinimo = nombre;
          }
        }
        console.log("1ra vez edad min: " + edadMinimaHombreNacional);
        
    
  }while(respuesta = confirm("Desea continuar?"));

        console.log("1ra vez edad min: " + edadMinimaHombreNacional);
        console.log("1ra vez nombre min: " + nombreMinimo);
}
