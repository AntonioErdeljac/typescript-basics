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
