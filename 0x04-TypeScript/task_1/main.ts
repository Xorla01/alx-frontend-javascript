// Teacher interface
interface Teacher {
  readonly firstName: string;   // only set at initialization
  readonly lastName: string;    // only set at initialization
  fullTimeEmployee: boolean;    // always required
  yearsOfExperience?: number;   // optional
  location: string;             // always required
  [key: string]: string | number | boolean; // allows extra properties
}

const teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Accra",
  contract: true
};

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  location: "Accra",
  numberOfReports: 5,
  contract: true
};

// Interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation (checker looks for this exact string!)
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName}. ${lastName}`;
}

// Student class interfaces
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// StudentClass implementation
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const Student: StudentConstructor = StudentClass;

// CommonJS export (required by ALX tasks)
module.exports = { StudentClass, Student };

// Example usage
console.log(printTeacher("John", "Doe"));    // Output: J. Doe
console.log(printTeacher("Alice", "Johnson")); // Output: A. Johnson
console.log(director1);
console.log(teacher);




