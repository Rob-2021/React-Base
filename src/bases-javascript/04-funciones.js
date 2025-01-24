console.log('Hello World!');

// funcion estandar
function saludar(nombre){
    return `Hola ${nombre}`
}
console.log(saludar('Juan'))

// funcion anonima
const saludar1 = function(nombre){
    return `Hola mi nombre es: ${nombre}`
}
console.log(saludar1('Pepe'))

// funcion flecha
const saludar2 = (nombre) => {
    return `Hola mi nombre es: ${nombre}`
}
console.log(saludar2('Paco'))

// funcion flecha simplificada
const saludar3 = (nombre) => `Hola mi nombre es: ${nombre}`
console.log(saludar3('Luis'))

const getUser = ()=>{
    return {
        id: 1234234,
        nombre: 'Juan'
    }
}
console.log(getUser())

const getUser2 = () => ({
    id: 1234234,
    nombre: 'Pedro'
})
console.log(getUser2()) 