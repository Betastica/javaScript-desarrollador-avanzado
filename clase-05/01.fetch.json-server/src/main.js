import './style.css'
// jsonplaceholder -> Es una página que simula un backend para practicar
const url = 'https://jsonplaceholder.typicode.com/posts/' // Con la barrita al final

//Petición para obtener todos los post
const peticion = fetch(url)

peticion
    .then((res) => {
        console.log(res)
        const info = res.json()
        return info
    })
    .then((data) => {
        console.log(data)
        })

// Petición para obtener un solo post (el 10)
const urlId = url + 10
//console.log(urlId)
const peticionXId = fetch(urlId)

console.log(peticionXId) // promesa

peticionXId
    .then((res) => {
        console.log(res)
        const respuesta = res.json()
        return respuesta
    })
    .then((dataXId) => {
        console.log(dataXId) // post con el ID 10
    })

// Petición para obtener un solo post (con el id: 10)
// Los datos del usuario que creó el post
const urlUsuario = 'https://jsonplaceholder.typicode.com/users/'
const urlIdYUsuario = url + 10
//console.log(urlUsuario)
const peticionXIdConUsuario = fetch(urlIdYUsuario)

console.log(peticionXIdConUsuario) // promesa

peticionXIdConUsuario
    .then((res) => {
        console.log(res)
        const respuesta = res.json()
        return respuesta
    })
    .then((dataXId) => {
        console.log(dataXId) // post con el ID 10
        console.log(dataXId.userId) // id del usuario que creo el post -> usuario -> (id:1)

        const urlUsuarioXId = urlUsuario + dataXId.userId
        console.log(urlUsuarioXId)
    })