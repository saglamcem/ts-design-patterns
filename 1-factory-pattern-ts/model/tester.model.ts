import { Employee, EmployeeType } from './employee.model';

export class Tester extends Employee {
  constructor(
    public name: string,
    public type: EmployeeType = EmployeeType.Tester
  ) {
    super(name, type);
  }
}