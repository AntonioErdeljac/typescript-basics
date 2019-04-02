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
}

let aPerson: Person2 = new Foo();

let someObj = {
  firstName: "Test",
  lastName: "Test",
  foo: "test",
  getFullName: () => "Test"
};

aPerson = someObj;
