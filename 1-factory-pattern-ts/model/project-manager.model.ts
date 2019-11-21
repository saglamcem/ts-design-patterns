import { Employee, EmployeeType } from './employee.model';

export class ProjectManager extends Employee {
  constructor(
    public name: string,
    public type: EmployeeType = EmployeeType.Tester
  ) {
    super(name, type);
  }

  say() {
    console.log(`My name is ${this.name}, and I studied engineering! :/`);
  }
}