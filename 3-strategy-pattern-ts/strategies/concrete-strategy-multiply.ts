import { Strategy } from "../strategy";

export class ConcreteStrategyMultiply implements Strategy {
  execute(a: number, b: number): any {
    console.log(`S1: ${a}, ${b}`);
    return a * b;
  }
}
