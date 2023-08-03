DROP DATABASE IF EXISTS employeesdb;

CREATE DATABASE employeesdb;

USE employeesdb;

CREATE TABLE departments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  department_alias VARCHAR(255) NOT NULL
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