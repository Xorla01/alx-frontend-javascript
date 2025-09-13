"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Step 2: Create students
const student1 = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 21,
    location: "Accra"
};
const student2 = {
    firstName: "Bob",
    lastName: "Smith",
    age: 23,
    location: "Kumasi"
};
// Step 3: Array of students
const studentsList = [student1, student2];
// Create table
const table = document.createElement("table");
table.style.border = "1";
// Add header row
const headerRow = table.insertRow();
headerRow.insertCell().textContent = "First Name";
headerRow.insertCell().textContent = "Location";
// Add rows for each student
studentsList.forEach((student) => {
    const row = table.insertRow();
    row.insertCell().textContent = student.firstName;
    row.insertCell().textContent = student.location;
});
// Append table to body
document.body.appendChild(table);
//# sourceMappingURL=main.js.map