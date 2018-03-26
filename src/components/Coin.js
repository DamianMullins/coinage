import React from 'react';

const Coin = ({ coin, owned = [], onSelectedAsOwned }) => (
  <label data-testid="coin-label">
    {coin.name} — Owned?
    <input
      type="checkbox"
      checked={owned.find(o => o.id === coin.id) !== undefined}
      onChange={e => onSelectedAsOwned(e, coin.id)}
      value={coin.id}
    />
    <br />
  </label>
);

export default Coin;
