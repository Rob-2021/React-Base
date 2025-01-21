console.log('Hello World!');

function saludar(nombre){
    return `Hola ${nombre}`
}

console.log(saludar('Juan'))

const saludar1 = function(nombre){
    return `Hola mi nombre es: ${nombre}`
}
console.log(saludar1('Pepe'))

const saludar2 = (nombre) => {
    return `Hola mi nombre es: ${nombre}`
}
console.log(saludar2('Paco'))

const saludar3 = (nombre) => `Hola mi nombre es: ${nombre}`
console.log(saludar3('Luis'))

export const main = () => {
    return (
        <div>main</div>
    )
}