export interface Iterable<T> {
  iterate: (accept: (arg: T) => void) => void;
}

