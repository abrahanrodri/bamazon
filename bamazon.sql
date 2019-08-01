DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
item_id INTEGER AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100),
department_name VARCHAR(100),
price DECIMAL(10,2),
stock_quantity INT(100),
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("SD Card", "Electronics", 34.99, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bug Zapper", "Outdoors", 16.99, 55);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Water Bottle", "Excercise", 24.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "Electronics", 1340.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Avengers", "Blu-Ray", 20.99, 89);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone Cable", "Electronics", 14.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Deer Antler", "Dog Products", 30.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pizza Cutter", "Food", 3.99, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dora the Explorer doll", "Toys", 13.99, 66);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yankees Baseball Cap", "Sports Clothing", 34.99, 26);

