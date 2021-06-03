//Ejercicio 9: Germinar
// Definí una función germinar que tome por parámetro un string de plantines con flores y plantines (🌱). El array debe comenzar con una flor. La función debe devolver un string con los plantines convertidos en flores. El plantín se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:

//VERSION REEMPLAZA POR UNA MISMA FLOR DETERMINADA DE A UNA POR VEZ
// const germinar = (string) => {
//     const plantines = string.split(" ");
//     const plantin="🌱"
//     for(let i=0;i<plantines.length;i++){
//         if (plantines[i]===plantin){
//        plantines[i] = plantines[i].replaceAll(plantin, "🌸");
//         } else {

//         }
//         console.log(plantines);
//     }
// }
// germinar('🌷 🌱 🌻 🌱 🌸 🌱 🌷 🌱 🌻 🌱 🌸 🌱')



//VERSION REEMPLAZA TODO POR UNA MISMA FLOR DETERMINADA
// const germinar = (string) => {
   
  
//     console.log(string.replace(/🌱/g, "🌸"))
                          
//   }
  
//   germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱')
  


//VERSION SIMILAR INVERTIR CASO
// const germinar = (string) => {
//     const plantines = string.split(" ");
//     const plantin = "🌱"
//     let nuevosPlantines="";

//     for(let i=0;i<plantines.length;i++){       
//         if(plantines[i]===plantin){
//             nuevosPlantines=nuevosPlantines+plantines[i].replace(plantin, "🌷");
//         } else {
//             nuevosPlantines=nuevosPlantines+plantines[i];
//         }
//     }
//     console.log(nuevosPlantines);
// }

// germinar('🌷 🌱 🌻 🌱 🌸 🌱 🌷 🌱 🌻 🌱 🌸 🌱')



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
//     alert(nuevasPalabras);
    
//   }
  
// }

// recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america'])


// Ejercicio 15: Obtener resultado
// Definí una función obtenerResultado que tome por parámetros dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de numeros puntajesA y puntajesB de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de puntajes, y sumar puntos a la jugadora correspondiente dependiendo de quien tenga el puntaje más alto. Por ejemplo:

// const puntajesA = [3, 5, 2]
// const puntajesB = [4, 6, 2]

// puntajesA[0] vs. puntajesB[0] -> Gana B
// puntajesA[1] vs. puntajesB[1] -> Gana B
// puntajesA[2] vs. puntajesB[2] -> Empate

// Resultado final: Gana Jugadora B


