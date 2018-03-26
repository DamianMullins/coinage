import React from 'react';
import Coin from './Coin';

const filterNeeded = (coins, owned) =>
  coins.filter(c => owned.find(o => o.id === c.id) === undefined);

const filterOwned = (coins, owned) =>
  coins.filter(c => owned.find(o => o.id === c.id) !== undefined);

const filter = (filters, coins, owned) => {
  if (filters.onlyNeeded) {
    return filterNeeded(coins, owned);
  } else if (filters.onlyOwned) {
    return filterOwned(coins, owned);
  } else {
    return coins;
  }
};

const CoinsList = ({ coins, owned, filters, onSelectedAsOwned }) => {
  const filtered = filter(filters, coins, owned);

  return filtered.map(coin => (
    <Coin
      key={coin.id}
      coin={coin}
      owned={owned}
      onSelectedAsOwned={onSelectedAsOwned}
    />
  ));
};

export default CoinsList;
