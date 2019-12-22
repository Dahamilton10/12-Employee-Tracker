INSERT INTO department (name)
VALUES ("Sales"), ("Finances"), ("Human Resources"), ("Programming"), ("I.T.");

INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 50000, 1), ("Head of Sales", 130000, 1), ("Accountant", 60000, 2), ("Head of Accounting", 100000, 2), ("HR Representative", 50000, 3), ("Head of HR", 80000, 3), ("Jr. Programmer", 55000, 4), ("Sr. Programmer", 85000, 4), ("Help Desk personnel", 30000, 5), ("Head of I.T.", 70000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Harvey", "Alibastor", 2, NULL),
("Geese", "Thompson", 1, 1),
("Percy", "Monsoon", 4, NULL),
("Terry", "Hintz", 3, 3),
("Nern", "Guan", 6, NULL),
("Olan", "Hoyt", 5, 5),
("Ollie", "Nickels", 8, NULL),
("Fandy", "Hernandez", 7, 7),
("Sonny", "Backluwitz", 10, NULL),
("Clint", "Olympic", 9, 9);