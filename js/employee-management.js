/*eslint-env browser*/

'use strict';

let employeeList = [
    { name: "Aditya Bhor", title: "Engineer", extension: "1234" },
    { name: "Bob Brown", title: "Designer", extension: "2345" },
    { name: "Charlie Green", title: "Manager", extension: "3456" },
    { name: "Diane Smith", title: "Developer", extension: "4567" },
    { name: "Evan Black", title: "Support", extension: "5678" }
];

// DOM elements
const employeeTable = document.querySelector('#employeesTable tbody');
const employeeCount = document.querySelector('#employeeCount');
const addEmployeeForm = document.querySelector('#addEmployeeForm');
const nameInput = document.querySelector('#name');
const titleInput = document.querySelector('#title');
const extensionInput = document.querySelector('#extension');

// Initial display of employees
window.addEventListener('load', () => {
    displayEmployees();
});

// Function to display employees in the table
function displayEmployees() {
    employeeTable.innerHTML = ''; // Clear table

    // Populate table with each employee
    employeeList.forEach((employee, index) => {
        const row = employeeTable.insertRow();

        row.insertCell(0).textContent = employee.name;
        row.insertCell(1).textContent = employee.title;
        row.insertCell(2).textContent = employee.extension;

        // Delete button
        const deleteCell = row.insertCell(3);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteEmployee(index));
        deleteCell.appendChild(deleteBtn);
    });

    employeeCount.textContent = employeeList.length; // Update employee count
}

// Function to add a new employee
document.querySelector('#addEmployeeBtn').addEventListener('click', addEmployee);

function addEmployee() {
    const name = nameInput.value.trim();
    const title = titleInput.value.trim();
    const extension = extensionInput.value.trim();

    // Validation
    let isValid = true;

    if (name === '') {
        document.querySelector('#nameError').classList.remove('hide');
        isValid = false;
    } else {
        document.querySelector('#nameError').classList.add('hide');
    }

    if (title === '') {
        document.querySelector('#titleError').classList.remove('hide');
        isValid = false;
    } else {
        document.querySelector('#titleError').classList.add('hide');
    }

    if (extension === '') {
        document.querySelector('#extensionError').classList.remove('hide');
        isValid = false;
    } else {
        document.querySelector('#extensionError').classList.add('hide');
    }

    if (!isValid) return;

    // Add new employee
    employeeList.push({ name, title, extension });
    displayEmployees(); // Refresh the employee table
    resetForm(); // Clear form fields
}

// Function to delete an employee
function deleteEmployee(index) {
    employeeList.splice(index, 1); // Remove employee
    displayEmployees(); // Refresh the table
}

// Function to reset form fields
function resetForm() {
    nameInput.value = '';
    titleInput.value = '';
    extensionInput.value = '';
}
