const notas = ['A', 'B', 'C', 'D', 'E', 'F']
console.log(notas)
console.log(notas[1])

const [, ,p] = notas
console.log(p)

const retonaArreglo = () =>{
    return ['ABC', 123]
}

const [letras, numeros] = retonaArreglo()
console.log(letras, numeros)

const userState = (valor) =>{
    return [
        valor,
        ()=>{console.log('Hola Mundo')}
    ]
}

const [nombre, setMensaje] = userState('Juan')
console.log(nombre)
setMensaje()