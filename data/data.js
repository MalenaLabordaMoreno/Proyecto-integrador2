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
            contrasenia: 'futbol123',
            fecha_nacimiento: '18/12/04',
            numero_documento: '45023191',
            foto_perfil: '/images/foto-juan.jpg'
        },
        comentarios: [
            {
                id: 2,
                comentario: "¡Muy buena cafetera! Super comoda",
                usuario: {
                    id: 2,
                    nombre: 'Laura Perez',
                    email: 'lauraperez1@gmail.com',
                    contrasenia: 'laurita345',
                    fecha_nacimiento: '15/04/03',
                    numero_documento: '45023494',
                    foto_perfil: '/images/foto-laura.jpg'
                }
            }
        ]
    },
    {
        id: 3,
        imagen: "/images/products/citiz-chrome.png",
        nombre: "Cafetera Citiz Chrome",
        decripcion: "Citiz Chrome",
        fecha_de_carga: "2021-05-01",
        usuarios: {
            id: 3,
            nombre: 'Felipe Sanchez',
            email: 'felipesanchez@hotmail.com',
            contrasenia: 'feli3456',
            fecha_nacimiento: '12/05/02',
            numero_documento: '42034141',
            foto_perfil: '/images/foto-felipe.png'
        },
        comentarios: [
            {
                id: 4,
                comentario: "Me encanto esta cafetera, la uso todos los dias",
                usuario: {
                    id: 4,
                    nombre: 'Sofia Lopez',
                    email: 'sofilopez03@gmail.com',
                    contrasenia: 'sofita2345',
                    fecha_nacimiento: '23/04/03',
                    numero_documento: '43054161',
                    foto_perfil: '/images/foto-sofia.png'
                }
            }
        ]
    },
    {
        id: 5,
        imagen: "/images/products/creatista-metal.png",
        nombre: "Cafetera Creatista Metal",
        decripcion: "Cafetera Creatista Metal",
        fecha_de_carga: "2021-05-01",
        usuarios: {
            id: 5,
            nombre: 'Luana Vellagio',
            email: 'luanavellagio@hotmail.com',
            contrasenia: '2345',
            fecha_nacimiento: '21/05/04',
            numero_documento: '46091181',
            foto_perfil: '/images/foto-luana.png'
        },
        comentarios: [
            {
                id: 6,
                comentario: "Se me habia roto pero lo solucionarion a la perfeccion. Gracias por la atencion personalizada!",
                usuario: {
                    id: 6,
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
        id: 7,
        imagen: "/images/products/lattissima-white.png",
        nombre: "Cafetera Lattissima White",
        decripcion: "Cafetera Lattissima White",
        fecha_de_carga: "2021-05-01",
        usuarios: {
            id: 7,
            nombre: 'Liliana Rojas',
            email: '',
            contrasenia: '',
            fecha_nacimiento: '',
            numero_documento: '',
            foto_perfil: ''
        },
        comentarios: [
            {
                id: 8,
                comentario: "Me resulto muy comoda la cafetera",
                usuario: {
                    id: 8,
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
    {
        id: 9,
        imagen: "/images/products/lattissima-black.png",
        nombre: "Cafetera Lattissima Black",
        decripcion: "Cafetera Lattissima Black",
        fecha_de_carga: "2021-05-01",
        usuarios: {
            id: 9,
            nombre: 'Liliana Rojas',
            email: '',
            contrasenia: '',
            fecha_nacimiento: '',
            numero_documento: '',
            foto_perfil: ''
        },
        comentarios: [
            {
                id: 10,
                comentario: "Me resulto muy comoda la cafetera",
                usuario: {
                    id: 11,
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
    {
        id: 11,
        imagen: "/images/products/mini-black.png",
        nombre: "Cafetera Mini Black",
        decripcion: "Cafetera Mini Black",
        fecha_de_carga: "2021-05-01",
        usuarios: {
            id: 11,
            nombre: 'Azul Landi',
            email: '',
            contrasenia: '',
            fecha_nacimiento: '',
            numero_documento: '',
            foto_perfil: ''
        },
        comentarios: [
            {
                id: 12,
                comentario: "Me resulto muy comoda la cafetera",
                usuario: {
                    id: 12,
                    nombre: 'Ines Rioja',
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
        id: 13,
        imagen: "/images/products/mini-red.png",
        nombre: "Cafetera Mini Red",
        decripcion: "Cafetera Mini Red",
        fecha_de_carga: "2021-05-01",
        usuarios: {
            id: 13,
            nombre: 'Camila Monoy',
            email: '',
            contrasenia: '',
            fecha_nacimiento: '',
            numero_documento: '',
            foto_perfil: ''
        },
        comentarios: [
            {
                id: 14,
                comentario: "Me resulto muy comoda la cafetera",
                usuario: {
                    id: 14,
                    nombre: 'Lisa Suarez',
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
        id: 15,
        imagen: "/images/products/mini-white.png",
        nombre: "Cafetera Mini White",
        decripcion: "Cafetera Mini White",
        fecha_de_carga: "2021-05-01",
        usuarios: {
            id: 15,
            nombre: 'Santiago Bilis',
            email: '',
            contrasenia: '',
            fecha_nacimiento: '',
            numero_documento: '',
            foto_perfil: ''
        },
        comentarios: [
            {
                id: 16,
                comentario: "Me resulto muy comoda la cafetera",
                usuario: {
                    id: 16,
                    nombre: 'Franco Ros',
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