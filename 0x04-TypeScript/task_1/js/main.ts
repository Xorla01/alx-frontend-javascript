interface Teacher {
  readonly firstName: string; // only set at initialization
  readonly lastName: string;  // only set at initialization
  fullTimeEmployee: boolean;  // always required
  yearsOfExperience?: number; // optional
  location: string;           // always required
  [key: string]: any;         // allows extra properties
}

interface Director extends Teacher {
  numberOfReports: number;
}

// Example objects
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Accra",
  contract: true
};

const director1: Director = {
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  location: "Accra",
  numberOfReports: 5,
  contract: true
};

// printTeacherFunction and Implementation
interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

const printTeacher: printTeacherFunction = ({ firstName, lastName }) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));   // J. Doe
console.log(printTeacher({ firstName: "Alice", lastName: "Smith" })); // A. Smith

// StudentClass Interface and Implementation
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string, age: number, location: string): StudentClassInterface;
}

class StudentClass {
  firstName: string;
  lastName: string;
  age: number;
  location: string;

  constructor(firstName: string, lastName: string, age: number, location: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Alias for constructor
const Student: StudentConstructor = StudentClass;

module.exports = { StudentClass, Student };

