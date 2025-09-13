import { RowID, RowElement } from "./interface";
import * as CRUD from "./js/crud";

// Create row
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert row
const newRowID: RowID = CRUD.insertRow(row);

// Update row
const updatedRow: RowElement = {...row, age: 23};
CRUD.updateRow(newRowID, updatedRow);

// Delete row
CRUD.deleteRow(newRowID);

