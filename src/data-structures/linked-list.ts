import { Iterable } from './types';

export interface Node<T> {
    value: T;
    next?: Node<T>;
    previous?: Node<T>;
}

export class LinkedList<T> implements Iterable<T> {
    private readonly EMPTY_NODE: Node<T> = { value: null, next: null };
    private head: Node<T> = null;
    private tail: Node<T> = null;

    public getHead(): Node<T> {
        return this.head;
    };

    public getTail(): Node<T> {
        return this.tail;
    };

    public insertAtBeginning(value: T): LinkedList<T> {
        const node = this.forgeNode(value);

        node.next = this.head;
        if (this.head) {
            this.head.previous = node;
        }

        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }

        return this;
    };

    public insertAtEnd(value: T): LinkedList<T> {
        const node = this.forgeNode(value);
        const currentTail = this.getTail();
        currentTail.next = node;
        node.previous = currentTail;
        this.tail = node;

        return this;
    };

    public delete(value: T): boolean {
        let deleted: boolean = false;
        if (this.isEmpty()) {
            return deleted;
        }

        deleted = this.deleteFromHead(value);

        let current = this.head || this.EMPTY_NODE;
        while (current.next) {
            if (current.next.value === value) {
                deleted = true;
                if (current.next.next && current.next.next.previous) {
                    current.next.next.previous = current;
                }
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }

        if (this.tail.value === value) {
            this.tail = current;
        }
        return deleted;
    };

    public fromArray(values: T[]): LinkedList<T> {
        values.forEach((value: T): LinkedList<T> => {
          const node = this.forgeNode(value);
  
          if (this.isEmpty()) {
              this.head = node;
              this.tail = node;
              return this;
          }
          
          // Append to the end of list
          node.previous = this.tail;
          this.tail.next = node;
          this.tail = node;

          return this;
      });

      return this;
    };

    public toArray = (): T[] => {
        const result: T[] = [];
        this.iterate((item: T) => result.push(item));
        return result;
    };

    public size = (): number => {
        let listSize = 0;
        this.iterate((_: T): number => listSize++);
        return listSize;
    };

    public isEmpty = () => !this.head;

    public iterate = (accept: Function) => {
        let node = this.head;
        while (node) {
            accept(node.value);
            node = node.next;
        }
    };

    private deleteFromHead = (value: T): boolean => {
        let deleted: boolean = false;
        while (this.head && this.head.value === value) {
            deleted = true;
            this.head = this.head.next;
            if (this.head) {
                this.head.previous = null;
            }
        }
        return deleted;
    };

    private forgeNode = (value: T): Node<T> => {
        return { value, next: null, previous: null };
    };

}