/*let num1: number = Number(prompt("Ingrese el dividendo"));
let num2: number = Number(prompt("Ingrese el divisor"));

function esMultiplo(num1: number, num2: number): boolean {
  let verdadero: boolean = true;
  let falso: boolean = false;
  let resultado: boolean;
  if (num1 % num2 === 0) {
    resultado = verdadero;
  } else {
    resultado = falso;
  }
  return resultado;
}

console.log("El resultado es: ", esMultiplo(num1, num2));*/

let numEntero: number = Number(prompt("Ingrese un número entero"));

function cantidadDeDivisores(numEntero: number): number {
  let cantidad: number = 0;
  let divisor: number;
  for (divisor = 0; divisor <= numEntero; divisor++) {
    if (esMultiplo(num1, num2)) {
      cantidad++;
    } else {
    }
  }
  return cantidad;
}

let cantidadDivisores: number = cantidadDeDivisores(numEntero);
console.log(
  `La cantidad de divisores del número ${numEntero} es: ${cantidadDivisores}`
);
