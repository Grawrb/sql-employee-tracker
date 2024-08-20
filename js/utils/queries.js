// Import PostgreSQL client
const { Client } = require('pg');

// Create a new PostgreSQL client instance
// and connect to the database
const dotenv = require('dotenv');
const client = new Client({
  user: process.env.USER,
  host: process.env.DATABASE_URL,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

// Connect to the database
client.connect((err)=> {
    if(err) {
        console.log(err);
    } else {
        console.log('Connected to the database');
    }
});

// Get all departments
const getDepartments = (req, res) => {
    client.query('SELECT * FROM department', (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result.rows);
        }
    });
};

// Get all roles
const getRoles = (req, res) => {
    client.query('SELECT * FROM role', (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result.rows);
        }
    });
};

// Get all employees, including their role, department, and manager
const getEmployeesWithManagers = (req, res) => {
    client.query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, employee.manager_id, manager.first_name AS manager_first_name, manager.last_name AS manager_last_name FROM employee INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id LEFT JOIN employee AS manager ON employee.manager_id = manager.id', (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result.rows);
        }
    });
};

// Add a new department
const addDepartment = (req, res) => {
    const { name } = req.body;
    client.query('INSERT INTO department (name) VALUES ($1)', [name], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send('Department added successfully');
        }
    });
};

// Add a new role
const addRole = (req, res) => {
    const { title, salary, department_id } = req.body;
    client.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send('Role added successfully');
        }
    });
};

// Add a new employee
const addEmployee = (req, res) => {
    const { first_name, last_name, role_id, manager_id } = req.body;
    client.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id, manager_id], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send('Employee added successfully');
        }
    });
};

// Update an employee's role
const updateEmployeeRole = (req, res) => {
    const { id, role_id } = req.body;
    client.query('UPDATE employee SET role_id = $1 WHERE id = $2', [role_id, id], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send('Employee role updated successfully');
        }
    });
};

module.exports = {
    getDepartments,
    getRoles,
    getEmployeesWithManagers,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
};