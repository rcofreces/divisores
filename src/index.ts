let numDivisores: number = Number(prompt("Ingrese un número entero"));
let resultado: number = 0;

function cantidadDeDivisores(valor: number): number {
  let contador: number = 0;
  for (let i: number = 1; i <= valor; i++) {
    if (valor % i === 0) {
      contador++;
      console.log(contador);
    }
  }
  return contador;
}

resultado = cantidadDeDivisores(numDivisores);
console.log(
  `La cantidad de divisores del número ${numDivisores} es: ${resultado}`
);
