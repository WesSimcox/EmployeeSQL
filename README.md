# EmployeeSQL

## User Story
```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```
## Description
This app lets business owners keep track of their employees and the branches in which they work. It lets managers see who they are managing and allows employees to be moved into new positions with new managers.

## Usage
To use this database enter into your console node server.js, after this the choices that you can make appear in the console itself. Use your arrow keys to select the option that you choose. Once you find the option that you want click enter, and you should be prompted with questions relative to the option that you selected.
## Technologies
- Node.js
- Inquirer
- Javascript
- MySQL2
- Console.table
- dotenv

## Authors
Wes Simcox

