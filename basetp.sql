CREATE SCHEMA base_datos;
USE base_datos;

CREATE TABLE users (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
email VARCHAR (200) NOT NULL, 
usuario VARCHAR (150),
contrasena VARCHAR (100) NOT NULL, 
fecha_nacimiento DATE NOT NULL, 
dni INT UNSIGNED NOT NULL, 
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL
);

CREATE TABLE productos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
usuario_id INT UNSIGNED NOT NULL,
nombre_producto VARCHAR (100), 
descripcion VARCHAR (300),
FOREIGN KEY (usuario_id) REFERENCES users(id),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL
);

CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
usuario_id INT UNSIGNED NOT NULL,
productos_id INT UNSIGNED NOT NULL, 
comentario VARCHAR (500),
FOREIGN KEY (usuario_id) REFERENCES users(id),
FOREIGN KEY (productos_id) REFERENCES productos(id),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL
);

INSERT INTO users (id, email, usuario, contrasena, fecha_nacimiento, dni, createdAt, updatedAt, deletedAt)
VALUES (1,'malena@gmail.com','malenalombardi','2345678','2003-03-03',12345678,NULL,NULL,NULL),
(2,'serena@gmail.com','serenalaborde','45678','2004-04-04',09567832,NULL,NULL,NULL),
(3,'sofia@gmail.com','sofiasanchez','rtyui34','2002-02-02',3678012,NULL,NULL,NULL),
(4,'nacho@gmail.com','nachosantos','23456yhg','2001-01-09',36721569,NULL,NULL,NULL),
(5,'franco@gmail.com','francoithurre','2345tyg','2005-09-09',09125634,NULL,NULL,NULL);

INSERT INTO productos (id, usuario_id, nombre_producto, descripcion, createdAt, updatedAt, deletedAt)
VALUES (1,1,'Cafetera Verde ','Cafetera Verde',NULL,NULL,NULL),
(2,2,'Cafetera Citiz Chrome','Cafetera Citiz Chrome',NULL,NULL,NULL),
(3,3,'Cafetera Creatista Metal ','Cafetera Creatista Metal',NULL,NULL,NULL),
(4,4,'Cafeteras Latissima White ','Cafetera Latissima White',NULL,NULL,NULL),
(5,5,'Cafetera Latissima White ','Cafetera Latissima Black',NULL,NULL,NULL),
(6,1,'Cafetera Mini Black','Cafetera Mini Black',NULL,NULL,NULL),
(7,2,'Cafetera Mini Red','Cafetera Mini Red',NULL,NULL,NULL),
(8,3,'Cafetera Mini White','Cafetera Mini White',NULL,NULL,NULL),
(9,4,'Cafetera Marron','Cafetera Marron',NULL,NULL,NULL),
(10,5,'Cafetera Violeta ','Cafetera Violeta',NULL,NULL,NULL);

INSERT INTO comentarios (id, usuario_id, productos_id, comentario, createdAt, updatedAt, deletedAt)
VALUES (1,1,1,'Muy buena cafetera!',NULL,NULL,NULL),
(2,1,4,'Excelente servici',NULL,NULL,NULL),
(3,1,2,'Gran calidad de productos',NULL,NULL,NULL),
(4,1,4,'Infaltable para mis mañanas',NULL,NULL,NULL),
(5,1,3,'Gran producto para hacer un regalo',NULL,NULL,NULL),
(6,1,6,'Muy mala calidad',NULL,NULL,NULL),
(7,1,4,'Muy cmoda y practica',NULL,NULL,NULL),
(8,1,9,'Mi hijo la usa todo el tiempo ',NULL,NULL,NULL),
(9,2,7,'Muy facil de lavar y usar',NULL,NULL,NULL),
(10,2,8,'Muy practica para viajes',NULL,NULL,NULL),
(11,2,4,'no puede faltar en mi casa',NULL,NULL,NULL),
(12,2,1,'Me salvo la vida',NULL,NULL,NULL),
(13,2,2,'Buena relacion precioo/calidad',NULL,NULL,NULL),
(14,2,5,'Muy buena atencion de los empleados',NULL,NULL,NULL),
(15,2,3,'Gran compra!',NULL,NULL,NULL),
(16,2,5,'Me facina esta cafetera',NULL,NULL,NULL),
(17,2,4,'Gran variedad de productos ',NULL,NULL,NULL),
(18,3,3,'Muy canchero el local',NULL,NULL,NULL),
(19,3,2,'Muy rico cafe',NULL,NULL,NULL),
(20,3,7,'Gran adquisicion en mi casa',NULL,NULL,NULL),
(21,3,6,'La usd todos los dias!',NULL,NULL,NULL),
(22,3,9,'No quede muy contenta despues de la compra',NULL,NULL,NULL),
(23,3,5,'Me encanto esta cafetera',NULL,NULL,NULL),
(24,3,4,'Excelente calidad de cafe',NULL,NULL,NULL),
(25,3,7,'Gran sabor',NULL,NULL,NULL),
(26,4,4,'Gracias por la atencion',NULL,NULL,NULL),
(27,4,3,'Muy buen servicio',NULL,NULL,NULL),
(28,4,2,'Gran catalogo de productos',NULL,NULL,NULL),
(29,4,1,'Excelente',NULL,NULL,NULL),
(30,4,5,'Muy buen sabor de cafe',NULL,NULL,NULL),
(31,4,4,'Muy buena variedad de productos',NULL,NULL,NULL),
(32,4,5,'Lindisimas maquinas ',NULL,NULL,NULL),
(33,4,6,'Cafe delicioso',NULL,NULL,NULL),
(34,5,7,'La recomiendo!',NULL,NULL,NULL),
(35,5,2,'Se ve genial en mi cocina, comprenla!',NULL,NULL,NULL),
(36,5,9,'Me impresiono ',NULL,NULL,NULL),
(37,5,7,'La cafetera ha cambiado mi rutina ',NULL,NULL,NULL),
(38,5,6,'Diseños excelentes y modernos',NULL,NULL,NULL),
(39,5,5,'Esperaba mas. Insatisfecho',NULL,NULL,NULL),
(40,5,4,'Sabor excepcional ',NULL,NULL,NULL);