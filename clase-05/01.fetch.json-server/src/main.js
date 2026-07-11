import './style.css'
// jsonplaceholder -> Es una página que simula un backend para practicar
const url = 'https://jsonplaceholder.typicode.com/posts/' // Con la barrita al final

//! Petición para obtener todos los post
const peticion = fetch(url)

peticion
    .then((res) => {
        //console.log(res)
        const info = res.json()
        return info
    })
    .then((data) =>{
        console.log(data);
    })

// ! Petición para obtener un solo post (el 10)
    const urlId = url + 10
    //console.log(urlId)
    const peticionXId = fetch(urlId)

    // console.log(peticionXId) // promesa

    peticionXId
        .then((res) => {
            //console.log(res)
            const promesaJson = res.json()
            return promesaJson
        })
        .then((dataXId) => {
            //console.log(dataXId) // post -> id -> 10
        })
// ! Petición para obtener un solo post (con el id: 10)
// Los datos del usuario que creo ese post
const urlUsuario = 'https://jsonplaceholder.typicode.com/users/'
const urlIdYUsuario = url + 10 // 'https://jsonplaceholder.typicode.com/posts/' + 10
//console.log(urlIdYUsuario)
const peticionXIdConUsuario = fetch(urlIdYUsuario)

//console.log(peticionXId) // promesa

/* peticionXIdConUsuario
        .then((res) => {
            //console.log(res)
            const promesaJson = res.json()
            return promesaJson
        })
        .then((dataXId) => {
            //console.log(dataXId) // post -> id -> 10
            //console.log(dataXId.userId) // id del usuario que creó el post -> usuario -> (id: 1)

            const urlUsuarioXId = urlUsuario + dataXId.userId
            //console.log(urlUsuarioXId)

            const peticionUsuario = fetch(urlUsuarioXId)
            
            return peticionUsuario
        })
        .then(resUsuario =>{
            //console.log(resUsuario)
            return resUsuario.json()
        })
        .then(dataUsuario => {
            //console.log(dataXId)
            console.log(dataUsuario)
        })
        .catch(err => {
            console.error(err)
        }) */


//! Peticiones async con then y catch
peticionXIdConUsuario
        .then((res) => {
            console.log(res)
            if (!res.ok) {
                throw new Error('No se pudo hacer la petición para obtener el post')
            }
            return res.json()
        })
        .then((dataXId) => {
            console.log(dataXId)
            const urlUsuarioXId = urlUsuario + dataXId.userId
            return fetch(urlUsuarioXId)
        })
        .then(resUsuario => {
            console.log(resUsuario)
            if (!resUsuario.ok) {
                throw new Error('No se pudo obtener el usuario relacionado con el post')
            }
            return resUsuario.json()
        })
        .then(dataUsuario => console.log(dataUsuario))
        .catch(err => console.error(err))

//! Peticiones async con async y await