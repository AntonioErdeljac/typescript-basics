class Member {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

let aMember = new Member("Name");

aMember.name;