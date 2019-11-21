export class Employee {
  constructor(
    public name: string,
    public type: EmployeeType
  ) {}

  say() {
    console.log(`I'm ${this.name} and I'm a ${this.type.toString().toLowerCase()}`);
  }
}

export enum EmployeeType {
  Developer = 'Developer',
  Tester = 'Tester',
  ProjectManager = 'Project Manager'
}
