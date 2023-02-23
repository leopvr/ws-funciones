// Funcion por declaracion ------------
function saludar() {
  console.log("Hola mundo!");
}
saludar();

// ...con parametros
function sumar(numero1, numero2) {
  console.log(numero1 + numero2);
}
sumar(5, 5)

// ...con return ---------
function sumarConReturn(numero1, numero2) {
  return numero1 + numero2;
}
const suma = sumarConReturn(22, 5);
console.log(suma)
// console.log(sumarConReturn(22, 5)) // Es lo mismo

// ...con variables
const num1 = 18;
const num2 = 57;
sumarConReturn(num1, num2)


function saludar2(nombre = "usuario") {
  console.log(`Bienvenido ${nombre}`);
}
saludar2("Joaquin")

function multiplicar(tabla, hasta = 11) {
  for (let i = 1; i < hasta; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
  }
}
multiplicar(num1)

// --------- Funciones por expresion ---------
// La diferencia fundamental entre las funciones por declaración y las funciones por expresión es que estas últimas sólo están disponibles a partir de la inicialización de la variable. Si «ejecutamos la variable» antes de declararla, nos dará un error.

function saludar(){
    return "Hola pipis!"
}
const saludo = saludar()
console.log(saludo)

// --------- Arrow function ---------
// Las funciones flecha hacen que el código sea mucho más legible y claro de escribir, mejorando la productividad y la claridad a la hora de escribir código.
const saludo2 = () => {
  return "Hola beshos!";
};
console.log(saludo2())

const saludo3 = () => "Hola sin return!";
console.log(saludo3())

const sumaDeNumeros = (number1, number2) => number1 + number2;
console.log(sumaDeNumeros(num1, num2))

const cuadradoDeUnnumero = number => number * number;
console.log(cuadradoDeUnnumero(3))



// ------------ Callback -----------
// Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
function entradaDeUsuario(fn) {
  let nombre = prompt("Ingrese un nombre: ");
  let nombre2 = prompt("Ingrese otro nombre: ");
  fn(nombre, nombre2);
}

function saludarAgain(a, b) {
  console.log(`Hola ${a} y ${b}`);
}

entradaDeUsuario(saludarAgain);


// ------------------ Ejercicio practico! ------------------
// Realizar una funcion que me devuelva por consola si el numero que le paso como argumento es par o impar
const parOimpar = value => {
  if (value % 2 == 0) {
      return `El numero ${value} es par!`
  } else {
      return `El numero ${value} no es par!`
  }
}
console.log(parOimpar(7))