// Define the interfaces
export interface Teacher {
  firstName: string;
  lastName: string;
}

export interface Director {
  firstName: string;
  lastName: string;
  numberOfReports: number;
}

// Narrowing function
export function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).numberOfReports !== undefined;
}

// Execute work depending on role
export function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    return "Getting to director tasks";
  }
  return "Getting to work";
}

// Subjects
export type Subjects = "Math" | "History";

// Teach class function
export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  return "Teaching History";
}
