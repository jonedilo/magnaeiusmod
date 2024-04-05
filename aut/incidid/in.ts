class Person {
  occupation: string;

  constructor(occupation: string) {
    this.occupation = occupation;
  }

  describeOccupation(): string {
    return `This person is a(n) ${this.occupation}.`;
  }
}

// Usage
const person = new Person('Software Developer');
console.log(person.describeOccupation());
