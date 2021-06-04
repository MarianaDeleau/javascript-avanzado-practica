//Ejercicio 1: Obtener menor
//Definí una función obtenerMenor que tome por parámetro un array de números numeros y devuelva el menor de ellos.

// const obtenerMenor = (numeros) =>{
//    let min = Infinity;
//   //no hay numero más grande
//   for (let i=0; i<numeros.length; i++){
//     // 7 >= 5
   
//     if(numeros[i]<=min){
//       min = numeros[i];
      
//     } 
    
//   };
// console.log(min);
// }
//  obtenerMenor(5, 7, 99, 34, 54, 2, 12)

//Ejercicio 2: Sumar
//Definí una función sumar que reciba como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:
// const sumar = (numeros) => {
//   let final = "";
//   for (let i=0; i<numeros.length; i++){
//      final= parseInt(final + numeros[i]);
//   }
//   console.log(final);
// }

//  sumar([5, 7, 10, 12, 24])


//Ejercicio 3: Contiene
//Definí una función contiene que reciba como argumentos un número numero y un array de números numeros y devuelva si el número se encuentra en dicho array.
// const contiene = (numero, numeros)=>{
//   for (let i=0; i<numeros.length; i++){
//     if (numeros[i] === numero){
//       console.log(true)
//   } 
//   console.log(false)
//   }  
// }

// //contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])
// contiene(54, [5, 7, 99, 3, 4, 54, 2, 12])

//Ejercicio 4: Invertir caso
//Definí una función invertirCaso que tome por parámetro un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

// const invertirCaso = (string) => {
//   const cadena = string.split("");
//   let nuevaCadena= "";  
 
//   for(let i=0;i<cadena.length;i++){                  
//     if(cadena[i]===cadena[i].toUpperCase())
//             {            
//               nuevaCadena=nuevaCadena+cadena[i].toLowerCase();
//             } else{                
//               nuevaCadena=nuevaCadena+cadena[i].toUpperCase();}
//         }
// alert(nuevaCadena)
// }

// invertirCaso('Ada Lovelace') 
// invertirCaso('feliz cumple') 
// invertirCaso('jAvAsCrIpT')

//Ejercicio 5: Ganó
//Definí una función gano que reciba como argumento un array tragamonedas  con 5 símbolos y nos indique si son iguales. Si el array tiene más de 5 símbolos, sólo debe comparar los 5 primeros.

// const gano = (array) => {
  
//   const tragamonedas = array.slice(0,5);
    
//     for(let i=0; i<array.length; i++){   
//   if(tragamonedas[0]===tragamonedas[1] && tragamonedas[1]===tragamonedas[2] && tragamonedas[2]===tragamonedas[3] && tragamonedas[3]===tragamonedas[4]){
//       console.log(true)
//   } else{
//     console.log(false)
//   }
// };
//   }
//   gano(['⭐', '⭐️', '⭐️', '💫', '✨']);
//   //gano(['💫', '💫', '💫', '💫', '💫', '⭐️'])
//  // gano(['💫', '💫', '💫', '💫', '💫']) 

//Ejercicio 6: Están juntos
//Definí una función estanJuntos que reciba como argumento un array de strings personajes, y devuelva si Sam se encuentra al lado de Frodo, puede encontrarse antes o después.


// const estanJuntos = (array) =>{
  
//   const frodo = array.indexOf('Frodo');
//   const sam = array.indexOf('Sam');
//  if(frodo-sam===1 || frodo-sam=== -1){
//    alert(true)
//   } else {
//     alert(false)
//   }
//  };
 
// //estanJuntos(['Sam', 'Frodo', 'Legolas']) 

// //estanJuntos(['Aragorn', 'Frodo', 'Sam']) 

// estanJuntos(['Sam', 'Orco', 'Frodo']) 


//Ejercicio 7: Separar
//Definí una función separar que tome por parámetro un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro.

// const separar = (string) => {
  
//   const emojis=string.sort().reverse();
//  return emojis;
  
// };

// separar('🐶🐱🐶🐱🐱🐶🐶')

//Ejercicio 8: Obtener chat status
//Definí una función obtenerChatStatus que reciba como argumento un array de strings usuarias y devuelva un string con el status del chat. Las reglas son:

// Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
// Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
// Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas

// const obtenerChatStatus =(usuarias) => {
     
//   for(let i=0; i<usuarias.length; i++){
  
//   if (usuarias.length === 1) {
//     alert(`${usuarias} está conectada`);
//    } else if (usuarias.length === 2) {
//      alert(`${usuarias[0]} y ${usuarias[1]} están conectadas`);
     
//    } else if (usuarias.length > 2) {
     
//      alert(`${usuarias[0]}, ${usuarias[1]} y 1 persona(s) más están conectadas`)
     
//    }
//   }
// }

// obtenerChatStatus(['Ada'])
// obtenerChatStatus(['Ada', 'Grace'])
// obtenerChatStatus(['Ada', 'Grace', 'Marie'])


//Ejercicio 9: Germinar
// Definí una función germinar que tome por parámetro un string de plantines con flores y plantines (🌱). El array debe comenzar con una flor. La función debe devolver un string con los plantines convertidos en flores. El plantín se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:


//VERSION REEMPLAZA PLANTIN POR UNA MISMA FLOR DETERMINADA
// const germinar = (string) => {
   
  
//     console.log(string.replace(/🌱/g, "🌸"))
                          
//   }
  
//   germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱')
  
// //VERSION SIMILAR INVERTIR CASO

// const germinar = (vivero) => {
//   //const plantines = string.split(" ");
//   const plantin = "🌱";
//   let plantaAnterior= "";
//   let nuevosPlantines="";

//   for(const string of vivero){       
//       if(string !== plantin){
//           plantaAnterior=string;
//           nuevosPlantines=nuevosPlantines+string;
//       } else {
//           nuevosPlantines=nuevosPlantines+plantaAnterior;
//       }


//   }
//  console.log(nuevosPlantines);
// }
// germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱')


//VERSION MATI
// const germinar = (cosecha) => {   
//   const SEMILLA =  "🌱"   
//   let plantaAnterior = "";   
//   let huerta = "";   
//   for(const planta of cosecha){     
//     // si no es un plantin guardo la planta     
//     if(planta !== SEMILLA){       
//       plantaAnterior = planta;       
//       huerta += planta;     
//     }else{       
//       huerta += plantaAnterior;     
//     }        
//   }   
//   console.log(huerta); 
// };

// germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱')


//Ejercicio 10: Comer
//Definí una función comer que reciba como argumento un string que consista en plantas, un conejo y una señal de prohibido. El conejo se come todas las plantas que hay a su derecha, hasta que se encuentra con la señal de prohibido. El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda del conejo (si hay) y a la derecha de la señal (si hay). Ejemplo:

// const comer = (string)=> {
//     //const lista = prompt('ingrese verdudas');
//     const verduras = string.split(" ");
//     const indiceConejo = verduras.indexOf("🐰");
//     const indiceProhibido = verduras.indexOf("🚫") + 1;
//     verduras.splice(indiceConejo, indiceProhibido-indiceConejo);
//     //console.log(verduras)
//     alert(verduras)
//   }
  
//    comer('🥕 🥬 🐰 🥕 🥕 🥕 🚫');

//Ejercicio 11: Multiplicar
//Definí una función multiplicar que reciba como argumentos un número multiplicador y un array de números numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:

// const multiplicar=(multiplicador, numeros) => {
    
//     for(let i=0; i<numeros.length; i++){
//       let nuevosNumeros=parseInt(multiplicador*numeros[i]);
//       console.log(nuevosNumeros)
//     }
    
//   }
//   multiplicar(2, [5, 7, 15, 22, 40])

  
//Ejercicio 12: Filtrar por longitud mayor a
//Definí una función filtrarPorLongitud que tome por parámetro un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud. Ejemplo:


// const filtrarPorLongitud = (numero, array) => {


//   let newArray=array.filter(array=> array.length > numero)

//     console.log(newArray);
  
// }

// filtrarPorLongitud(4,['dia','remolacha','azul','sorpresa','te','verde'])



//Ejercicio 13: Recortar

//Definí una función recortar que reciba como argumentos un número cantidadLetras y un array de strings palabras y devuelva un array con las mismas palabras pero recortadas. Las palabras se recortan dejando cantidadLetras letras al iniciando, y recortando las demás. Por ejemplo, elefante recortada a 4 letras queda elef.

// const recortar = (cantidadLetras, palabras) =>{
 
//   for(let i=0; i<palabras.length; i++){
    
//     let nuevasPalabras=palabras[i].slice(0,cantidadLetras);
//     console.log(nuevasPalabras);
    
//   }
// }

// recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america'])


// const recortar = (cantidadLetras, palabras) =>{
 
//   let nuevasPalabras=[];

//   for(let recortadas of palabras){
    
//     nuevasPalabras=nuevasPalabras + recortadas.slice(0,cantidadLetras);
    
    
//   }
//   console.log(nuevasPalabras);
// }

// recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america'])


// Ejercicio 15: Obtener resultado EN PROCESO
// Definí una función obtenerResultado que tome por parámetros dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de numeros puntajesA y puntajesB de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de puntajes, y sumar puntos a la jugadora correspondiente dependiendo de quien tenga el puntaje más alto. Por ejemplo:

// const puntajesA = [3, 5, 2]
// const puntajesB = [4, 6, 2]

// puntajesA[0] vs. puntajesB[0] -> Gana B
// puntajesA[1] vs. puntajesB[1] -> Gana B
// puntajesA[2] vs. puntajesB[2] -> Empate

// Resultado final: Gana Jugadora B


// const obtenerResultado = (jugadora1, jugadora2, puntajes1, puntajes2) =>{

//     let puntajeFinal1=0;
//     let puntajeFinal2=0;
//     let puntaje=[puntajes1, puntajes2]
    
    
//     for(let i=0; i<puntaje.length; i++){
//     if(puntajes1[i]<puntajes2[i]){
//         puntajeFinal2++;
//     } else if(puntajes1[i]>puntajes2[i]){
//         puntajeFinal1++;
//     } else{

//     }
// }
// }
// obtenerResultado('Ada', 'Grace', [4, 4, 4], [1, 2, 3])




// const obtenerResultado = (jugadoras, puntos) => {

//     let puntajesA=[];
//     let puntajesB=[];
//     const puntajes=[puntajesA, puntajesB];

//     for(let i=0; i<puntajes.length; i++){

//         let jugadoraAPuntos= 0 ;
//         let jugadoraBPuntos=0;

//         if(puntajesA[i]<puntajesB[i]){
//             jugadoraBPuntos++;
//          } else if (puntajesA[i]>puntajesB[i]){
//             jugadoraAPuntos++;
//          } else if (puntajesA[i]===puntajesB[i]){
//             jugadoraBPuntos=jugadoraBPuntos;
//             jugadoraAPuntos=jugadoraAPuntos;
//          }
// console.log(jugadoraAPuntos);
// console.log(jugadoraBPuntos);

//     }

//     }
//     obtenerResultado('Ada', 'Grace', [4, 4, 4], [1, 2, 3])


/*
**Piedra, papel, tijera III** VERSION MATI
- Crear un programa que permita ingresar el nombre de dos jugadoras y dos listas con los valores de la jugada en una ronda de "piedra, papel o tijera". Primero debe preguntarse el nombre de la jugadora 1, luego sus jugadas, luego el nombre de la jugadora 2, luego sus jugadas. El programa debe comparar los valores de las listas uno a uno (el primero con el primero, el segundo con el segundo) sumando un punto a la jugadora que gane la ronda. Al finalizar, mostrar quién gano y los puntajes finales. Ejemplo:
```javascript
// Ingrese nombre jugadora 1: Ada
// Ingrese jugadas de Ada: piedra papel papel piedra tijera
// Ingrese nombre jugadora 2: Grace
// Ingrese puntajes de Grace: papel piedra tijera tijera papel
// Resultado: 3 (Ada) vs 2 (Grace)
// Ganadora: Ada
```
1- definir variables:
    * Nombre de jugadora1(string)
    * jugadas 1 (array)
    * Nombre de jugadora2(string)
    * jugadas 2 (array) 
    * puntaje1(number)
    * puntaje2(number)
2- tengo recorrer cualquier array - pero tengo que tener cuidado de que tengan el mismo largo
3- hay comparalos con las reglas del piedra papel y tijera y sumar puntaje
4- Una vez de recorrer el array muestro resultados
*/

// const nombreJugadora1 = prompt("Ingrese el nombre de jugadora 1");
// const jugadasJugadora1 = prompt("Ingrese sus jugadas").split(" ");

// const nombreJugadora2 = prompt("Ingrese el nombre de jugadora 2");
// const jugadasJugadora2 = prompt("Ingrese sus jugadas").split(" ");


// let puntaje1 = 0;
// let puntaje2 = 0;

// const comprobarGanador = (jugadaJugador1, jugadaJugador2) => {
//   if (jugadaJugador1 == jugadaJugador2) {
//     return;
//   }
//   const ganoJugador1 =
//     (jugadaJugador1 == "piedra" && jugadaJugador2 == "tijera") ||
//     (jugadaJugador1 == "tijera" && jugadaJugador2 == "papel") ||
//     (jugadaJugador1 == "papel" && jugadaJugador2 == "piedra");

//   if (ganoJugador1) {
//     puntaje1++;
//   } else {
//     puntaje2++;
//   }
// };

// if (jugadasJugadora1.length == jugadasJugadora2.length) {
//   for (let i = 0; i < jugadasJugadora1.length; i++) {
//     comprobarGanador(jugadasJugadora1[i], jugadasJugadora2[i]);
//     alert(
//       `jugadas ${i + 1} ${nombreJugadora1}:${
//         jugadasJugadora1[i]
//       } ${nombreJugadora2}:${jugadasJugadora2[i]}`
//     );
//     alert(
//       `puntajes ${nombreJugadora1}:${puntaje1} ${nombreJugadora2}:${puntaje2}`
//     );
//   }
// } else {
//   alert("No tienen la misma cantidad de jugadas");
// }
