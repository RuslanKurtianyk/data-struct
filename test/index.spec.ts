import { test } from '../src';

describe('First suite', () => {
  it('first test', () => {
    const res = test('test');
    expect(res).toBe('test');
  });
});