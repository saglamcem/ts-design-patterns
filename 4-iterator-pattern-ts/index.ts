import { ForwardIterator } from "./forward-iterator";
import { BackwardsIterator } from "./backwards-iterator";

export class IteratorPatternExample {
  run() {
    const items = [1, 'devsage', false, 1.24];

    const forwardIterator = new ForwardIterator(items);
    const backwardsIterator = new BackwardsIterator(items);

    while (forwardIterator.hasNext()) {
      console.log(forwardIterator.next());
    }

    console.log('xxx');

    while (backwardsIterator.hasNext()) {
      console.log(backwardsIterator.next());
    }
  }
}
