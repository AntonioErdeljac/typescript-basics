class Person {
  firstName: string;
  lastName: string;

  greet() {
    console.log("Hey");
  }

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person: Person = new Person("Antonio", "Erdeljac");

person.firstName = "Test";
person.lastName = "Test2";

person.getFullName();