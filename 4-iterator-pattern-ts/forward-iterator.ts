import { CustomIterator } from "./iterator.interface";

export class ForwardIterator implements CustomIterator {
  private index: number;

  constructor(public items: any[]) {
    this.index = 0;
  }

  hasNext(): boolean {
    return this.index < this.items.length;
  }

  next(): any {
    return this.items[this.index++];
  }
}
