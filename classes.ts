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

class Progammer extends Person {
  position: string;

  greet() {
    console.log('hayiii');
  }

  newGreet() {
    super.greet();
  }

  constructor(position: string) {
    super("Antonio", "Erdeljac");

    this.position = position;
  }
}

let progammer: Person = new Progammer("Fullstack web developer");