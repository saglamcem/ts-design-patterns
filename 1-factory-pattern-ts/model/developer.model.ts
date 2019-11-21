import { Employee, EmployeeType } from './employee.model';

export class Developer extends Employee {
  constructor(
    public name: string,
    public type: EmployeeType = EmployeeType.Developer
  ) {
    super(name, type);
  }
}