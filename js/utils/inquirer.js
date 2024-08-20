// Import inquirer and necessary queries
const inquirer = require('inquirer');
const queries = require('./queries.js');

function menu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit'
            ]
        }
    ]).then(answer => {
        switch (answer.choice) {
            case 'View all departments':
                queries.getDepartments();
                break;
            case 'View all roles':
                queries.getRoles();
                break;
            case 'View all employees':
                queries.getEmployeesWithManagers();
                break;
            case 'Add a department':
                queries.addDepartment();
                break;
            case 'Add a role':
                queries.addRole();
                break;
            case 'Add an employee':
                queries.addEmployee();
                break;
            case 'Update an employee role':
                queries.updateEmployeeRole();
                break;
            case 'Exit':
                console.log('Goodbye!');
                process.exit();
        }
    });
}

module.exports = { menu };