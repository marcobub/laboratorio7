(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */
// Lista de emails de usuarios de Meta-X
const emailList: Array<string> = [
  "email1@gmail.com", 
  "email2@gmail.com", 
  "email3@gmail.com"
];

console.log(emailList);

// Lista de compras de un carrito
const shoppingCart: Array<{product: string}> = [
  {product: "switch"},
  {product: "X-box Controller"},
  {product: "steam-gift-card"},
];

console.log(shoppingCart);

// Función para sumar 3 a un número y retornarlo
const addThree = (num: number): number => num + 3;

console.log(addThree(2));

// Función para capitalizar una palabra pasada por parámetro
function capitalize(word: string): string {
  const lowercased = word.toLowerCase();    
  const capitalized = lowercased.charAt(0).toUpperCase() + lowercased.slice(1);
  return capitalized;
}

console.log(capitalize("capricorn"));

// Variable que alerta en caso de que algún evento suceda
const isEventTriggered: boolean = false;

if (isEventTriggered) console.log('event');

// Variable que se encarga de verificar si un usuario puede acceder o no
const canAccess: boolean = true;

if (canAccess) console.log('welcome');

// Variable para hallar el promedio de 3 números
const average: number = (1 + 2 + 3) / 3;

console.log(average);

// Variable que almacena el valor de PI
const piValue: number = 3.141592654;

console.log(piValue);

// Variable que controla si un archivo es modificable 
let isFileEditable: boolean = false;

if (isFileEditable) console.log('edit this file?');

// Variable para almacenar el valor de e
const eValue: number = 2.718281828;

console.log(eValue);

})();