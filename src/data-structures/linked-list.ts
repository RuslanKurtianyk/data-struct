class ListNode<T> {
  public value: T;
  public next: ListNode<T> | null;

  constructor(val: T) {
    this.value = val;
    this.next = null;
  }
}

export class LinkedList<T> {
  private head: ListNode<T> | null = null;

  exists(value: T): boolean {
    let temp = this.head;
    while (temp) {
      if (temp.value === value) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }

  empty(): boolean {
    return this.head === null;
  }

  insert(value: T): void {
    if (this.empty()) {
      this.head = new ListNode(value);
    } else {
      this.insertEnd(value);
    }
  }

  insertBetween(prevNode: ListNode<T>, val: T): void {
    const newNode: ListNode<T> = new ListNode(val);
    prevNode.next = newNode;
    newNode.next = prevNode.next;
  }

  insertStart(value: T): void {
    var newNode: ListNode<T> = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertEnd(value: T): void {
    const newNode = new ListNode(value);
    let temp = this.head;
    if (!temp) {
      return;
    }

    while (temp.next) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  deleteLast(prevNode: ListNode<T>): void {
    prevNode.next = null;
  }

  deleteBetween(prevNode: ListNode<T>, node: ListNode<T>): void {
    prevNode.next = node.next;
  }

  deleteFirst(): void {
    const temp = this.head;
    if (!temp) {
      return;
    }
    this.head = temp.next;
  }

  remove(value: T): void {
    let curr = this.head;
    let prev = this.head;

    if (!this.empty()) {
      while (curr) {
        if (curr.value === value) {
          if (curr == this.head) {
            this.deleteFirst();
          } else if (curr.next == null && !!prev) {
            this.deleteLast(prev);
          } else if (!!prev) {
            this.deleteBetween(prev, curr);
          } else {
            return;
          }
        }

        prev = curr;
        curr = curr.next;
      }
    }
  }
}
