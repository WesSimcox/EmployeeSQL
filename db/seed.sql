USE employeesdb;

INSERT INTO departments (department_alias) VALUES
('Human Resources'),
('Finance and Accounting'),
('Marketing'),
('Sales'),
('Operations'),
('IT'),
('R&D'),
('Production'),
('Legal'),
('Customer Service');

INSERT INTO positions (title, salary, department_id) VALUES
('HR manager', 75000, 1),
('HR Associate', 50000, 1),
('Financial manager', 100000, 2),
('Accountant', 80000, 2),
('Marketing manager', 85000, 3),
('Marketing associate', 65000, 3),
('Sales manager', 70000, 4),
('Sales associate', 50000, 4),
('Operations manager', 80000, 5),
('Operations associate', 60000, 5),
('IT manager', 70000, 6),
('IT associate', 50000, 6),
('R&D director', 80000, 7),
('R&D associate', 70000, 7),
('Production manager', 75000, 8),
('Production worker', 50000, 8),
('Lawyer', 100000, 9),
('Paralegal', 75000, 9),
('Customer Service manager', 50000, 10),
('Customer Service employee', 45000, 10);

INSERT INTO employees (first_name, last_name, position_id, manager_id) VALUES
('Olivia', 'Martinez', 1, NULL),
('Ethan', 'Reynolds', 2, NULL),
('Isabella', 'Thompson', 3, NULL),
('Liam', 'Patel', 4, NULL),
('Sophia', 'Chen', 5, NULL),
('Benjamin', 'Jackson', 6, 1),
('Ava', 'Singh', 7, 2),
('Noah', 'Kim', 8, 3),
('Mia', 'Johnson', 9, 4),
('Alexander', 'Smith', 10, 5);
