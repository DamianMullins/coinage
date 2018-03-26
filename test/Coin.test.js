import React from 'react';
import { render, Simulate, flushPromises } from 'react-testing-library';
import Coin from '../src/components/Coin';

it('simple', () => {
  const coin = { name: 'B - Bond... James Bond' };

  const { getByText, getByTestId, container } = render(<Coin coin={coin} />);

  // expect(container.firstChild).toMatchSnapshot();
  expect(getByTestId('coin-label').textContent).toBe(
    'B - Bond... James Bond — Owned?'
  );
});
