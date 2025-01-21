console.log('Hello World!');

const nombre = 'Juan'

const apellido = 'Perez'

const nombreCompleto = nombre + ' ' + apellido

console.log(nombreCompleto)

//template string
const nombreCompleto2 = `El nombre completo es:
${nombre} 
${apellido}`

console.log(nombreCompleto2)

function getSaludo(){
    return 'Buenos dias'
}

console.log(`Este es el mensaje de la funcion getSaludo:
    ${getSaludo()}`)