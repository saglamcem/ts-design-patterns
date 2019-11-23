/**
 * This one was inspired by refactoringguru
 * https://refactoring.guru/design-patterns/singleton/typescript/example
 */

import { ProcessManager } from './model/process-manager.model';

export class SingletonPatternExample {
  run() {
    const pm1 = ProcessManager.getInstance();
    const pm2 = ProcessManager.getInstance();

    console.log(pm1.sayNumber());
    console.log(pm2.sayNumber());

    console.log(pm1 === pm2);

    pm1.addProcess({
      state: 'START'
    });

    pm2.addProcess({
      state: 'FINISH'
    });

    pm1.sayProcesses();
    pm2.sayProcesses();
  }
}

