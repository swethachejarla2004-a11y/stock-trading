import Signup from './Signup';

describe('Signup Component', () => {
  test('Signup component exists', () => {
    expect(Signup).toBeDefined();
  });

  test('Signup is a function component', () => {
    expect(typeof Signup).toBe('function');
  });
});

