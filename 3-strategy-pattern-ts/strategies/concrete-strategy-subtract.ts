import { Strategy } from "../strategy";

export class ConcreteStrategySubtract implements Strategy {
  execute(a: number, b: number): any {
    console.log(`ConcreteStrategySubtract: ${a}, ${b}`);
    return a - b;
  }
}
