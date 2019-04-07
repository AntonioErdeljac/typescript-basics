interface Person2 {
  firstName: string;
  lastName: string;
  getFullName(): string;
}

class Foo implements Person2 {
  firstName: string;
  lastName: string;
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let aPerson: Person2 = new Foo("a", "b");

let someObj = {
  firstName: "Test",
  lastName: "Test",
  foo: "test",
  getFullName: () => "Test"
};

aPerson = someObj;
