'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factores = [1]
  let aux = 2 
  while (num > 1) {
    if (num % aux === 0) {
      factores.push(aux)
      num = num / aux
    } else {
      aux++
    }
  }
  return factores
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // let aux = 0
  // for (let i = 0; i < array.length - 1; i++) {
  //   for (let j = i + 1; j < array.length; j++) {
  //     if (array[i] > array[j]) {
  //       aux = array[i]
  //       array[i] = array[j]
  //       array[j] = aux
  //     }
  //   }
  // }
  // return array

  let swap = true 
  let aux = 0
  while (swap) {
    swap = false
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        aux = array[i]
        array[i] = array[i + 1]
        array[i + 1] = aux
        swap = true
      }
    }
  }
  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let j = i - 1
    let aux = array[i] //2
    while(j >= 0 && aux < array[j]){
      array[j + 1] = array[j]
      j--
    }
    array[j +1] = aux
  }
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if(array[j] < array[minIndex]){
        minIndex = j 
      }
    }
    if( i !== minIndex){
      let aux = array[i]// 2
      array[i] = array[minIndex]
      array[minIndex] = aux
    }
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
