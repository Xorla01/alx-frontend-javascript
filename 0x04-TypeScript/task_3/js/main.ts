import { RowID, RowElement } from "./interface";
import * as CRUD from "./js/crud";

// Create a row
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert row
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row id: ${newRowID}`);

// Update row (this is what the task requires)
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated row id: ${newRowID}`);

// Delete row
CRUD.deleteRow(newRowID);
console.log(`Deleted row id: ${newRowID}`);

