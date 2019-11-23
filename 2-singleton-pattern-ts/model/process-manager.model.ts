import { Process } from './process.model';

export class ProcessManager {
  private static pManager: ProcessManager;
  
  private constructor(
    private numProcess: number = 0,
    private processes: Process[] = []
  ) {}

  public static getInstance(): ProcessManager {
    if (!ProcessManager.pManager) {
      ProcessManager.pManager = new ProcessManager();
    }

    return ProcessManager.pManager;
  }

  public sayNumber() {
    console.log(this.numProcess);
  }

  public sayProcesses() {
    console.log(this.processes.map(p => JSON.stringify(p)).join(', '));
  }

  public addProcess(process: Process) {
    this.processes.push(process);
  }
}