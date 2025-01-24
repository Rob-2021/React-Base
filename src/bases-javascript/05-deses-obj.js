const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 45
}

// console.log(persona)

// console.log(persona.nombre)
// console.log(persona.edad)

// desestructuracion de objetos
const {nombre, apellido, edad} = persona
// console.log(nombre, apellido)
// console.log(apellido)

const retornaPersona=(usuario)=>{
    const {nombre} = usuario
    console.log(nombre)
}
retornaPersona(persona)

// desestructuracion de objetos en argumentos
const retornaPersona2 = ({apellido}) =>{
    console.log(apellido)
}
retornaPersona2(persona)

const useContext =({nombre, edad})=>{
    return {
        primerNombre: nombre,
        anios: edad,
    }
}

const estudiante = useContext(persona)
console.log(estudiante)