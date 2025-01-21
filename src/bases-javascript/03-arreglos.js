const arreglo = [1, 2, 3, 4, 5]
console.log(arreglo)

let arreglo2 = [...arreglo, 6]
console.log(arreglo2)

//manipulacion de arrays
const arreglo3 = arreglo2.map(function(numero){
    return numero * 2
})

console.log(arreglo3)