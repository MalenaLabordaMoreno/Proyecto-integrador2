let lista_productos = [
    {
        id: 1,
        imagen: "/images/products/img-cafetera-moulinex.jpg",
        nombre: "Heladera Gafa",
        decripcion: "Heladera Gafa 2 puertas con freezer",
        fecha_de_carga: "2021-05-01",
        usuarios: {
            id: 1,
            nombre: 'Juan Perez',
            email: '',
            contrasenia: '',
            fecha_nacimiento: '',
            numero_documento: '',
            foto_perfil: ''
        },
        comentarios: [
            {
                id: 1,
                comentario: "Muy buena heladera",
                usuario: {
                    id: 2,
                    nombre: 'Laura Perez',
                    email: '',
                    contrasenia: '',
                    fecha_nacimiento: '',
                    numero_documento: '',
                    foto_perfil: ''
                }
            }
        ]
    },
    {
        id: 2,
        imagen: "/images/products/img-cafetera-moulinex.jpg",
        nombre: "Heladera Gafa",
        decripcion: "Heladera Gafa 2 puertas con freezer",
        fecha_de_carga: "2021-05-01",
        usuarios: {
            id: 1,
            nombre: 'Juan Perez',
            email: '',
            contrasenia: '',
            fecha_nacimiento: '',
            numero_documento: '',
            foto_perfil: ''
        },
        comentarios: [
            {
                id: 1,
                comentario: "Muy buena heladera",
                usuario: {
                    id: 2,
                    nombre: 'Laura Perez',
                    email: '',
                    contrasenia: '',
                    fecha_nacimiento: '',
                    numero_documento: '',
                    foto_perfil: ''
                }
            }
        ]
    },
    {
        id: 3,
        imagen: "/images/products/img-cafetera-moulinex.jpg",
        nombre: "Heladera Gafa",
        decripcion: "Heladera Gafa 2 puertas con freezer",
        fecha_de_carga: "2021-05-01",
        usuarios: {
            id: 1,
            nombre: 'Juan Perez',
            email: '',
            contrasenia: '',
            fecha_nacimiento: '',
            numero_documento: '',
            foto_perfil: ''
        },
        comentarios: [
            {
                id: 1,
                comentario: "Muy buena heladera",
                usuario: {
                    id: 2,
                    nombre: 'Laura Perez',
                    email: '',
                    contrasenia: '',
                    fecha_nacimiento: '',
                    numero_documento: '',
                    foto_perfil: ''
                }
            }
        ]
    },
    {
        id: 4,
        imagen: "/images/products/img-cafetera-moulinex.jpg",
        nombre: "Heladera Gafa",
        decripcion: "Heladera Gafa 2 puertas con freezer",
        fecha_de_carga: "2021-05-01",
        usuarios: {
            id: 1,
            nombre: 'Juan Perez',
            email: '',
            contrasenia: '',
            fecha_nacimiento: '',
            numero_documento: '',
            foto_perfil: ''
        },
        comentarios: [
            {
                id: 1,
                comentario: "Muy buena heladera",
                usuario: {
                    id: 2,
                    nombre: 'Laura Perez',
                    email: '',
                    contrasenia: '',
                    fecha_nacimiento: '',
                    numero_documento: '',
                    foto_perfil: ''
                }
            }
        ]
    },
]

// }
// usuario: contendrá un objeto literal con los datos de un usuario. Serán los datos del usuario logueado. Los datos deben ser coherentes con la información pedida en el formulario de registro.
// Los datos del usuario deben mostrarse en todos los lugares donde aparezca el header logueado y en “mi perfil”.
// productos: contendrá un array de objetos literales con los datos de los productos. Debe tener al menos 10 productos. Debe ser coherente con la información pedida en el formulario de carga de productos.
// Los datos deben ser coherentes con la información pedida en el formulario de carga de productos.
// La información de los productos debe mostrarse en todos los lugares de la maqueta en donde aparezca un listado de productos por ejemplo en home y en  “mi perfil”.
// comentarios: contendrá un array de objetos literales con los datos de los comentarios que se ven en el detalle de un producto.. La información de cada comentario debe ser:
// nombre de usuario.
// texto del comentario.
// imagen de perfil: no es necesario que coloques una imagen de perfil. Podés dejar la que está ahora en la maqueta.

module.exports = lista_productos;