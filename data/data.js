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
            fecha_nacimiento: '2018-05-01',
            numero_documento: '45023191',
            foto_perfil: '/images/foto-juan.jpg'
        },
        comentarios: [
            {
                id: 1,
                comentario: "¡Muy buena cafetera! Super comoda",
                usuario: {
                    id: 1,
                    nombre: 'Laura Perez',
                    email: 'lauraperez1@gmail.com',
                    contrasenia: 'laurita345',
                    fecha_nacimiento: '2004-06-10',
                    numero_documento: '45023494',
                    foto_perfil: '/images/foto-laura.jpg'
                }
            }
        ]
    },
    {
        id: 2,
        imagen: "/images/products/citiz-chrome.png",
        nombre: "Cafetera Citiz Chrome",
        decripcion: "Citiz Chrome",
        fecha_de_carga: "2021-10-01",
        usuarios: {
            id: 2,
            nombre: 'Felipe Sanchez',
            email: 'felipesanchez@hotmail.com',
            contrasenia: 'feli3456',
            fecha_nacimiento: '2003-10-21',
            numero_documento: '42034141',
            foto_perfil: '/images/foto-felipe.png'
        },
        comentarios: [
            {
                id: 3,
                comentario: "Me encanto esta cafetera, la uso todos los dias",
                usuario: {
                    id: 3,
                    nombre: 'Sofia Lopez',
                    email: 'sofilopez03@gmail.com',
                    contrasenia: 'sofita2345',
                    fecha_nacimiento: '2001-01-01',
                    numero_documento: '43054161',
                    foto_perfil: '/images/foto-sofia.png'
                }
            }
        ]
    },
    {
        id: 4,
        imagen: "/images/products/creatista-metal.png",
        nombre: "Cafetera Creatista Metal",
        decripcion: "Cafetera Creatista Metal",
        fecha_de_carga: "2021-05-01",
        usuarios: {
            id: 4,
            nombre: 'Luana Vellagio',
            email: 'luanavellagio@hotmail.com',
            contrasenia: '2345',
            fecha_nacimiento: '2001-12-01',
            numero_documento: '46091181',
            foto_perfil: '/images/foto-luana.png'
        },
        comentarios: [
            {
                id: 5,
                comentario: "Se me habia roto pero lo solucionarion a la perfeccion. Gracias por la atencion personalizada!",
                usuario: {
                    id: 5,
                    nombre: 'Lucas Diaz',
                    email: 'lucasdiaz1@gmail.com',
                    contrasenia: '34563456',
                    fecha_nacimiento: '2003-04-12',
                    numero_documento: '42098769',
                    foto_perfil: '/images/foto-juan.jpg'
                }
            }
        ]
    },
    {
        id: 6,
        imagen: "/images/products/lattissima-white.png",
        nombre: "Cafetera Lattissima White",
        decripcion: "Cafetera Lattissima White",
        fecha_de_carga: "2021-05-01",
        usuarios: {
            id: 6,
            nombre: 'Liliana Rojas',
            email: 'lilita12345@gmail.com',
            contrasenia: 'liliana1234',
            fecha_nacimiento: '2001-05-15',
            numero_documento: '47345876',
            foto_perfil: '/images/foto-luana.png'
        },
        comentarios: [
            {
                id: 7,
                comentario: "Me resulto muy comoda la cafetera. Definitivamente la volveria a comprar! :)",
                usuario: {
                    id: 7,
                    nombre: 'Belen Francia',
                    email: 'belenitafrancia@hotmail.com',
                    contrasenia: '234567',
                    fecha_nacimiento: '2002-11-03',
                    numero_documento: '45067678',
                    foto_perfil: '/images/foto-luana.png'
                }
            }
        ]
    },
    {
        id: 8,
        imagen: "/images/products/lattissima-black.png",
        nombre: "Cafetera Lattissima Black",
        decripcion: "Cafetera Lattissima Black",
        fecha_de_carga: "2023-10-01",
        usuarios: {
            id: 8,
            nombre: 'Felix Rojas',
            email: 'felixrojas@gmail.com',
            contrasenia: '234567',
            fecha_nacimiento: '2001-04-04',
            numero_documento: '45087611',
            foto_perfil: '/images/foto-juan.jpg'
        },
        comentarios: [
            {
                id: 9,
                comentario: "Amo esta cafetera. Agradezco que me la hayan recomendado! y el servicio 10/10",
                usuario: {
                    id: 9,
                    nombre: 'Solana Gomez',
                    email: 'solanagomezz@gmail.com',
                    contrasenia: '34956',
                    fecha_nacimiento: '2003-01-04',
                    numero_documento: '43212447',
                    foto_perfil: '/images/foto-laura.jpg'
                }
            }
        ]
    },
    {
        id: 10,
        imagen: "/images/products/mini-black.png",
        nombre: "Cafetera Mini Black",
        decripcion: "Cafetera Mini Black",
        fecha_de_carga: "2023-05-01",
        usuarios: {
            id: 10,
            nombre: 'Azul Landi',
            email: 'azullandi@hotmail.com',
            contrasenia: '234567',
            fecha_nacimiento: '2003-04-21',
            numero_documento: '45027191',
            foto_perfil: '/images/foto-laura.jpg'
        },
        comentarios: [
            {
                id: 11,
                comentario: "Soy fan de esta cafetera y su espumador",
                usuario: {
                    id: 11,
                    nombre: 'Luz Beraja',
                    email: 'luzberaja@yahoo.com',
                    contrasenia: '3456456luz',
                    fecha_nacimiento: '2001-05-04',
                    numero_documento: '41027191',
                    foto_perfil: '/images/foto-laura.jpg'
                }
            }
        ]
    },
    {
        id: 12,
        imagen: "/images/products/mini-red.png",
        nombre: "Cafetera Mini Red",
        decripcion: "Cafetera Mini Red",
        fecha_de_carga: "2022-10-10",
        usuarios: {
            id: 12,
            nombre: 'Camila Monoy',
            email: 'camilamonoyy@gmail.com',
            contrasenia: '456789',
            fecha_nacimiento: '2001-05-02',
            numero_documento: '45676545',
            foto_perfil: '/images/foto-laura.jpg'
        },
        comentarios: [
            {
                id: 13,
                comentario: "El mejor lugar para comprar cafeteras sin lugar a dudas",
                usuario: {
                    id: 13,
                    nombre: 'Lisa Suarez',
                    email: 'lisitasuarez@hotmail.com',
                    contrasenia: '234567',
                    fecha_nacimiento: '2003-05-03',
                    numero_documento: '45676232',
                    foto_perfil: '/images/foto-sofia.png'
                }
            }
        ]
    },
    {
        id: 14,
        imagen: "/images/products/mini-white.png",
        nombre: "Cafetera Mini White",
        decripcion: "Cafetera Mini White",
        fecha_de_carga: "2021-05-01",
        usuarios: {
            id: 14,
            nombre: 'Santiago Bilis',
            email: 'santiagobilis@hotmail.com',
            contrasenia: '234567',
            fecha_nacimiento: '2001-04-05',
            numero_documento: '42090878',
            foto_perfil: '/images/foto-juan.jpg'
        },
        comentarios: [
            {
                id: 15,
                comentario: "Fan de Cafe Store BA. Nunca tuve ni un problema. AMO sus cafeteras",
                usuario: {
                    id: 15,
                    nombre: 'Franco Ros',
                    email: 'francoros23@gmail.com',
                    contrasenia: '345678',
                    fecha_nacimiento: '1998-03-21',
                    numero_documento: '34028191',
                    foto_perfil: '/images/foto-juan.jpg'
                }
            }
        ]
    },
]

module.exports = lista_productos;