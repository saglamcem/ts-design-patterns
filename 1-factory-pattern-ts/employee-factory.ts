import { Developer } from './model/developer.model';
import { Tester } from './model/tester.model';
import { ProjectManager } from './model/project-manager.model';
import { Employee, EmployeeType } from './model/employee.model';

export class EmployeeFactory {
  create(name: string, type: EmployeeType): Employee {
    switch (type) {
      case EmployeeType.Developer:
        return new Developer(name);
      case EmployeeType.Tester:
        return new Tester(name);
      case EmployeeType.ProjectManager:
        return new ProjectManager(name);
      default:
        throw new Error('Not implemented yet');
        break;
    }
  }
}