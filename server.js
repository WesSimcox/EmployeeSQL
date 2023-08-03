const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
require('dotenv').config();

const connection =mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'MySQL',
    database: 'employeesdb'
});

// connection.connect(function (err) {
//     if (err) {
//       console.error('Error connecting to the database:', err);
//       return;
//     }
//     console.log('Connected to the database!');
//     connection.end();
// });

const start = async () => {
    connection.connect(function (err) {
        if (err) {
            console.error('Error connecting to database:', err);
            return;
        }
        console.log('Connected to database!');

        inquirer.prompt([
            {
                name: 'choice',
                type: 'list',
                message: 'What would you like to accomplish?',
                choices: [
                    'View employees',
                    'View positions',
                    'View departments',
                    'Add employee',
                    'Add position',
                    'Add department',
                    'Update employee position',
                    'Exit'
                ]
            }
        ]).then(({ choice }) => {
            switch (choice) {
                case 'View employees':
                    return viewEmployees();
                case 'View positions':
                    return viewPositions();
                case 'View departments':
                    return viewDepartments();
                case 'Add employee':
                    return addEmployee();
                case 'Add position':
                    return addPosition();
                case 'Add department':
                    return addDepartment();
                case 'Update employee position':
                    return updateEmployeePosition();
                default:
                    return exit();
            }
        });
    });
};

const viewEmployees = () => {
    connection.query('SELECT * FROM employees', (err, result) => {
        if (err) throw err;
        console.table(result);
        start();
    });
};

const viewPositions = () => {
    connection.query('SELECT * FROM positions', (err, result) => {
        if (err) throw err;
        console.table(result);
        start();
    });
};

const viewDepartments = () => {
    connection.query('SELECT * FROM departments', (err, result) => {
        if (err) throw err;
        console.table(result);
        start();
    });
};

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the employee\'s first name?'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the employee\'s last name?'
        },
        {
            type: 'input',
            name: 'position_id',
            message: 'What is the employee\'s position?'
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'Who is the employee\'s manager?'
        }
    ])
    .then((res) => {
        connection.query('INSERT INTO employee SET ?', res, (err, result) => {
            if (err) throw err;
            console.table(result);
            start();
        });
    });
};

const addPosition = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the position title?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the position salary?',
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'What is the position department?'
        },
    ])
    .then((res) => {
        connection.query('INSERT INTO positions SET ?', res, (err, result) => {
            if (err) throw err;
            console.table(result);
            start();
        });
    });
};

const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'department_alias',
            message: 'What is the department name?'
        }
    ])
    .then((res) => {
        connection.query('INSERT INTO department SET ?', res, (err, result) => {
            if (err) throw err;
            console.table(result);
            start();
        });
    });
};

const updateEmployeePosition = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id?'
        },
        {
            type: 'input',
            name: 'position_id',
            message: 'What is the new role id?'
        }
    ])
    .then((res) => {
        connection.query(
            'UPDATE employee SET position_id = ? WHERE id =?',
            [res.position_id, res.id],
            (err, result) => {
                if (err) throw err;
                console.table(result);
                start();
            }
        );
    });
};

const exit = () => {
    connection.end();
    process.exit();
};

start();