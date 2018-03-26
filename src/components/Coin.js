import React from 'react';
import PropTypes from 'prop-types';

const Coin = ({ coin, owned, onSelectedAsOwned }) => (
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

Coin.propTypes = {
  coin: PropTypes.object,
  owned: PropTypes.array
};

Coin.defaultProps = {
  owned: []
};

export default Coin;
