CREATE DATABASE learn_nodejs_database

USE learn_nodejs_database

CREATE TABLE sample
(
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE InnoDB

SELECT * FROM sample

CREATE TABLE customers
(
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT customers_email_unique UNIQUE(email),
    CONSTRAINT customers_phone_unique UNIQUE(phone)
) ENGINE InnoDB;

SELECT * FROM customers;

CREATE TABLE products (
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    stock INT NOT NULL,
    category VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE InnoDB;

INSERT INTO products(id, name, price, stock, category) VALUES
    ('P001', 'A', 1000, 100, 'K1'),
    ('P002', 'B', 2000, 89, 'K2'),
    ('P003', 'C', 3000, 40, 'K3'),
    ('P004', 'D', 5000, 20, 'K1'),
    ('P005', 'E', 7000, 100, 'K1')

SELECT * FROM products

CREATE TABLE categories (
    id  INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE InnoDB;

SELECT * FROM categories

CREATE TABLE wallet
(
    id VARCHAR(100) NOT NULL,
    balance INT NOT NULL,
    customer_id VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT wallet_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers(id),
    CONSTRAINT wallet_customer_id_unique UNIQUE (customer_id)
) ENGINE InnoDB;

SELECT * FROM wallet

create table comments(
    id int not null auto_increment,
    customer_id varchar(100) not null,
    title varchar(100) not null,
    description text,
    primary key (id),
    constraint comments_customer_id_fk foreign key (customer_id) references customers (id)
) engine InnoDB;

insert into comments (customer_id, title, description)
values 
    ('BUDI', 'Comment 1', 'Sample Comment 1'),
    ('BUDI', 'Comment 2', 'Sample Comment 2'),
    ('YANTO', 'Comment 1', 'Sample Comment 1'),
    ('YANTO', 'Comment 2', 'Sample Comment 2'),
    ('YANTO', 'Comment 3', 'Sample Comment 3')

select * from comments

CREATE TABLE likes 
(
    customer_id varchar(100) not null,
    product_id varchar(100) not null,
    primary key (customer_id, product_id),
    constraint likes_customer_id_fk foreign key (customer_id) references customers(id),
    constraint likes_product_id_fk foreign key (product_id) references products(id)
) engine innodb;

select * from likes

-- nama table harus diawali `_`
-- constraint fk harus asc berdasarkan nama table
create table _loves(
    A varchar(100) not null,
    B varchar(100) not null,
    primary key (A, B),
    constraint customer_loves_fk foreign key (A) references customers(id),
    constraint product_loves_fk foreign key (B) references products(id)
) engine innodb;

create database learn_nodejs_prisma

use learn_nodejs_prisma

show tables;

desc sample