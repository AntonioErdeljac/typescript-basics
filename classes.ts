export class Person {
  greet() {
    console.log("Hey");
  }

  constructor(protected firstName: string, protected lastName: string) {

  }

  getFirstName(): string {
    return this.firstName;
  }

  setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person: Person = new Person("Antonio", "Erdeljac");

person.getFirstName();

person.setFirstName("Erda");

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