import frutas, {verduras} from './data/frutas';
//import frutas from './data/frutas';

console.log(verduras)

const getFrutasById = (id)=>{
    return frutas.find((fruta)=>fruta.id === id)
}

console.log(getFrutasById(2))

const getFrutasByOwner = (color) =>{
    return frutas.filter((fruta)=>fruta.color === color)
}

console.log(getFrutasByOwner('Rojo'))