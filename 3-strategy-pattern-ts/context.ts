import { Strategy } from "./strategy";

export class Context {
  private strategy: Strategy | null;

  constructor() {
    this.strategy = null;
  }

  setStrategy(strategy: Strategy | null) {
    if (strategy == null) {
      console.warn('WARNING: The strategy parameter was null');
    }

    this.strategy = strategy;
  }

  executeStrategy(a: number, b: number) {
    if (!this.strategy) {
      return null;
    }

    return this.strategy.execute(a, b);
  }
}
