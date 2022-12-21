import { render } from '@testing-library/react';

test('renders an h1', () => {
  const { getByTest } = render(<App />);
  const h1 = getByTest(/Hello React Testing Library/);
  expect(h1).toHaveTextContent('Hello React Testing Library');
});
