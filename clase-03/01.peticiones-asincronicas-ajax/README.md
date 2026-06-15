Cuando trabajamos con Tailwinds luego en las desktools no aparece en que línea de código se encuentra ese código para cambiar eso debemos hacer lo siguiente:

1. Ir a la página de vite
2. Ir "Shared Options"
3. En en el listado a la derecha "css.devSourcemap"
4. Luego vamos a vite.config.js y creamos una nueva key (css) con otra key adentro (devSourcemap) que diga true:
        * css: {
            devSourcemap: true
        }

* Protocolo HTTP
    Tiene verbos: Se le conoce como CRUD
    ** R: READ   -> GET -> Obtener información (recursos)
    ** C: CREATE -> POST -> Te envío información para que guardes el recurso
    ** U: UPDATE -> PUT y PATCH -> Te envío info para que modifiques un recurso
    ** D: DELETE -> DELETE -> Te envío identificador para que borres el recurso

* API REST: es una interfaz de software que permite a dos sistemas comunicarse a través de internet utilizando el protocolo HTTP

JS: Trabaja de forma sincrónica pero tenemos formas de trabajar asincrónicamente mediante el uso del BOM
 **Tarea 1 (petición) -> fetch (BOM)
 **Tarea 2 (petición) -> fetch (BOM)
 **Tarea 3 (geolocation) -> geolocation (BOM)