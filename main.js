function circunferencia(){
   var a = 0;
   var r = 0;
       a = parseInt(prompt("Por favor ingrese el diametro: "));
   var r = 3.14 * a;
          alert ("El diametro del circulo es "+r);  
   }
   
function factorial() {
   var numero = prompt("Introduce un número y se mostrará su factorial");
   var resultado = 1;

   for (var i = 1; i <= numero; i++) {
      resultado *= i;
   }
   alert(resultado);
}

function octogono() {
   var a = 0;
   var r = 0;
   a = parseInt(prompt("Ingrese la medida de un lado del octogono :"));
   var r = a* 8;
   alert("El perimetro del octogono es " + r);
}

function tablas() {
   var t = 0;
   var r = 0;
   t = parseInt(prompt("Ingrese un numero para consultar su tabla: "));
   for (var i = 0; i <= 10; i++) {
      r = t * i;
      alert(t + " x " + i + " = " + r);
   }
}

function positivos(){
var suma = 0;
        var positivos = 0;
        var negativos = 0;
   var A = 0;
   A = parseInt(prompt("Escribe un número: "));
   for (var i = 0; i < 10; i++) {
      if (A >= 0)
         positivos++;
      else
         negativos--;
      suma = suma + A;
   }
   alert("La suma es: " + suma);
   alert("El número de positivos es: " + positivos);
   alert("El número de negativos es: " + negativos);
}

function nota() {
   var nota = 0;
   nota = parseInt(prompt("Introduce la nota: "));
   switch (nota) {
      case 5:
         alert("Suficiente");
         break; // break evita que se ejecuten los siguientes casos
      case 6:
         alert("Bien");
         break;
      case 7:
         alert("Notable bajo");
         break;
      case 8:
         alert("Notable alto");
         break;
      case 9:
         alert("Sobresaliente");
         break;
      case 10:
         alert("Matricula de honor");
         break;
      default:
         if (nota < 5) alert("Deficiente");
         else alert("Notaza");

   }
}


function conversion(){
   var gradosC = 0;
   var gradosF = 0;
   var r = 0;
   gradosC = parseInt(prompt("Introduce grados Centígrados:"));
   gradosF = 32 + (9 * gradosC / 5);
   alert(gradosC + " ºC = " + gradosF + " ºF");
}



function ventas() {
   var N = 0;
   var sumaVentas = 0;
   var precio = 0;
   N = parseInt(prompt("Introduce el número de ventas"));   
   for (var i = 0; i < N; i++) {
   precio = parseInt(prompt("Introduce el precio de la venta " + (i + 1)));
      sumaVentas = sumaVentas + precio;
   }
   alert("El total de las ventas fue "+ sumaVentas);
}

