CREATE DATABASE EcommDb;

USE EcommDb;

CREATE TABLE categories (
    category_id INT IDENTITY(1,1) PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

CREATE TABLE brands (
    brand_id INT IDENTITY(1,1) PRIMARY KEY,
    brand_name VARCHAR(255) NOT NULL
);

CREATE TABLE products (
    product_id INT IDENTITY(1,1) PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    brand_id INT,
    category_id INT,
    model_year SMALLINT,
    list_price DECIMAL(10,2),

    FOREIGN KEY (brand_id) REFERENCES brands(brand_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

CREATE TABLE customers (
    customer_id INT IDENTITY(1,1) PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    phone VARCHAR(25),
    email VARCHAR(255),
    street VARCHAR(255),
    city VARCHAR(50),
    state VARCHAR(25),
    zip_code VARCHAR(5)
);

CREATE TABLE stores (
    store_id INT IDENTITY(1,1) PRIMARY KEY,
    store_name VARCHAR(255),
    phone VARCHAR(25),
    email VARCHAR(255),
    street VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(10),
    zip_code VARCHAR(5)
);

INSERT INTO categories(category_name) VALUES 
('Mountain Bikes'),
('Road Bikes'),
('Electric Bikes'),
('Kids Bikes'),
('Hybrid Bikes');

INSERT INTO brands(brand_name) VALUES
('Trek'),
('Giant'),
('Specialized'),
('Cannondale'),
('Scott');

INSERT INTO products(product_name, brand_id, category_id, model_year, list_price) VALUES
('Trek X-Caliber 8',1,1,2022,1200),
('Giant Defy Advanced',2,2,2023,2500),
('Specialized Turbo Vado',3,3,2023,3200),
('Cannondale Kids Trail',4,4,2021,400),
('Scott Sub Cross',5,5,2022,900);

INSERT INTO customers(first_name,last_name,phone,email,street,city,state,zip_code) VALUES
('Ajay','Kumar','9876543210','ajay@gmail.com','Main Street','Hyderabad','TS','50000'),
('Rahul','Sai','9876543211','rahul@gmail.com','MG Road','Vijayawada','AP','11000'),
('Tarun','Reddy','9876543212','tarun@gmail.com','Banjara Hills','Hyderabad','TS','50034'),
('Kiran','Patel','9876543213','kiran@gmail.com','Ring Road','Ongole','Ap','58001'),
('Snehith','Sai','9876543214','snehith@gmail.com','Kr Nagar','Bang','KA','60040');

INSERT INTO stores(store_name,phone,email,street,city,state,zip_code) VALUES
('Hyderabad Bikes','9000000001','hydstore@email.com','Madhapur','Hyderabad','TS','50081'),
('Delhi Cycles','9000000002','delhistore@email.com','Connaught Place','Delhi','DL','10001'),
('Chennai Wheels','9000000003','chennaistore@email.com','T Nagar','Chennai','TN','60017'),
('Bangalore Ride','9000000004','blrstore@email.com','Indiranagar','Bangalore','KA','60038'),
('Mumbai Bikes','9000000005','mumstore@email.com','Andheri','Mumbai','MH','40053');

SELECT p.product_name,b.brand_name,c.category_name,p.model_year,p.list_price
FROM products p
JOIN brands b
ON p.brand_id = b.brand_id
JOIN categories c
ON p.category_id = c.category_id;

SELECT *FROM customers
WHERE city = 'Hyderabad';

SELECT c.category_name,COUNT(p.product_id) AS total_products
FROM categories c
LEFT JOIN products p
ON c.category_id = p.category_id
GROUP BY c.category_name;