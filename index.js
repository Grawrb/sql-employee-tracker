const { menu } = require('./utils/inquirer.js');
// import { menu } from './utils/inquirer.js';


async function main() {
    try {
        console.log('Welcome to the Employee Tracker!');
        await menu();
    } catch (error) {
        console.error('Error:', error);
    }
  
};

main();
