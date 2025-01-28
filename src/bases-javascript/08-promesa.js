const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        //console.log('2 segundos después')
        resolve()
    }, 2000)
})

miPromesa.then(() => {
    console.log('Then de la promesa')
})


// const fechData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const succes = true
//             if (succes) {
//                 resolve('Operacion exitosa')
//             }
//             else {
//                 reject('Ocurrio un error')
//             }
//         }, 2000)
//     })
// }

// fechData().then((data) => { console.log(data) })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log('Operacion finalizada')
//     })


const fechData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Datos obtenidos')
        }, 2000)
    })
}

const procesoData = async () => {
    try {
        const data = await fechData()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

procesoData()