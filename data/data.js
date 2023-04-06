let lista_productos = [
    {
        id: 1,
        imagen: "/images/products/cafetera-verde.png",
        nombre: "Cafetera Verde",
        decripcion: "Cafetera Verde",
        fecha_de_carga: "2021-05-01",
        usuarios: {
            id: 1,
            nombre: 'Juan Perez',
            email: 'juanperez@gmail.com',
            contrasenia: '',
            fecha_nacimiento: '',
            numero_documento: '',
            foto_perfil: ''
        },
        comentarios: [
            {
                id: 1,
                comentario: "¡Muy buena cafetera! Super comoda",
                usuario: {
                    id: 2,
                    nombre: 'Laura Perez',
                    email: 'lauraperez1@gmail.com',
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
        imagen: "/images/products/citiz-chrome.png",
        nombre: "Cafetera Citiz Chrome",
        decripcion: "Citiz Chrome",
        fecha_de_carga: "2021-05-01",
        usuarios: {
            id: 2,
            nombre: 'Felipe Sanchez',
            email: 'felipesanchez@hotmail.com',
            contrasenia: '',
            fecha_nacimiento: '',
            numero_documento: '',
            foto_perfil: ''
        },
        comentarios: [
            {
                id: 2,
                comentario: "Me encanto esta cafetera, la uso todos los dias",
                usuario: {
                    id: 2,
                    nombre: 'Sofia Lopez',
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
        imagen: "/images/products/creatista-metal.png",
        nombre: "Cafetera Creatista Metal",
        decripcion: "Cafetera Creatista Metal",
        fecha_de_carga: "2021-05-01",
        usuarios: {
            id: 3,
            nombre: 'Luana Vellagio',
            email: '',
            contrasenia: '',
            fecha_nacimiento: '',
            numero_documento: '',
            foto_perfil: ''
        },
        comentarios: [
            {
                id: 3,
                comentario: "Se me habia roto pero lo solucionarion a la perfeccion. Gracias por la atencion personalizada!",
                usuario: {
                    id: 3,
                    nombre: 'Lucas Diaz',
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
        imagen: "/images/products/lattissima-white.png",
        nombre: "Cafetera Lattissima White",
        decripcion: "Cafetera Lattissima White",
        fecha_de_carga: "2021-05-01",
        usuarios: {
            id: 4,
            nombre: 'Liliana Rojas',
            email: '',
            contrasenia: '',
            fecha_nacimiento: '',
            numero_documento: '',
            foto_perfil: ''
        },
        comentarios: [
            {
                id: 4,
                comentario: "Me resulto muy comoda la cafetera",
                usuario: {
                    id: 2,
                    nombre: 'Belen Francia',
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