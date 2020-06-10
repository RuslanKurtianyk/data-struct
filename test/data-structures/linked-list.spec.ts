import { LinkedList } from '../../src/data-structures/linked-list';

describe('LinkedList test suite', () => {

  let list: LinkedList<any>;

  beforeEach(() => {
    list = new LinkedList();
  }); 

  afterEach(() => {
    list = null;
  });

  it('SHOULD be defined', () => {
    const list = new LinkedList();
    expect(list).toBeDefined();
    expect(list.getHead()).toBeNull();
    expect(list.getTail()).toBeNull();
  });


  it('Should insert new node to LinkedList', () => {
    list.insertAtBeginning('test');
    expect(list.getHead()).not.toBeNull();
    expect(list.getTail()).not.toBeNull();
    expect(list.getHead().value).toEqual('test');
    expect(list.getTail().value).toEqual('test');
  });

  it('Should insert new node to the beginning of LinkedList');
  it('Should insert new node to the end of LinkedList');
  it('Should insert new node between two nodes in LinkedList');
  it('Should delete node from the beginning of LinkedList');
  it('Should delete node from the end of LinkedList');
  it('Should delete node from the position in LinkedList');
});