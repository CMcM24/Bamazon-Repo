DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(40) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT(5)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fake Christmas Tree (with lights!)", "Home and Decor", 579.99, 450),
       ("Stationary Exercise Bike", "Sports and Fitness", 140.99, 1000),
       ("Gibson Les Paul 100 (Electric Guitar)", "Musical Instruments", 349.99, 987),
       ("25lb Kettle Bell (11.34 kg)", "Sports and Fitness", 45.00, 978),
       ("Lenovo ideapad 330 Laptop", "Electronics", 499.99, 109),
       ("A Real Lightsaber", "Electronics", 99999.99, 82),
       ("Half of a Bongo Drumset", "Musical Instruments", 7.00, 2),
       ("ALPHA Black Lotus (Mint)", "Games and Entertainment", 13907.00, 9000),
       ("The Deathstar Plans", "Electronics", 19.77, 1977),
       ("A Feral Street Cat", "Games and Entertainment", 350.00, 499);

SELECT * FROM products;