import Calc from './utils/calcUtils';

it('renders without crashing', () => {
  expect(Calc.sum(1+2)).toBe(3)
});

test('times to be repeat', () => {
  expect(Calc.times(2, 6)).toBe(12)
})