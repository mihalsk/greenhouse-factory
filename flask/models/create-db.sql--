CREATE DATABASE zgtdb CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE Goods (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    photo VARCHAR(255),
    count INT NOT NULL,
    is_active BOOLEAN NOT NULL
);

CREATE TABLE Cities (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    coords VARCHAR(255),
    is_active BOOLEAN NOT NULL
);

CREATE TABLE Review (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Author_name VARCHAR(255) NOT NULL,
    text TEXT NOT NULL,
    photo VARCHAR(255),
    is_active BOOLEAN NOT NULL
);


INSERT INTO Cities (name , phone , coords , is_active ) VALUES ('Москва' , '+7(495)123-45-67' , '55.7558° N , 37.6173° E' , true );
INSERT INTO Cities (name , phone , coords , is_active ) VALUES ('Санкт-Петербург' , '+7(812)123-45-67' , '59.9343° N , 30.3351° E' , true );
INSERT INTO Cities (name , phone , coords , is_active ) VALUES ('Новосибирск' , '+7(383)123-45-67' , '55.0084° N , 82.9357° E' , true );
INSERT INTO Cities (name , phone , coords , is_active ) VALUES ('Екатеринбург' , '+7(343)123-45-67' , '56.8389° N , 60.6057° E' , true );
INSERT INTO Cities (name , phone , coords , is_active ) VALUES ('Нижний Новгород' , '+7(831)123-45-67' ,'56.2965° N , 43.9361° E' , true );
INSERT INTO Cities (name , phone , coords , is_active ) VALUES ('Казань' ,'+7(843)123-45-67','55.8304° N , 49.0661° E', true);

INSERT INTO Goods (name, price, photo, count, is_active) VALUES ('Шуруп', 0.50, 'screw.jpg', 1000, true);
INSERT INTO Goods (name, price, photo, count, is_active) VALUES ('Гвоздь', 0.25, 'nail.jpg', 5000, true);
INSERT INTO Goods (name, price, photo, count, is_active) VALUES ('Болт', 1.00, 'bolt.jpg', 2000, true);
INSERT INTO Goods (name, price, photo, count, is_active) VALUES ('Шайба', 0.10,'washer.jpg', 3000,true);
INSERT INTO Goods (name, price, photo, count, is_active) VALUES ('Дюбель',0.75,'dowel.jpg' ,1000,true);
INSERT INTO Goods (name, price, photo, count, is_active) VALUES ('Уголок металлический', 2, 'corner.jpg', 500,true);

INSERT INTO Review (Author_name , text , photo , is_active ) VALUES ('Василий' , '1.jpg' , 'Купили теплицу на этом заводе. Очень довольны качеством и ценой. Спасибо!' , true );
INSERT INTO Review (Author_name , text , photo , is_active ) VALUES ('Анна' , '2.jpg' , 'Заказывали установку теплицы на даче. Работа выполнена быстро и качественно.' , true );
INSERT INTO Review (Author_name , text , photo , is_active ) VALUES ('Егор' , '3.jpg' , 'Приобрели теплицу для дачи на этом заводе. Консультанты помогли выбрать подходящую модель и ответили на все вопросы.' , true );


(\d{2}\.\d{4})