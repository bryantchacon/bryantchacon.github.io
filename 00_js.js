// TIPOS DE DATOS EN JAVASCRIPT --------------------------------------------

// Primitivos

// string
var nombre1 = 'Tere' // var ya no se usa (function scope).
let nombre2 = 'Tere' // let es para variables cuyo valor va a cambiar durante la ejecución del código (block scope).
const nombre3 = 'Tere' // const es para variables que no cambiarán, que serán constantes (block scope).

/*
• Se puede omitir ; en cualquier instrucción, pero es arriesgado en ciertos casos cuando la siguiente línea empieza con (, [, / o +/-.

var a; // Declaración (Undefined por default)
var b = 'b'; // Declaración / asignación
b = 'bb'; // Reasignación
var a = 'aa'; // Redeclaración

• Si en una función solo se asigna una variable sin haberla declarado antes, sera una variable global y podría generar errores, para evitar esto se usa 'use strict'; al inicio del archivo o función, asi dará error e indicara donde esta este.

function test() {
  x = 10; // No declarada → se vuelve global
}

test();

console.log(x); // 10

- Se puede acceder a x desde afuera de la función porque es global.

• Otro aspecto es el hoisting (elevación de variables), que solo pasa al declarar una variable con var después de haberla llamado, ejemplo:

console.log(a); // undefined
var a = 5;

• Para no usar 'use strict';, basta con declarar y asignar en orden las variables y funciones, ademas del llamado de estas.
*/

// number
let edad = 25

// boolean
let esMayorDeEdad = true

// null
let noHayValor = null

// undefined 
let noDefinido = undefined // Parecido a null, pero no lo escribe el programador, es el valor por defecto de una variable no inicializada.

// symbol
let simboloUnico = Symbol('único') // Se puede usar para crear identificadores únicos (ID).

// bigint
let numeroGrande = 2n // 2 en formato bigint (por la n), útil para números enteros muy grandes.

// Complejos

// Objeto literal
let carro = {
  marca: 'Tesla',
  modelo: 'Model S'
}

// array
let frutas = ['manzana', 'banano', 'uvas']

// function
function saludar () {}
// --------------------------

// MANIPULACIÓN DE DATOS EN JAVASCRIPT -------------------------------------

// string

let string1 = 'Hola, mundo'
let string2 = "JavaScript es genial"
let string3 = `${string1} feliz :)` // Para imprimir variables dentro de un string solo se puede hacer entre backticks (comillas invertidas). Se obtienen con Alt + 96.
let string4 = string1 + ' ' + string2 // Concatenar strings

console.log(string1)
console.log(string2)
console.log(string3)
console.log(string4)

let frase = 'JavaScript es Extremadamente Genial'
console.log(frase.length) // Imprime el tamaño de un string o array
console.log(frase.toLowerCase()) // Convierte todo el string en minúsculas
console.log(frase.toUpperCase()) // Convierte todo el string en mayúsculas
console.log(frase.substring(0, 10)) // Extrae una sección de un string por medio del indice de los caracteres, el primer numero es a partir de que caracter (incluyéndolo), y el segundo hasta donde mas uno.

// number

let entero = 42;
let decimal = 3.14;
console.log(typeof entero); // Imprime el tipo de dato de la variable que se le indique
console.log(typeof decimal);

let cientifico = 5e3; // Notación científica, equivale a 5 * 10^3 = 5000
console.log(cientifico);
console.log(typeof cientifico);

let infinito = Infinity; // Representa un valor infinito
let noNumero = NaN; // Not a Number, representa un valor que no es un número válido

let suma = 5 + 3;
let resta = 10 - 6;
let multiplicacion = 2 * 3;
let division = 9 / 3;

let modulo = 10 % 3; // Es el residuo de una division, en este caso equivale a 1
let potencia = 2 ** 3; // Equivale 2^3 = 8

let resultado = 0.1 + 0.2;
console.log(resultado); // Imprime algo como 0.30000000000000004
console.log(resultado.toFixed(2)); // Redondea los decimales, en este caso a 0.30
console.log(Math.trunc(resultado)); // Math.trunc() devuelve un número entero y siempre redondea hacia abajo

let raizCuadrada = Math.sqrt(16); // 4
let valorAbsoluto = Math.abs(-7); // 7
let aleatorio = Math.random(); // Genera un número aleatorio entre 0 y 1

console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(aleatorio);
// --------------------------

// CONVERSION DE TIPOS DE DATOS --------------------------------------------

const integer = parseInt("42"); // Convierte un string en número entero
console.log(typeof integer); // number

const float = parseFloat("3.14"); // Convierte un string en decimal
console.log(typeof float); // number

const binary = "1010";
const decimalConst = parseInt(binary, 2); // Convierte un string binario a decimal
console.log(decimalConst); // 10

const decimalNumber = 10;
const binaryConst = decimalNumber.toString(2); // Convierte un número decimal a binario
console.log(binaryConst); // "1010"

// Typecasting implícito
const stringPlusInt = "5" + 3;
const stringPlusBool = "3" + true;
const intPlusBool = 2 + true;

console.log(stringPlusInt); // 53
console.log(typeof stringPlusInt); // string

console.log(stringPlusBool); // 3true
console.log(typeof stringPlusBool); // string

console.log(intPlusBool); // 3
console.log(typeof intPlusBool); // number
// NOTA: Si hay al menos un string, concatena, si no, suma.
// --------------------------

// OPERADORES DE COMPARACIÓN -----------------------------------------------

/*
== // Compara valor
=== // Compara valor y tipo
!= // Es diferente de? (En valor)
!== // Es diferente de? (En valor y tipo - Desigualdad estricta)
> // Mayor que
< // Menor que
>= // Mayor o igual que
<= // Menor o igual que
*/

// OPERADORES LÓGICOS ------------------------------------------------------

/*
&& // y
|| // o
! // No es - Invierte el valor de un booleano. Va al inicio de la variable u operador de comparación que hace referencia al booleano.
*/

// ESTRUCTURAS CONDICIONALES -----------------------------------------------

// if

let nombreCond = "Nico";

if (nombreCond === "Diego") {
  console.log("Hola Diego");
} else if (nombreCond === "Nico") {
  console.log("Hola Nico");
} else {
  console.log("Nombre no encontrado");
}

// También se puede usar el operador ternario para condiciones simples:
7 === 7 ? true : false // Se lee: Si 7 es igual a 7, entonces true, si no, false. También en lugar de devolver un booleano, se puede ejecutar una función.
// --------------------------

// ADIVINA EL NUMERO SECRETO (html)

const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(
  prompt("Adivina el número secreto entre el 1 al 10")
);

alert(`Este es el número con el que juegas: ${numeroJugador}`);

if (numeroJugador === numeroSecreto) {
  alert("¡Felicidades, adivinaste el número secreto!");
} else if (numeroJugador < numeroSecreto) {
  alert("El número es demasiado bajo, intenta de nuevo");
} else {
  alert("El número es muy alto, intenta de nuevo");
}
// --------------------------

// switch

/*
• Sintaxis:

switch(expresión a evaluar) {
  case valor1:
    código a ejecutar
    break;
  case valor2:
    código a ejecutar
    break;
  default:
    código
}
*/

let expr = "Uvas";

switch (expr) {
  case "Naranjas":
    console.log("Las naranjas cuestan $20 el kilo");
    break;
  case "Manzanas":
    console.log("Las manzanas cuestan $43 el kilo");
    break;
  case "Plátanos":
    console.log("El plátano esta en $30 el kilo");
    break;
  case "Mangos":
  case "Papayas":
    console.log("Los mangos y las papayas cuestan $ 25 pesos el kilo");
    break;
  default:
    console.log(`Lo siento, no contamos con ${expr}`);
}

console.log("¿Hay algo más que desees?");
// --------------------------

// for

/*
• Sintaxis:

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}
*/
// Se lee: Para la variable tal iniciando en tal, ejecuta el código mientras se cumpla la condición, y al final de cada iteración incrementa la variable en uno.

let list = ["eat", "sleep", "code", "repeat"];

for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}
// --------------------------

// for of - Solo para recorrer objetos iterables como arrays y strings

/*
• Sintaxis:

array = Objetos en string, number, boolean, etc.

for (objeto of array) {
  código
}
*/
// Se lee: Para cada objeto en el array, ejecuta el código. La variable objeto toma el valor de cada elemento del array en cada iteración y existe solo en el for of.

let canasta = ["manzana", "pera", "naranja", "uva"];

for (fruta of canasta) {
  console.log(fruta);
}
// Se lee: Para cada fruta en la canasta, ejecuta el código. La variable fruta toma el valor de cada elemento del array en cada iteración.
// --------------------------

// for in - Solo para recorrer objetos enumerables como objetos

/*
• Sintaxis:

item

for (variable in objeto) {
  código
}
*/
// Se lee: Para cada variable en el objeto, ejecuta el código. La variable toma el valor de cada clave del objeto en cada iteración.

const listaDeCompras = {
  manzana: 5,
  pera: 3,
  naranja: 2,
  uva: 1,
};

for (let fruta in listaDeCompras) {
  console.log(fruta);
}
// Se lee: Para cada fruta en la lista de compras, ejecuta el código. La variable fruta toma el valor de cada clave del objeto en cada iteración.

for (let fruta in listaDeCompras) {
  console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}
// Se lee: Para cada fruta en la lista de compras, ejecuta el código. La variable fruta toma el valor de cada clave del objeto en cada iteración y con listaDeCompras[fruta] accedemos al valor asociado a esa clave, ya que cuando se consulta un array con su nombre y entre corchetes el nombre de una key (clave), devuelve el value de esa key.
// --------------------------

// while

/*
• Sintaxis:

while(condición) {
  código
}
*/
// Se lee: Mientras se cumpla la condición, ejecuta el código.

let contador = 0;

while (contador < 10) {
  console.log(contador);
  contador++;
}
// La variable contador incrementa en cada iteración hasta que la condición deja de cumplirse.
// --------------------------

// do while

/*
• Sintaxis:

do {
  código
} while (condición)
*/
// Se lee: Ejecuta el código al menos una vez y luego verifica la condición, si se cumple, vuelve a ejecutar el código.

let contadorDo = 0;

do {
  console.log(contadorDo);
  contadorDo++;
} while (contadorDo < 10);
// --------------------------

// FUNCIONES ---------------------------------------------------------------

// Declaración de la función
function calculateDiscount (price, discountPercentage) {
  const discount = (price * discountPercentage) / 100
  const priceWithDiscount = price - discount

  return priceWithDiscount
}

const price = 1000
const discountPercentage = 15
const finalPrice = calculateDiscount(price, discountPercentage)

console.log('Original Price: $' + price)
console.log('Discount: ' + discountPercentage + '%')
console.log('Price with Discount: $' + finalPrice)
// --------------------------

// CAPACIDADES DE LAS FUNCIONES --------------------------------------------

// 1. Pasar funciones como argumentos -> Callback

function a () {}
function b (a) {}
b(a)

// 2. Retornar funciones - Closure, solo que la función interna debe usar algo de la externa para serlo

function a () {
  function b () {}
  return b
}

// 3. Asignar funciones a variables -> Expresión de función o Función anónima

/*
• En este caso ya no se le pone nombre a la función, ya que su nombre sera el de la variable que la contenga.

• La palabra function no va al principio de la línea ya que no es una declaración de función.
*/

// Creación de una función como un valor que asigna a una variable.

// Expresión de función (Función anónima)
const hola1 = function () {}

// Expresión de función nombrada
const hola2 = function saludo() {}

// 4. Tener propiedades y métodos

/*
• En JavaScript, las funciones son objetos. Esto significa que una función además de poder ejecutarse, puede tener propiedades y métodos igual que un objeto.

• Cualquier función por debajo es un objeto especial de tipo Function, tiene propiedades como .length, .name, etc., y también métodos como .call(), .apply(), .bind(), etc.
*/

function a () {}
const obj = {}
a.call(obj)
/*
• .call() es un método incorporado en todas las funciones en JavaScript.

• Permite invocar una función y al mismo tiempo especificar el valor de this dentro de esa función.

• Aquí .call() hace que el valor de this sea obj.
*/

// Ejemplo:
function saludar() {
  console.log(this.mensaje);
}

const contexto = { mensaje: "Hola desde obj" };

saludar.call(contexto); // "Hola desde obj"
// Aquí, la función saludar no tiene propiedades propias, pero al usar .call(contexto), le decimos: "ejecútate como si this fuera contexto", o sea, .call() hace que el this de la función sea el valor que se le pase a .call() como parámetro.

// 5. Agregar propiedades a funciones

function contador() {}
contador.numero = 10; // Para agregar una propiedad a una función ya creada se usa la sintaxis: functionName.propertyName = valor;
console.log(contador.numero); // 10

// 6. Anidar funciones -> Nested functions

function a () {
  function b () {
    function c () {
      // código
    }
    // código

    c()
  }
  // código

  b()
}

a()

// 7. Funciones en objetos -> Métodos

const rocket = {
  name: 'Falcon 9',
  // Método shorthand (Estándar de la industria)
  engine1 () {
    console.log('🔥')
  },
  // Método como función anónima
  engine2: function () {
    console.log('🔥')
  }
}

rocket.engine1()
rocket.engine2()
// --------------------------

// FUNCIONES PURAS E IMPURAS -----------------------------------------------

// Si una función tiene cualquiera de los siguientes side effects, entonces es impura:
/*
• 1. Modifica variables globales
• 2. Modifica parámetros
• 3. Hace solicitudes HTTP
• 4. Imprime mensajes en pantalla o consola
• 5. Manipula el DOM
• 6. Obtiene la hora actual
*/

// Estructura de una función pura (Cualquiera que no cambie, dependa ni imprima nada fuera de si misma):

function sum (a, b) {
  return a + b
}

// Funciones impuras

function sum (a, b) {
  console.log('A:', a) // Cuando se usa , en un console.log(), esta se imprime como un espacio en blanco, por eso 'A:' no lo lleva, esto en lugar de que sea ('A: ' + a).
  return a + b
}

let total = 0
function sumWithSideEffect (a) {
  total += a
  return total
}

// Función pura

function square(x) {
  return x * x
}

function addTen (y) {
  return y + 10
}

const number = 5
const finalResut = addTen(square(number))
console.log(finalResut)

/*
• Sirve saber cuales son puras e impuras porque:
• Da mayor claridad, código más limpio, más facilidad para reutilizar y escalar, ademas de menos bugs porque:
- Si algo falla y solo se están usando funciones puras, se sabra que el error está en los datos, no en el entorno.
- Con funciones impuras, el fallo puede venir de cualquier cosa externa.

• CONSEJOS:
• Usar funciones puras siempre que se pueda.
• Reservar los efectos secundarios para el borde de una app (entradas/salidas, logs, red, etc.).
*/
// --------------------------

// Arrow Functions ---------------------------------------------------------

// Función tradicional (Función anónima)
const greeting = function (name) {
  return `Hi, ${name}`
}

// Arrow function - Con return (Explicit)
const newGreeting = (name) => {
  return `Hi, ${name}`
} // Con {} necesita return, si no, no devolverá nada

console.log(greeting('Sara'))
console.log(newGreeting('Susana'))

// Arrow function - Sin return (Implicit)
const newGreetingImplicit = name => `Hi, ${name}` 
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}`
// Sin () (para un solo parámetro), ni {} (para una sola linea de código) hace que devuelva el resultado automáticamente.

console.log(newGreetingImplicit('Ana')) // Hi, Ana
console.log(newGreetingImplicitWithTwoParameters('Ana', 'Suarez')) // Hi, I'm Ana Suarez
// La clave para entender las arrow functions es que lo que va antes de =>, son los parámetros que se usaran en el código que van después de el, si no lleva, la función no usa, no es obligatorio que tenga.
// --------------------------

// Lexical Binding (Acceso a variables)
const fictionalCharacter = {
  name: 'Uncle Ben',
  messageWithTraditionalFunction: function (message) {
    console.log(`${this.name} says: ${message}`)
  },
  messageWithArrowFunction: (message) => {
    console.log(`${this.name} says: ${message}`)
  }
}

fictionalCharacter.messageWithTraditionalFunction('With great power comes great responsibility.') // Uncle Ben says: With great power comes great responsibility.

fictionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.') // undefined says: Beware of Doctor Octopus.

/*
• El this de la arrow function es undefined porque las arrow functions no tienen su propio this, en lugar de eso, heredan el this del contexto léxico donde fueron creadas, que en este caso es el contexto global, no el objeto fictionalCharacter.

• Para que funcione con arrow function debería ser fictionalCharacter.name en lugar de this.name.

• O, solo hay que usar funciones tradicionales cuando se necesite acceder a this dentro de objetos, que es mas simple que usar el mismo nombre del objeto en lugar de this.
*/
// --------------------------

// CLOSURES, ÁMBITO LÉXICO Y SCOPE -----------------------------------------

/*
• Closure: Función que "recuerda" el ámbito en el que fue creada, con acceso a variables de un ámbito externo, incluso después de que esa función haya terminado de ejecutarse. También puede verse como una función cuyo resultado depende de otra dentro de la misma, que sigue teniendo acceso a las variables de la función principal.

• Ámbito léxico (lo mismo que Lexical Binding): Cada vez que se declara una función, crea su propio ámbito léxico, y puede acceder a las variables dentro de ese ámbito y a las variables en ámbitos superiores, pero no a las de ámbitos inferiores (funciones hijas).

• Scope:
- var (Function scope): La variable es accesible en el ámbito global de la función donde se declara, incluso si esta dentro de un block (cualquier código dentro de {}), anidado en la función principal.

- let y const (Block scope): La variable solo es accesible dentro del block donde se declara.
*/

// Closure function (Como Ejecución inmediata por el return del final)

function outerFunction () {
    let outerVariable = "I am from outer function"

    function innerFunction () {
        console.log(outerVariable)
    }

    return innerFunction
} // Aquí outerFunction() devuelve la ejecución de innerFunction(), que a su vez imprime outerVariable.

const closureExample = outerFunction()
closureExample() // I am from outer function
// Se llama de este modo debido a que al ser una closure function necesita guardarse en una variable ya que lo que devuelve es el resultado de una función interna y primero la ejecuta, la guarda en la variable, y la externa (la función en si, outerFunction()), se llama al llamar a la variable como función.

// Otra forma de ejecutar una closure function sin necesidad de guardarla en una variable y luego llamarla es con doble ():
outerFunction()() // I am from outer function

// Contadores independientes con closure real (por el return en la función interna), con continuidad

function createCounter () {
    let count = 0

    return function counter () {
        count++
        console.log(count)
    }
}

const counterA = createCounter()
const counterB = createCounter()

counterA() // 1
counterA() // 2
counterB() // 1
// Cada vez que se llama createCounter() con una variable diferente, se crea un nuevo "entorno" con su propia variable count, por eso counterA tiene continuidad, counterA y counterB no interfieren entre si, y cada uno mantiene su propio estado interno gracias al closure.

console.log(counterA); // [Function: counter]
// Al imprimir la variable que contiene la closure function se imprime el nombre de la función interna, si lo tiene, si no,salda anonymous, generalmente no llevan nombre, pero para mayor facilidad en el debuggeo se recomienda que si.

// Ejemplo de closure como ejecución inmediata (Sin continuidad, no es closure, retorna la función al final)

function outer () {
    let message = "Hello, "

    function inner (name) {
        console.log(message + name)
    }

    return inner
}

const closureA = outer()
const closureB = outer()

closureA("Alice") // Hello, Alice
closureA("Alicia") // Hello, Alicia
closureB("Bob") // Hello, Bob
// Si, si la función interna necesita un parámetro, se pone en la variable al llamarla con ella.

// Accediendo a la función de un objeto dentro de una función

function crearObjeto() {
  const self = {
    name: 'Ben',
    hablar () {
      console.log(self.name); // Ben
    },
  };

  return self; // El objeto se retorna para poder usar sus funciones desde afuera.
}

const obj1 = crearObjeto();
obj1.hablar(); // Ben

// Es lo mismo que:
crearObjeto().hablar() // Ben

// Ejercicio:
/*
Crear una función a la cual se pueda llamar en primer lugar con un solo número y secuencialmente volver a llamarla para completar la suma con el siguiente número:

La solución deberá tener un input y output como la siguiente, en algunos casos puede que no se mande el segundo número por lo que deberás pensar en como manejar ese tipo de casos.

Input:
sumWithClosure(2)(3);

Output:
5

Input:
sumWithClosure(90)();

Output:
90
*/

function sumWithClosure(firstNum = 0) { // El = 0 es un valor por defecto en caso de que no se pase ningún argumento para el primer parámetro.
  return function sum (secondNum) {
    if (secondNum === undefined) {
      console.log(firstNum);
    } else {
      console.log(firstNum + secondNum);
    }
  }
}

sumWithClosure(3)(4) // 7
sumWithClosure(5)() // 5
sumWithClosure()(4) // 4
sumWithClosure()() // 0

/*
• Si, hay casos donde se requieren parámetros en la closure function, como en este caso, y otros donde no, como en los primeros ejemplos.

• Si hay una función anidada mas, se llamaría con ()()(), esto se llama currificación (currying), pero es poco común.
*/

// Otro ejercicio de closures:

/*
Crear un closure que nos permita almacenar datos de mascotas en cualquier momento.

Los datos pueden venir de distintas maneras, pueden ser objetos, strings o arrays. En el primer llamado a la función nos servirá para crear nuestra lista en un inicio mientras que los demás llamados nos ayudarán a agregar elementos al final de la lista.

Si en algún momento llamamos a la función sin pasarle ningún parámetro esta nos devolverá el array con los datos de todos las mascotas introducidas.

Input:
const myPetList = createPetList();
myPetList("michi");
myPetList("firulais");
myPetList();

Output:
["michi", "firulais"]
*/

function createPetList() {
  const petList = []
  return function addPet (pet) {
    if (pet != undefined)
    {
      petList.push(pet);
    } else {
      console.log(petList);
    }
  }
}

const myPetList = createPetList();
myPetList("michi");
myPetList("firulais");
myPetList();

// debugger; en el código es para debugeralo en el navegador desde la pestaña sources.
// --------------------------

// ARRAYS ------------------------------------------------------------------

// Arrays con Array()

const fruits = Array('apple', 'banana', 'orange')
console.log(fruits) // [ 'apple', 'banana', 'orange']

const numbers = Array(1, 2, 3, 4, 5)
console.log(numbers) // [ 1, 2, 3, 4, 5 ]

// Array con 12 espacios vacíos
const emptySpaces = Array(12)
console.log(emptySpaces) // [ <12 empty items> ]

// Array con 12 espacios prellenados con 0
const emptySpacesFilled = Array(12).fill(0)
console.log(emptySpacesFilled) // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Array literal syntax con [] (Estándar de la industria)

const oneNumber = [4]
console.log(oneNumber) // [ 4 ]

const emptyArray = []
console.log(emptyArray) // []

const sports = ['soccer', 'tennis', 'rugby']
console.log(sports) // [ 'soccer', 'tennis', 'rugby' ]

const recipeIngredients = [
  'Flour',
  true,
  2,
  {
    ingredient: 'Milk', quantity: '1 cup'
  },
  false
]

console.log(recipeIngredients) // [ 'Flour', true, 2, { ingredient: 'Milk', quantity: '1 cup' }, false ]

// Accessing array elements

const firstFruit = fruits[0]
console.log(firstFruit) // apple

// length property

const numberOfFruits = fruits.length
console.log(numberOfFruits) // 3

// Checking arrays with Array.isArray()

const fruitsIsArray = Array('apple', 'banana', 'orange')

const isArray = Array.isArray(fruitsIsArray)
console.log(isArray) // true

// Ejercicio: Suma de todos los elementos de un array

const numbersArray = [1, 2, 3, 4, 5]

let sum1 = 0
for (let i = 0; i < numbersArray.length; i++) {
  sum1 += numbersArray[i]
}

console.log(sum1) // 15

// Los métodos que modifican el array original se denominan métodos mutables, algunos de ellos son: copyWithin, fill, pop, push, reverse, shift, unshift, sort, splice.

// Los que NO, inmutables, algunos de ellos son: concat, slice, toSliced, toReversed, toSorted.
// --------------------------

// .push() - MUTABLE - Agrega elementos al final de un array y al imprimir la variable donde se usa devuelve cuantos son después del push.

// .unshift() - MUTABLE - Agrega un elemento al inicio.

/*
• Se pueden usar métodos mutables con arrays con const como tipo de dato porque este no congela el contenido del valor, solo significa que esa variable no puede ser reasignada a otro valor porque lo que guarda es una referencia al array en memoria, const asegura que la variable siempre va a apuntar al mismo array, no que el array sea inmutable, por eso:

arrayName.push() // ✅ Permitido: Se modifica el array, pero sigue usando la misma referencia.

arrayName = [] // ❌ Error: No se puede reasignar la referencia.

• Si se requiere que el array no se pueda modificar, necesita congelarse:

const arrayName = Object.freeze([Elements])

arrayName.pop()  // ❌ TypeError en modo estricto
*/

const countries = ['USA', 'Canada', 'UK']
const newCountries = countries.push('Germany', 'Australia')

console.log(countries) // [ 'USA', 'Canada', 'UK', 'Germany', 'Australia' ]
console.log(newCountries) // 5

// Otro ejemplo de .push()
const fruitsPush = Array('apple', 'banana', 'orange')

fruitsPush.push('watermelon')
console.log(fruitsPush) // [ 'apple', 'banana', 'orange', 'watermelon' ]
// --------------------------

// .pop() - MUTABLE - Quita el ultimo elemento de un array y al imprimir la variable donde se usa devuelve el elemento que quito después del pop.

// .shift() - MUTABLE - Quita un elemento del inicio.

const countriesPop = ['USA', 'Canada', 'UK']
const removedCountry = countriesPop.pop()

console.log(countriesPop) // [ 'USA', 'Canada' ]
console.log(removedCountry) // UK

// Exercise: Managing a Stack

let bookCart = []

const ADD_TO_CART_ACTION = 'addToCart'
const REMOVE_FROM_CART_ACTION = 'removeFromCart'
const VIEW_CART_ACTION = 'viewCart'

function viewCart() {
  console.log('Current Cart of Books:', bookCart)
}

function performCartActions (action, newBook) {
  switch (action) {
    case ADD_TO_CART_ACTION:
      bookCart.push(newBook)
      break;
    case REMOVE_FROM_CART_ACTION:
      if (bookCart.length === 0) {
        console.log('Cart is empty. No books to remove.')
      } else {
        const removedBook = bookCart.pop()
        console.log(`Removed book from the cart: ${removedBook}`)
      }
      break;
    case VIEW_CART_ACTION:
      viewCart()
      break;
    default:
      console.log('Invalid action. Please choose a valid option.')
  }
}

performCartActions(ADD_TO_CART_ACTION, 'Think like a monk')
performCartActions(VIEW_CART_ACTION)
performCartActions(ADD_TO_CART_ACTION, 'Ego is the enemy.')
performCartActions(VIEW_CART_ACTION)
performCartActions(REMOVE_FROM_CART_ACTION)
// --------------------------

// .splice() - MUTABLE - Elimina el/los elementos de un array que se le indiquen por medio de su indice, el primero es a partir de que elemento (incluyéndolo), y el segundo hasta cual mas uno, si se pone 1 como segundo indice, entonces solo eliminara un elemento, el que se indique con el primer indice.

// Ejercicio: Agregar un elemento de un array a otro y eliminarlo del original.

const productsSplice = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const myProducts = [];

console.log("products", productsSplice);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = productsSplice.findIndex(item => item.id === '🍔');

if (productIndex !== -1) { // Se pone como comparativa !== -1 porque el resultado de .findIndex() es -1 cuando no encuentra el elemento, por eso no puede ser solo productIndex.
    myProducts.push(productsSplice[productIndex]);
    productsSplice.splice(productIndex, 1);
}

console.log("products", productsSplice);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// Ejercicio: Actualizar un objeto en un array

// Array de productos
const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

// Objeto para actualizar un producto
const update = {
  id: "🥞",
  changes: {
    price: 200,
    description: 'delicioso'
  }
}

const productIndexV2 = productsV2.findIndex(item => item.id === update.id);

productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes,
}; // Se lee: En el array productsV2 en la posición 2 (resultado de productIndexV2), ahora sera igual a los datos de esa misma posición (los clona con ...), mas los datos de update.changes (también los clona), y si tiene propiedades repetidas las actualiza.

console.log(productsV2);
// --------------------------

// .filter() - INMUTABLE - Itera sobre cada elemento de un array y crea uno nuevo con elementos que cumplan la condición dada por una función.

// Ejercicio: Filtrar los números par de un array

const numbersFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbersFilter.filter(number => number % 2 === 0) // Se lee: Del array numbersFilter, guarda en evenNumbers los números que sean par (que su modulo de 2 sea 0).

console.log(numbersFilter) // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
console.log(evenNumbers) // [ 2, 4, 6, 8, 10 ]

// Ejercicio: Filtrar los strings de un array

const wordsFilter = ['spray', 'limit', 'elite', 'exuberant'];

const newWords = [];

// Con for
for (let index = 0; index < wordsFilter.length; index++) {
    const item = wordsFilter[index];
    if (item.length >= 6) {
        newWords.push(item);
    }
}

console.log('rta', newWords);
console.log('original', wordsFilter );

// Con filter()
const rtaFilter = wordsFilter.filter(item => item.length >= 6)

console.log('rta2', rtaFilter);
console.log('original', wordsFilter );

// Ejercicio: Filtrar los objetos de un array

const ordersFilter = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 2322,
        delivered: false,
      },
  ];

const rta3 = ordersFilter.filter(item => item.delivered && item.total >= 100)
console.log('rta3', rta3);

// Buscador básico combinando filter() con includes() para encontrar un objeto por su nombre aunque solo sea una parte o letra de este.

const search = (query) => {
    return ordersFilter.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search('Nico'));
console.log(search('hsdjkfhdsj')); // Si la búsqueda no se encuentra, el resultado es un array vació
// --------------------------

// .includes() - INMUTABLE - Itera sobre cada elemento de un array y retorna true si se encuentra el que se le indique, si no, false. No usa arrow function, basta con indicar el elemento o parte de el (para strings), que se buscara en el array.

// Ejercicio: Encontrar un string en un array

const pets = ['cat', 'dog', 'bat'];

// Con for
let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}

console.log('for', includeInArray);

// Con includes()
const rtaIncludes = pets.includes('dog');
console.log('includes', rtaIncludes);
// --------------------------

// .reduce() - INMUTABLE - Itera sobre cada elemento de un array y los reduce todos a un único valor, objeto o array y lo devuelve.

// Ejercicio: Suma de todos los números de un array

const numbersReduce = [1, 2, 3, 4, 5]

// Con for
let sum = 0;
for (let index = 0; index < numbersReduce.length; index++) {
    const element = numbersReduce[index];
    sum += element;
}

console.log(sum);

// Con reduce()
const sumReduce = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0) // Se lee: Guarda en sumReduce el resultado total de sumar uno por uno todos los elementos del array numbersReduce, empezando accumulator en 0.
// En este caso el primer valor es la función y el segundo el estado inicial del acumulador en la función (lo que reduce() va a devolver, ya sea un numero o un array), y de la función, el primer valor es el acumulador, y el segundo el valor actual (item), en cada iteración.

console.log(numbersReduce) // [ 1, 2, 3, 4, 5 ]
console.log(sumReduce) // 15

// Ejercicio: Contar cuantas veces se repite un elemento en un array

const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']

const wordFrecuency = words.reduce((obj, currentValue) => {
  if (!obj[currentValue]) { // Si obj[currentValue] no existe...
    obj[currentValue] = 1 // ... se crea y se le asigna 1...
  } else { // ... si ya existe...
    obj[currentValue]++ // ... se le suma 1
  }
  return obj // Retorna obj ({}), actualizado para la siguiente iteración
}, {}) // {} es el objeto (y valor inicial de obj), donde se guarda el resultado, el cual devolverá reduce() por medio de obj.
// Se lee: Recorre el array words para construir un objeto ({}), donde a cada palabra (representada por obj[currentValue]), se le asignara la cantidad de veces que aparece, y devuélvelo.

console.log(wordFrecuency) // { apple: 1, banana: 2, hello: 1, bye: 3 }

// Ejercicio: Contar cuantas veces se repiten los niveles de jugadores en un array

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta1 = data.map(item => item.level).reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item]++;
  }
  return obj;
}, {});

console.log(rta1);

// Ejercicio: Agrupar por rangos

const listReduce = [];

for (let i = 0; i < 10; i++) {
  listReduce.push(Math.floor(Math.random() * 11));
}

console.log(listReduce);

const rtaReduce = listReduce.reduce((obj, value) => {
  if (value <= 3) {
    obj['0-3']++;
  } else if (value <= 7) {
    obj['4-7']++;
  } else {
    obj['8-10']++;
  }
  return obj;
}, {
  '0-3': 0,
  '4-7': 0,
  '8-10': 0,
})

console.log(rtaReduce);

// Ejercicio: Promedio de calificaciones aprobatorias

const grades = [85, 92, 60, 78, 95, 66, 88, 50, 94]

const passingGrades = grades.filter(grade => grade >= 70)

const averagePassingGrade = (passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length).toFixed(2)

console.log('Original Grades:', grades) // Original Grades: [ 85, 92, 60, 78, 95, 66, 88, 50, 94 ]
console.log('Passing Grades:', passingGrades) // Passing Grades:  [ 85, 92, 78, 95, 88, 94 ]
console.log('Average Passing Grade:', averagePassingGrade) // Average Passing Grade:  88.67
// --------------------------

// .some() - INMUTABLE - Itera sobre cada elemento de un array y retorna true si al menos uno de ellos cumple la condición dada por una función, si no, false, se detendrá con el primero que encuentre.

// Ejercicio: Verificar si al menos un numero en un array es par

const numbersSome = [1, 2, 3, 4];

// Con for
let rtaSome = false;
for (let index = 0; index < numbersSome.length; index++) {
  const element = numbersSome[index];
  if (element % 2 === 0) {
    rtaSome = true;
    break;
  }
}

console.log(rtaSome);

// Con some()
const rtaSome2 = numbersSome.some((item) => item % 2 === 0);
console.log("rtaSome2", rtaSome2);

// Ejercicio: Verificar si al menos una orden ha sido entregada

const ordersSome = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
  {
    customerName: "Nicolas",
    total: 2322,
    delivered: false,
  },
];

const rtaSome3 = ordersSome.some((item) => item.delivered);
console.log("rtaSome3", rtaSome3);

// Ejercicio: Verificar si al menos una cita nueva se sobre pone con otra ya agendada. Para esto se necesita la librería date-fns, la cual se instala en el proyecto con npm i date-fns.

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

import { areIntervalsOverlapping } from 'date-fns'; // Importa la función areIntervalsOverlapping de la librería date-fns, la cual devuelve true si alguna cita se sobre pone con otra, o false si no.

const isOverlap = (newDate) => {
  return dates.some(date => {
    return areIntervalsOverlapping(
      {start: date.startDate, end: date.endDate},
      {start: newDate.startDate, end: newDate.endDate},
    )
  })
}

console.log('isOverlap', isOverlap(newAppointment));
// --------------------------

// every() - INMUTABLE - Itera sobre cada elemento de un array y retorna true si todos sus elementos cumplen la condición dada por una función, si no, false.

// Ejercicio: Verificar si todos los números en un array son menores a otro numero determinado

const numbersEvery = [1,30,39,29,10,13];

// Con for
let rtaEvery = false;
for (let index = 0; index < numbersEvery.length; index++) {
    const element = numbersEvery[index];
    if (element <= 40) {
        rtaEvery = true
    }
}

console.log('for', rtaEvery);

// Con every()
const rtaEvery2 = numbersEvery.every(item => item <= 40)
console.log('rtaEvery2', rtaEvery2);

// Ejercicio: Verificar si todos los miembros de un equipo son mayores de edad

const team = [
  {
    name: "Nicolas",
    age: 1,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const rtaEvery3 = team.every(item => item.age >= 18)
console.log('rtaEvery3', rtaEvery3);
// --------------------------

// Spread operator - ...

// 1. Copying an Array

const originalArray = [1, 2, 3, 4, 5]
const copyOfAnArray = [...originalArray]

console.log(originalArray)
console.log(copyOfAnArray)

// 2. Combining Arrays

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combinedArray = [...array1, ...array2]

console.log(array1)
console.log(array2)
console.log(combinedArray)

// 3. Creating Arrays with Additional Elements

const baseArray = [1, 2, 3]
const arrayWithAdditionalElements = [...baseArray, 4, 5, 6]

console.log(baseArray)
console.log(arrayWithAdditionalElements)

// 4. Pass arrays as parameters to functions

function sum (a, b, c) {
  return a + b + c
}

const numbersSpread = [1, 2, 3]

const result = sum(...numbersSpread) 

console.log(result)
// --------------------------

// .map() - INMUTABLE - Itera sobre cada elemento de un array aplicando una función a cada uno y devuelve un array nuevo con los resultados.

// Ejercicio: Agregar mas texto a cada string de un array.

const lettersMap = ['a','b','c'];

// Con for
const newLetters = [];
for (let index = 0; index < lettersMap.length; index++) {
  const element = lettersMap[index];
  newLetters.push(element + '++');
}

console.log('original', lettersMap);
console.log('for', newLetters);

// Con map
const newLettersMap = lettersMap.map(item => item + '++');

console.log('map', newLettersMap);

// Ejercicio: Multiplicar cada numero de un array por si mismo

const numbersMap = [1, 2, 3, 4, 5]
const squaredNumbers = numbersMap.map(num => num * num) // Se lee: Crea un nuevo array squaredNumbers, donde cada elemento (primer num), es el resultado de multiplicar cada número del array numbersMap por sí mismo.

console.log(numbersMap) // [ 1, 2, 3, 4, 5 ]
console.log(squaredNumbers) // [ 1, 4, 9, 16, 25 ]

// Ejercicio: Conversion de Fahrenheit a Celsius

const temperaturesInFahrenheit = [32, 68, 95, 104, 212]

const temperaturesInCelsius = temperaturesInFahrenheit.map(fahrenheit => (fahrenheit - 32) * (5/9))

console.log('Temperatures In Fahrenheit:', temperaturesInFahrenheit) // Temperatures In Fahrenheit: [ 32, 68, 95, 104, 212 ]
console.log('Temperatures In Celsius:', temperaturesInCelsius) // Temperatures In Celsius: [ 0, 20, 35, 40, 100 ]

// Ejercicio: Agregar una propiedad a un objeto ya creado sin modificar el original al crear una copia de este con spread operator.

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

console.log("original", orders);

const rta = orders.map((item) => item.total); // Array de solo los totales de cada objeto
console.log("rta", rta);

const rta2 = orders.map((item) => {
  return {
    ...item, // ... crea una copia del item original
    tax: 0.19, // Se agrega la propiedad que se requiera
  };
});

console.log("original", orders);
console.log("rta2", rta2);

/*
• Si no se usa el spread operator y se hace algo como esto:

const rta2 = orders.map((item) => {
  item.tax = 0.19;
  return item;
});

• A pesar de que map() sea inmutable si modificara el array original, por que lo que hace es apuntar al espacio en memoria que lo contiene y modificarlo, por eso primero se crea una copia y es esta la que se modifica.
*/
// --------------------------

// .find() - INMUTABLE - Itera sobre los elementos de un array y devuelve el primero que cumpla la condición dada por una función, si no lo hay devuelve undefined.

// Ejercicio: Encontrar un numero determinado en un array

const numbersFind = [1,30,49,29,10,13];

// Con for
let rtaFind = undefined;
for (let index = 0; index < numbersFind.length; index++) {
  const element = numbersFind[index];
  if (element === 30) {
    rtaFind = element;
    break;
  }
}

console.log('for', rtaFind);

// Con find()
const rtaFind2 = numbersFind.find(item => item === 30)
console.log('find', rtaFind2);

// Ejercicio: Encontrar el primer numero mayor a determinado numero en un array

const multipleOf5 = [5, 10, 15, 20]
const firstNumberGreaterThan10 = multipleOf5.find(number => number > 10)

console.log(multipleOf5) // [ 5, 10, 15, 20 ]
console.log(firstNumberGreaterThan10) // 15
// --------------------------

// .findIndex() - INMUTABLE - Itera sobre los elementos de un array y devuelve el index del elemento que cumpla la condición dada por una función, si no lo hay devuelve -1.

// Ejercicio: Encontrar un objeto por su id

const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const rtaFind3 = products.find(item => item.id === '🍔') // Se lee: Encuentra el objeto cuyo id sea 🍔 y devuélvelo
console.log('find', rtaFind3);

const rtaFindIndex = products.findIndex(item => item.id === '🍔') // Se lee: Encuentra el objeto cuyo id sea 🍔 y devuelve su index
console.log('findIndex', rtaFindIndex);

// Ejercicio: Encontrar el index del primer numero mayor a determinado numero en un array

const randomNumbers = [6, 14, 27, 56, 40]
const indexNumber = randomNumbers.findIndex(number => number > 50)

console.log(randomNumbers) // [ 6, 14, 27, 56, 40 ]
console.log(indexNumber) // 3

// Exercise: Raffle Winner Verification Program

const winningParticipants = [
  { id: 1, name: 'Jennifer', ticketNumber: 1 },
  { id: 8, name: 'Michael', ticketNumber: 8 },
  { id: 15, name: 'Emily', ticketNumber: 15 },
  { id: 47, name: 'Charlie', ticketNumber: 47 }
]

function findWinnerByName(name) {
  const winner = winningParticipants.find(participants => participants.name === name)
  return winner || 'No winner found with that name.' // || (or) se basa en truthy/falsy (más corto), si la variable winner tiene datos, esta se imprime, si no, se imprimirá el string, o sea, lo que vaya después del ||.
}

function findIndexWinnerByTicket(ticketNumber) {
  const index = winningParticipants.findIndex(participants => participants.ticketNumber === ticketNumber)
  return index !== -1 ? index : 'No winner found with that ticket number.'
}

function displayWinnerInformation(winner) {
  if (winner !== undefined && winner != null && winner !== 'No winner found with that name.') {
    console.log('Winner information: ', winner)
  } else {
    console.log('No winner found.')
  }
}

const winnerByName = findWinnerByName('Emily')
const indexWinnerByTicket = findIndexWinnerByTicket(8)

displayWinnerInformation(winnerByName)

console.log('Index of Winner by Ticket Number: ', indexWinnerByTicket)
// --------------------------

// .join() y .split() - INMUTABLES - join() une los elementos de un array en uno solo concatenandolos con el/los caracteres que se le indique, y split() los separa en elementos individuales cada que encuentre el/los caracteres que se le indique.

// Ejercicio: Unir los elementos de un array

const elements = ["Fire", "Air", "Water"];

// Con for
let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal += element + separator;
}

console.log('for', rtaFinal); // Con for el ultimo elemento queda con los -- al ultimo, con join() por ser el método nativo de js para hacer esto, no.

// Con join()
const rtaJoin = elements.join('--')
console.log('join', rtaJoin);

// Ejercicio: Crear una url al separar y unir los elementos de un array

const title = 'Curso de manipulación de arrays';

const urlFinal = title.split(' ').join('-').toLowerCase();
const urlFinalReplace = title.replaceAll(' ','-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""); // replaceAll() sustituye el uso de split() y join() conjuntamente, y .normalize('NFD').replace(/[\u0300-\u036f]/g, "") quita cualquier acento, virgulilla, etc., del texto.

console.log(urlFinal);
console.log(urlFinalReplace);
// --------------------------

// .concat() - INMUTABLE - Concatena dos arrays y devuelve uno nuevo.

// Ejercicio: Concatenar dos arrays de strings

const fruitsConcat = ['apple', 'banana', 'orange']

const newFruits = fruitsConcat.concat(['grape', 'kiwi'])

console.log(fruitsConcat) // [ 'apple', 'banana', 'orange' ]
console.log(newFruits) // [ 'apple', 'banana', 'orange', 'grape', 'kiwi' ]

// Ejercicio: Concatenar dos arrays de números

const elementsConcat = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

// Con for
const newArrayConcat = [...elementsConcat]; // ... crea un clon del array elementsConcat para evitar errores de memoria debido a que se usara push() en el for, ya que si no se usa, copiaría la referencia en memoria del array y no su contenido.
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArrayConcat.push(element);
}

/*
• Para arrays de objetos una forma de copiar cada elemento y no su referencia en memoria es:

const arrayCopy = myArray.map(a => ({...a}));
*/

console.log('for', newArrayConcat);

// Con concat()
const rtaConcat = elementsConcat.concat(othersElements);
console.log('concat', rtaConcat);

// Otra forma solo con spread operator
const rtaSpread = [...elementsConcat, ...othersElements];
console.log('...', rtaSpread);

// Consideration al usar spread operator con strings

const rtaSpread2 = [...elementsConcat, 'random']; // Si no se usa spread operator al concatenar el clon de un array con un string, este ultimo se añadirá tal cual al final del array resultante.
console.log('...2', rtaSpread2);

const rtaSpread3 = [...elementsConcat, ...'random']; // Pero al usar spread operator, concatena cada caracter del string por separado, util cuando se requiere eso y no que el string se agregue integro al final.
console.log('...3', rtaSpread3);

// Modificando el array original con push() y spread operator
elementsConcat.push(...othersElements);
console.log('elementsConcatModified', elementsConcat);
// --------------------------

// .flat() - INMUTABLE - Aplana un array con arrays anidados, como una matriz.

const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

// Con for
const newArrayFlat = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArrayFlat.push(element);
    }
}

// Con for no es eficiente porque se debería anidar uno por cada nivel del array.

console.log('for', newArrayFlat);

// Con flat()
const rtaFlat = matriz.flat(3); // Para aplanar un array con varios niveles de arrays anidados, se indica con un numero como parámetro en flat(), para un solo nivel se deja sin parámetro, de 2 en adelante se indica.
console.log('flat', rtaFlat);
// --------------------------

// .flatMap() - INMUTABLE - Aplana y aplica una función a un array con arrays anidados, como una matriz.

// Ejercicio: Obtener un array de una propiedad de varios objetos

const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

// Con map() y flat() por separado
const rtaMapFlat = users.map(user => user.attributes).flat();
console.log("map-flat", rtaMapFlat);

// Con flatMap()
const rtaMap = users.flatMap(user => user.attributes);
console.log("flatMap", rtaMap);

// Ejercicio: Obtener un array de una propiedad de varias fechas en una agenda

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

const rtaSchedule = Object.values(calendars).flatMap(item => {
    return item.map(date => date.startDate);
});

/*
• calendars es un objeto con dos propiedades que contienen un array cada una, y estos a su vez dos objetos.

• Object.values() devuelve un array con los values de cada propiedad de un objeto, en este caso los arrays primaryCalendar y secondaryCalendar.

• A este array de arrays flatMap() aplicara una función a cada uno de sus elementos (subarrays), y por medio de map(), se recorrerán los elementos de cada uno (objetos), para obtener la propiedad startDate de cada uno de ellos, mientras flatMap() los va aplanando mientras se obtienen.

• Si no se usa map() no se podría iterar en cada elemento de los sub arrays, y se usa return para devolver el resultado de map() para que flatMap() lo vaya aplanando y guarda el resultado en rtaSchedule.
*/

console.log(rtaSchedule);

// Ejercicio: Contar la cantidad de palabras de un array de strings

const Input = [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
]

function countWords(array) {
  return array.flatMap(item => item.split(' ')).length;
}

const rtaExercise = countWords(Input);
console.log(rtaExercise);
// --------------------------

// .sort() - MUTABLE - Ordena los elementos de un array en base al código ascii. Con letras queda en orden alfabético, pero con números no funciona porque se basa en el código ascii del primer dígito del numero, asi que para que funcione correctamente con números se le debe pasar una función.

// Ejercicio: Ordenar por mes

const months = ['March', 'Jan', 'Feb', 'Dec'];

months.sort();
console.log(months);

// Ejercicio: Ordenar palabras

const wordsSort = ['reservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];

wordsSort.sort((a,b) => a.localeCompare(b)); // .localeCompare() es para navegadores y versiones antiguas de node
console.log(wordsSort);

// Ejercicio: Ordenar números de mayor a menor

const numbersSort = [1, 30, 4, 21, 100000];

numbersSort.sort((a,b) => b - a); // Para ordenar de menor a mayor basta con invertir a y b
console.log(numbersSort);

// Ejercicio: Ordenar objetos en base a una de sus propiedades

const ordersSort = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

ordersSort.sort((a,b) => b.total - a.total);
console.log(ordersSort);
// --------------------------

// .slice() - INMUTABLE - Devuelve una copia del array original con los elementos que se le indiquen por medio de uno o dos indices, el primero a partir de que elemento hará el corte (incluyéndolo), y el segundo hasta donde mas uno.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

// Si solo se indica el inicio del slice(), devolverá a partir de ese elemento hasta el final del array.
console.log(animals.slice(2)) // [ 'camel', 'duck', 'elephant' ]

// 2 equivale a 'camel', y aunque el indice de 'duck' sea 3, la regla para el indice final es su posición mas uno, por eso aquí es 4.
console.log(animals.slice(2, 4)) // [ 'camel', 'duck' ]

// Aunque el indice final sea mayor al indice del ultimo elemento, funcionara.
console.log(animals.slice(1, 6)) // [ 'bison', 'camel', 'duck', 'elephant' ]

// Para iniciar un slice desde el final se usan números negativos; -1 es el ultimo, -2 el penúltimo y asi sucesivamente, aquí también si no se indica el indice final, devolverá hasta el ultimo elemento del array.
console.log(animals.slice(-2)) // [ 'duck', 'elephant' ]

// Cuando se usa el numero negativo en el indice final, este no se incluye (es otra forma de interpretar el mas uno de cuando es positivo), si no el que sigue al revés.
console.log(animals.slice(2, -1)) // [ 'camel', 'duck' ]

// Si no se le pasa ningún parámetro a .slice(), devuelve el array completo.
console.log(animals.slice()) // [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
// --------------------------

// .forEach() - INMUTABLE - Recibe una función como parámetro y la aplica a cada elemento de un array, puede devolver otro array o solo un elemento por medio de un console.log().

// No crea un nuevo array.

// Siempre devuelve undefined, así que aunque se guarde en una variable y se imprima no funcionara, ejemplo:

const numbersForEach = [1, 2, 3];
const resultForEach = numbersForEach.forEach(num => console.log(num));

console.log(resultForEach); // undefined

// Esta diseñado para efectos secundarios como:
/*
1. Imprimir en consola
2. Modificar datos externos
3. Llamar funciones
*/

// Lleva hasta tres argumentos en este orden:
/*
1. CurrentValue: El valor del elemento actual
2. Index: El índice del elemento (opcional)
3. Array: El array original (opcional)
*/

// Si no se necesita el valor actual (index), basta con poner _ en su lugar, ejemplo:
numbersForEach.forEach((_, index) => console.log(`Solo índice: ${index}`))

// Ejercicio: Imprimir los elementos de un array

const letters = ['a','b','c'];

// Con for
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for',element);
    /*
    for a
    for b
    for c
    */
}

// Con forEach()
letters.forEach(item => console.log('forEach',item))
/*
forEach a
forEach b
forEach c
*/

// Ejercicio: Imprimir los elementos de un array con formato

const fruitsForEach = ['apple', 'banana', 'cherry']

fruitsForEach.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`)
  /*
  1. apple
  2. banana
  3. cherry
  */
})

// Ejercicio: Suma de todos los elementos de un array

const newNumbers = [1, 2, 3, 4, 5]

let sumForEach = 0
newNumbers.forEach(number => sumForEach += number)

console.log('Array of Numbers:',newNumbers) // Array of Numbers: [ 1, 2, 3, 4, 5 ]
console.log('Sum of Numbers:',sumForEach) // Sum of Numbers: 15
// --------------------------

// POO ---------------------------------------------------------------------
/*
• Un objeto es una estructura de datos, los cuales se guardan como:
key: value

• Estructura:
const objeto = {
  propiedad: valor, 
  propiedad: valor, 
  propiedad: valor,
  propiedadTipoObjeto: {},
  método () {},
}

• A pesar de llevar const, esto no hace a un objeto inmutable, solo evita que se reasigne el valor del objeto a otra variable, ejemplo:
const user = { name: 'Alice' }
user.name = 'Bob' // ✅ Permitido
user.age = 25     // ✅ Permitido (Agrega una propiedad)
console.log(user) // { name: 'Bob', age: 25 }
user = { name: 'Charlie' } // ❌ Error: Assignment to constant variable
*/

// Ejemplo:

const persona = {
  nombre: "John",
  edad: 30,
  direccion: {
    calle: "Av Insurgentes 187",
    ciudad: "CDMX",
  },
  saludar () {
    console.log(`Hola, mi nombre es ${persona.nombre}`);
  },
};

// Impresión del objeto

console.log(persona);

// Impresión de la propiedad nombre

console.log(persona.nombre);

// Ejecución del método saludar()

persona.saludar();

// Se pueden agregar propiedades y métodos a un objeto aunque este ya haya sido creado.

// Agregando propiedad

persona.telefono = "555-555-5555";
console.log(persona.telefono);

// Agregando método

persona.despedir = function () {
  console.log("Adios");
};
// NOTA: Al agregar un método después de la creación del objeto, internamente no queda con la sintaxis corta shorthand, si no como una función anónima (propiedad cuyo valor es una función).

persona.despedir();

// Acceder a una propiedad de un objeto anidado dentro del objeto principal

console.log(persona.direccion.calle);

// También se pueden eliminar propiedades y métodos de un objeto ya creado con la palabra delete, ejemplos:

// Eliminando propiedad

delete persona.telefono;
console.log(persona.telefono); // undefined

// Eliminando método

delete persona.despedir;
console.log(persona.despedir); // undefined

// Si, no hay diferencia, al eliminar métodos no es necesario escribir ().
// --------------------------

// CLASES CON FUNCIÓN CONSTRUCTORA -----------------------------------------

function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}
// El this se lee: El/la <propiedad> de este (this), objeto (nombre de la función constructora), equivale al/la <propiedad> que se le pase como parámetro.

/*
• Con const (recomendado por buenas practicas), la variable que guarda la referencia al objeto no puede reasignarse a otro objeto distinto, pero sí se pueden modificar las propiedades internas del objeto y agregar nuevas, ejemplo con objeto literal:

const user1 = { name: 'Alice' }
user1.age = 25 // ✅ Se pueden agregar propiedades
user1 = {} // ❌ No se pueden reasignar

• Con let es menos usado, excepto si se requiere reasignar:

let user2 = { name: 'Bob' }
user2 = { name: 'Charlie' } // ✅ Permitido
*/

// Creación de una instancia de Persona

const persona1 = new Persona("Juan", "Perez", 20);
console.log(persona1);

// Creación de otra instancia de Persona

const persona2 = new Persona("Diego", "De Granda", 35);
console.log(persona2);

/*
• Se pueden agregar propiedades y métodos a un constructor aunque este ya haya sido creado.

• Para hacerlo se hace con prototype, pero lo que se agregue, ademas de agregarse a todas las instancias del objeto, no se agregara directamente a la función constructora, si no a su prototype, que es de donde se crean sus instancias.
*/

// Agregando la propiedad teléfono al prototype de la función constructora de Persona:

Persona.prototype.telefono = "555-555-5555";

// También se pueden agregar propiedades a solo una de las instancias, aquí sin la necesidad de prototype:

persona1.nacionalidad = "Mexicana";

console.log(persona1); // Tiene nacionalidad
console.log(persona2); // No tiene nacionalidad

// Agregando la función saludar() (como función anónima, asi se hace), al prototype de la función constructora de Persona:

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

// Una vez agregada podrá usarse en todas sus instancias

persona1.saludar(); // Hola, me llamo Juan Perez
persona2.saludar(); // Hola, me llamo Diego De Granda
// --------------------------

// CLASES CON SINTAXIS MODERNA ---------------------------------------------

class Person {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const person1 = new Person("Mariana", 25);

person1.saludar();
// --------------------------

// HERENCIA ----------------------------------------------------------------

class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }

  emitirSonido() {
    console.log('El animal emite un sonido');
  }
}

// Sub-clase Perro que extiende (hereda, por extends), de la clase Animal. Usar extends permite usar tanto las propiedades como los métodos de la clase padre.
class Perro extends Animal {
  constructor(nombre, tipo, raza) {
    super(nombre, tipo); // super() se usa junto con extends para llamar al constructor de la clase padre y así inicializar sus propiedades para poder usarlas. Solo se puede usar en el constructor, y para métodos de la clase padre, se usa dentro de otros métodos.
    this.raza = raza; // Solo las nuevas propiedades, propias de la nueva clase, se asignan con this.
  }

  // Sobrescritura de un método, pero aun usando el del padre también
  emitirSonido() {
    super.emitirSonido();
    console.log(`${this.nombre} ladra.`);
  }

  correr() {
    console.log(`${this.nombre} corre alegremente.`);
  }
}

const perro1 = new Perro('Bobby', 'Perro', 'Pug');
console.log(perro1);
perro1.correr();
perro1.emitirSonido();

// Para agregar propiedades y métodos es con las mismas características que función constructora

// Agregando un nuevo método a la instancia perro1
perro1.nuevoMetodo = function () {
  console.log('Método nuevo para la instancia');
};

// Agregando un nuevo método a la clase Perro
Perro.prototype.segundoMetodo = function () {
  console.log('Nuevo método para la clase hija Perro');
};

// Agregando un nuevo método a la clase Animal
Animal.prototype.tercerMetodo = function () {
  console.log('Nuevo método para la clase padre Animal');
};
// --------------------------

// RETO: VALIDACIÓN DE USUARIOS DE UNA RED SOCIAL - ALGORITMO BÁSICO (html)

/* 
Requerimientos del reto:
1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningún timeline.
*/

const usersDatabase = [
  { username: "andres", password: "123", },
  { username: "caro", password: "456", },
  { username: "mariana", password: "789", },
];

const usersTimeline = [
  { username: "Estefany", timeline: "Me encanta Javascript!", },
  { username: "Oscar", timeline: "Bebeloper es lo mejor!", },
  { username: "Mariana", timeline: "A mi me gusta más el café que el té", },
  { username: "Andres", timeline: "Yo hoy no quiero trabajar", },
];

const username = prompt('Ingresa tu usuario');
const password = prompt('Ingresa tu contraseña');

// Si los parámetros de una función son prompt (campo para introducir datos en el navegador), se ejecutaran cuando se llame la función.

function usuarioExistente(username, password) {
  for (let i = 0; i < usersDatabase.length; i++) {
    if (
      usersDatabase[i].username === username &&
      usersDatabase[i].password === password
    ) {
      return true;
    }
  }

  return false;
  // El return false esta fuera del if y este sin else porque si el primer usuario no es el correcto, retornaría false y nunca llegaría al que es. Y no afecta que haya otro return, no reescribirá el resultado del if del for porque cuando dentro de una función se ejecuta un return, la función termina inmediatamente y ya no continúa ejecutando nada más, aunque haya código después.
}

function signIn(username, password) {
  if (usuarioExistente(username, password)) {
    alert(`Bienvenido a tu cuenta ${username}`);
    console.log(usersTimeline);
  } else {
    alert('Usuario o contraseña incorrectos!');
  }
}

signIn(username, password);
// --------------------------

// PROMESAS - ASINCRONÍA ---------------------------------------------------

/*
• Las promesas son un modo de ejecutar código de forma asíncrona en js.
• Se crean con new Promise(resolve, reject).
• Internamente en resolve ira el código que se ejecutara si la promesa se cumple, y en reject el que se ejecutara si no se cumple.

• Estados de las promesas:
pendign
fullfilled
rejected

• Callbacks - Lo que se pasa como parámetro al .then() y .catch() respectivamente al ejecutar la promesa:
resolve
reject

• Métodos para la ejecución de la promesa
.then()
.catch()
*/

// Promesa con asincronía simulada

const promesa = new Promise((resolve, reject) => {
  const operationSuccessFull = true;

  // Los setTimeout llevan al final en milisegundos el tiempo que pasara antes de ejecutar su código. En este caso el setTimeout simula la asincronía.
  setTimeout(() => {
    if (operationSuccessFull) {
      resolve('La operación fue exitosa');
    } else {
      reject('La operación falló');
    }
  }, 2000);
});

// Ejecución de la promesa

/*
• Para ejecutar una promesa, se hace con el nombre de esta junto con .then() y .catch().
• En .then() va el código de resolve de la promesa al cumplirse y en .catch() el de reject cuando no se cumple.
• En el ejemplo, el primer parámetro del .then()/.catch() (sea arrow function o no), se refiere al mensaje o código del resolve/reject de la promesa.
*/

promesa
  .then(successMessage => {
    console.log(successMessage);
  })
  .catch(errorMessage => {
    console.error(errorMessage);
  });
// --------------------------

// ASYNC/AWAIT - ESTÁNDAR DE LA INDUSTRIA ----------------------------------

// Sin async/await

function fetchData() {
  fetch('https://rickandmortyapi.com/api/character') // fetch() obtiene datos de una api y devuelve un objeto Response.
    .then(response => response.json()) // En el primer .then() después del fetch, el primer parámetro de la arrow function representa la respuesta HTTP del fetch, la convierte en formato js (si, js, no lo convierte en json, lo recibe en json y lo convierte a js, a eso se refiere), y la devuelve para el siguiente .then().
    .then(data => console.log(data)) // El .then() siguiente recibe el valor que devuelve el .then() anterior como data, y se imprime en consola.
    .catch(error => console.error('Error:', error)); // El primer parámetro de .catch() recibe el error si cualquiera de las promesas anteriores no se cumplen, si, el fetch y los .then() son promesas.
}

fetchData();

// Con async/await

async function fetchData() {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:',error);
  }
}

/*
• La función empieza con async, y cada código a ejecutar con await, juntos indican que la función es asíncrona y que se esperara la respuesta de cada código a ejecutar (por await), para continuar la ejecución.
• try{} equivale a .then() y catch(){} a .catch().

• Que el resultado de un await se guarde en una variable const es lo ideal.
• Al igual que en otros casos, que la variable sea const no hace que sea inmutable, solo no permite que se le reasigne otro valor, ejemplo:
const arr = await getArray();
arr.push(123); // ✅ Válido, muta el contenido
arr = [1,2,3]; // ❌ Error, no se puede reasignar la variable
*/

fetchData();

/*
• Ventajas de async/await
- Legibilidad: Al cambiar a async/await, el flujo de código se vuelve más natural y fácil de seguir.
- Error Handling: La gestión de errores se centraliza a través de try/catch, lo que simplifica la depuración.
- Simplicidad: Reduce la complejidad asociada con las cadenas de promesas mediante .then().
*/
// --------------------------

// Cargar de forma asíncrona varias peticiones de datos desde una api con for await of, version async de for of.

async function fetchNewData() {
  const urls = [
    'https://rickandmortyapi.com/api/character',
    'https://rickandmortyapi.com/api/location',
    'https://rickandmortyapi.com/api/episode'
  ];

  try {
    for await (let url of urls) {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
    }
    // url es let porque en cada iteración va cambiando de valor.
  } catch (error) {
    console.error('Error:',error);
  }
}

fetchNewData();
// --------------------------

// PETICIONES HTTP - GET, POST, PATCH/PUT, DELETE --------------------------

const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");

/*
• document hace referencia al DOM.
• .querySelector() es para buscar clases (con .), ids (con #), etiquetas, combinaciones, pseudoclases, atributos, etc.
• Si .querySelector() tiene mas de un elemento es una combinación o ruta de selección para el elemento que se busca, como en CSS.
• Si hay varios elementos en la ruta, .querySelector() solo seleccionara el primero, para seleccionar todos es con .querySelectorAll().
• .getElementById() es solo para ids, como en CSS, pero aquí # no es necesario, basta con el nombre y ya.
*/

function sendHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data), // Convierte un objeto js en una cadena json antes de enviarlo
    headers: {
      "Content-Type": "application/json"
    } // Esto le dice al servidor que lo que se envía en body es un json, y siempre va después de body: JSON.stringify(data)
  })
    .then((response) => {
      return response.json();
    });
}

/*
• El return del fetch() es para que sendHTTPRequest() devuelva los datos de la promesa (el fetch()), ya procesados.
• El del response es para enviar el resultado a otro .then() o .catch() y encadenarlo, ya que la arrow function es con return explicito (con {} y return), si no tuviera {} ni return seria implícito y devolvería el resultado automáticamente.
• Una función con fetch que no tenga return al inicio de el es porque solo usa los datos internamente, dentro de la misma función, como impresión en consola por ejemplo.
• En version async/await el return solo va al final.
*/

// GET - Trae los datos y los procesa

async function fetchPosts() {
  const responseData = await sendHTTPRequest("GET", "https://jsonplaceholder.typicode.com/posts"); // GET no necesita el tercer parámetro ya que GET no lleva body para mandar al servidor, e internamente js lo asigna como undefined. Generalmente solo lleva datos cuando el método es POST, PATCH/PUT o DELETE.
  console.log(responseData);
  const listOfPosts = responseData; // Para no hacer cambios en la variable original responseData, el resultado de la función sendHTTPRequest se copia en listOfPosts.

  for (const post of listOfPosts) {
    // Crea el contenedor con sus respectivas etiquetas html, id y clase de cada post
    const postContainer = document.createElement("article"); // .createElement() es para crear el elemento html que se le indique por medio del nombre de su etiqueta entre comillas.
    postContainer.id = post.id; // post.id se refiere al id de cada post en cada iteración, que es la información que se trae con el fetch.
    postContainer.classList.add("post-item"); // .classList.add() agrega la clase que se le indique entre comillas.

    // Crea el titulo de cada post
    const title = document.createElement("h2");
    title.textContent = post.title;

    // Crea el contenido de cada post
    const body = document.createElement("p");
    body.textContent = post.body;

    // Crea el botón de borrar de cada post
    const button = document.createElement("button");
    button.textContent = "DELETE Content";

    // Agregan el titulo, contenido y botón al contenedor de cada post
    postContainer.append(title);
    postContainer.append(body);
    postContainer.append(button);

    // Agrega cada post al elemento del html que corresponda
    listElement.append(postContainer);
  }
}

// .addEventListener() hace que el botón para traer los post este pendiente de si le hacen clic (click en ingles - primer parámetro), para ejecutar la función fetchPosts() (segundo parámetro).
fetchButton.addEventListener("click", fetchPosts);

// POST - Obtiene los datos y los manda

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  };

  sendHTTPRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

// .addEventListener() agrega un listener al form del html para escuchar si se lleva acabo un submit, que solo pasa al dar clic al botón que tenga ese type, y event se refiere al mismo evento.
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que se refresque toda la pagina al hacer clic en el botón.
  const title = event.currentTarget.querySelector("#title").value; // Se lee: Por medio del event, en el objetivo actual (currentTarget), busca el elemento que tenga el query selector que se indique y guarda su valor en la variable title.
  const content = event.currentTarget.querySelector("#content").value;

  createPost(title, content);
});

// DELETE - Localiza el elemento y lo borra

// El listener se agrega al contenedor de todos los posts, y a partir de el es que identificara a que post se le hizo clic para borrarlo.
postList.addEventListener("click", (event) => {
  console.log(event); // Imprime el evento del clic
  if (event.target.tagName === "BUTTON") { // Se lee: Si el tagName del target del event es igual a BUTTON...
    const postId = event.target.closest("article").id; // ... guarda en postId el id del articulo mas cercano del target del event.
    console.log(postId); // Imprime el id

    sendHTTPRequest("DELETE", `https://jsonplaceholder.typicode.com/posts/${postId}`); // Cuando es DELETE, la variable del id se incluye al final del url con /${}, para ello se cambian las comillas por `` (Alt + 96).
  }
});
