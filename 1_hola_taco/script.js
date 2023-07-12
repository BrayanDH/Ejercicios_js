//
var variable = 1;

let variable2 = 1;

const variable3 = 1;

const variable4 = variable3 + variable2;

// tipos de datos

// string
const string = 'hola mundo';

// number
const number = 111;

// boolean
const boolean = true;

const variable_prueba = string + number;

console.log(variable_prueba);

// estructuras de datos

// array

const array = [1, 2, 3, 4, 5];

// acceder a los elementos de un array

console.log(array[0]);

console.log(array[1]);

// objetos

const persona = {
  nombre: 'María',
  apellido: 'Gandíca',
  edad: 20,
};

console.log(persona);

console.log(persona.nombre);

console.log(persona.apellido);

console.log(persona.edad);

// funciones

function suma(a, b) {
  return a + b;
}

console.log(suma(1, 4));

// funcion resta

function resta(a, b) {
  return a - b;
}

console.log(resta(3, 2));

// funcion multiplicacion

function multiplicacion(a, b) {
  return a * b;
}

console.log(multiplicacion(3, 2));

// funcion division

function division(a, b) {
  return a / b;
}

console.log(division(4, 2));
