interface Teacher {
  readonly firstName: string; // only set at initialization
  readonly lastName: string;  // only set at initialization
  fullTimeEmployee: boolean;  // always required
  yearsOfExperience?: number; // optional
  location: string;           // always required
  [key: string]: any; // allows extra properties
}

const teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Accra",
  contract: true
};

// Directors interface extending Teacher
interface Director extends Teacher {
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
function printTeacher({ firstName, lastName }: Teacher): string {
  return `${firstName} ${lastName}`;
}
interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName}. ${lastName}`;
};


// Interface for the class methods
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
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
}

const Student: StudentConstructor = StudentClass;

// CommonJS export
module.exports = { StudentClass, Student };


