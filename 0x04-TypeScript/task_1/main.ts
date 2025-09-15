

interface Teacher {
    readonly firstName: string, // using readonly before the property name 
                                 // prevents the property from being assigned 
                                 // a new value after the object is first initialized
    fullTimeEmployee: boolean,
    readonly lastName: string,
    yearsOfExperience?: number,
    location: string,
    contract: any,

    // creating an index-key to allow addition of any other attribute
    // flexible index signature below
    [key: string]: any;

}

// creating Directors interface
// extending on the teachers interface
interface Director extends Teacher {   
    numberOfReports: number;
}

// Example usage of the Directors interface
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

  // Log the director object to the console
console.log(director1);

// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
// Implement the function that matches the interface

 // Implement the function that matches the interface
 function printTeacher({ firstName, lastName }: { firstName: string, lastName: string }): string {
    return `${firstName}. ${lastName}`;
}
  
  // Example usage
  console.log(printTeacher("John", "Doe"));

  // writing a class named StudentClass
  // constructor of the class should be describe through an interface
  
  // Task 1: Describe the constructor with an interface

  interface StudentConstructor {
    firstName: string;
    lastName: string;
  }

// Task 2: Describe the class through an interface  
interface StudentClassInterface{
    // properties of the class
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// Write a class named StudentClass that implements the StudentClassInterface
class StudentClass {
  // properties of the class
    firstName: string;
    lastName: string;

// The constructor accepts firstName and lastName arguments as described by the StudentConstructor interface
    constructor(public firstName: string, public lastName: string) {}

    // method to return the student's full name
    workOnHomework(): string {
        return 'Currently working';
    }

    // method to return the student's full name
    displayName(): string {
        return this.lastName + ' ' +  this.firstName;
    }
}
