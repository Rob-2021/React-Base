console.log('Hello World!');

const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 45,
    direccion: {
        ciudad: 'Buenos Aires',
        zip: 1234,
        lat: 14.3232,
        lng: 34.923332
    }
}

console.log(persona)
//console.table(persona)

//clonacion de objetos
const persona2 = {...persona}
