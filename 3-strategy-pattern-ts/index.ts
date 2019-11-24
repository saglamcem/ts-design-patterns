/**
 * This example was inspired by refactoring.guru
 * https://refactoring.guru/design-patterns/strategy
 *
 * Strategy pattern is useful when one wants to substitute different algorithms to do a certain thing at runtime
 */

import { Context } from "./context";
import { ConcreteStrategyAdd } from "./strategies/concrete-strategy-add";
import { ConcreteStrategySubtract } from "./strategies/concrete-strategy-subtract";
import { ConcreteStrategyMultiply } from "./strategies/concrete-strategy-multiply";

export class StrategyPatternExample {
  run() {
    const context = new Context();

    const firstNumber: number = 20;
    const secondNumber: number = 5;

    context.setStrategy(this.getStrategyRandomly());
    const result = context.executeStrategy(firstNumber, secondNumber);

    console.log(result);
  }

  getStrategyRandomly() {
    const random = Math.floor(Math.random() * 10);

    if (random < 3) {
      return new ConcreteStrategyAdd();
    }
    else if (random >= 3 && random < 7) {
      return new ConcreteStrategySubtract();
    }
    else if (random >= 7) {
      return new ConcreteStrategyMultiply();
    }

    return null;
  }
}

