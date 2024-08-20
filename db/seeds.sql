INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Lead', 90000, 1),
    ('Salesperson', 75000, 1),
    ('Lead Engineer', 160000, 2),
    ('Software Engineer', 100000, 2),
    ('Account Manager', 100000, 3),
    ('Accountant', 80000, 3),
    ('Legal Team Lead', 300000, 4),
    ('Lawyer', 200000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Jamie', 'Jacobs', 1, NULL),
    ('Jane', 'Smith', 2, 1),
    ('Brandon', 'Bevins', 3, NULL),
    ('Abby', 'Williams', 4, 3),
    ('John', 'Doe', 5, NULL),
    ('Bob', 'Smith', 6, 5),
    ('David', 'Jones', 7, NULL),
    ('Sarah', 'Johnson', 8, 7);