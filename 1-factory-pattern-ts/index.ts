import { EmployeeFactory } from './employee-factory';
import { Employee, EmployeeType } from './model/employee.model';

export class FactoryPatternExample {
  run() {
    const employees: Array<Employee> = [];

    const employeeFactory = new EmployeeFactory();

    employees.push(
      employeeFactory.create('Cem', EmployeeType.Developer)
    );

    employees.push(
      employeeFactory.create('Can', EmployeeType.Developer)
    );

    employees.push(
      employeeFactory.create('Aydın', EmployeeType.Tester)
    );

    employees.push(
      employeeFactory.create('Gökalp', EmployeeType.ProjectManager)
    );

    employees.forEach(employee => {
      employee.say();
    });
  }
}

