import React from 'react';
import PropTypes from 'prop-types';

const Coin = ({ coin, owned, handleOwnedCheckboxChange }) => (
  <label data-testid="coin-label">
    <input
      type="checkbox"
      checked={owned.find(o => o.id === coin.id) !== undefined}
      onChange={handleOwnedCheckboxChange}
      value={coin.id}
    />
    {coin.name}
    <br />
  </label>
);

Coin.propTypes = {
  coin: PropTypes.object.isRequired,
  owned: PropTypes.array
};

Coin.defaultProps = {
  owned: []
};

export default Coin;
