DROP DATABASE IF EXISTS employeesdb;

CREATE DATABASE employeesdb;

USE employeesdb;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    department_alias VARCHAR(40),
    PRIMARY KEY (id)
);

CREATE TABLE positions (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments (id)
);

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    position_id INT,
    manager_id INT,

    FOREIGN KEY (position_id) REFERENCES positions (id) ON DELETE SET NULL,
    FOREIGN KEY (manager_id) REFERENCES employees (id)
);