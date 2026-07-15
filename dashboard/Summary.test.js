import Summary from './Summary';

describe('Summary Component', () => {
  test('Summary component exists', () => {
    expect(Summary).toBeDefined();
  });

  test('Summary is a function component', () => {
    expect(typeof Summary).toBe('function');
  });
});

