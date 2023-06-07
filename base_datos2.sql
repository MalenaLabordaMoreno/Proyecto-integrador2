CREATE SCHEMA base_datos2;
USE base_datos2;

CREATE TABLE users (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
email VARCHAR (200) NOT NULL, 
usuario VARCHAR (150),
contrasena VARCHAR (255) NOT NULL, 
fecha_nacimiento DATE NOT NULL,
dni INT UNSIGNED NOT NULL, 
imagenUsuario VARCHAR (255) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL
);

CREATE TABLE productos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
usuario_id INT UNSIGNED NOT NULL,
nombre_producto VARCHAR (100), 
descripcion VARCHAR (300),
imagen VARCHAR (255) NOT NULL,
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

INSERT INTO users (id, email, usuario, contrasena, fecha_nacimiento, dni, imagenUsuario, createdAt, updatedAt, deletedAt)
VALUES (1,'malena@gmail.com','malenalombardi','2345678','2003-03-03',12345678, 'default-image.png',NULL,NULL,NULL);

INSERT INTO productos (id, usuario_id, nombre_producto, descripcion, imagen, createdAt, updatedAt, deletedAt)
VALUES (1,1,'Cafetera Verde ','Cafetera Verde','cafetera-verde.png',NULL,NULL,NULL);

INSERT INTO comentarios (id, usuario_id, productos_id, comentario, createdAt, updatedAt, deletedAt)
VALUES (1,1,1,'Muy buena cafetera!',NULL,NULL,NULL);
