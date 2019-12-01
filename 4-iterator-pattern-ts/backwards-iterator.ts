import { CustomIterator } from "./iterator.interface";

export class BackwardsIterator implements CustomIterator {
  private index: number;

  constructor(public items: any[]) {
    this.index = this.items.length - 1;
  }

  hasNext(): boolean {
    return this.index >= 0;
  }

  next(): any {
    return this.items[this.index--];
  }
}
