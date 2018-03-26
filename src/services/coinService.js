import firebase from 'firebase';

const CoinRefName = 'coins';

const addCoin = ({ denomination, name }) => {
  const coinsRef = firebase.database().ref(CoinRefName);
  const item = {
    denomination,
    name
  };

  coinsRef.push(item);
};

const getCoins = () => {
  const coinsRef = firebase.database().ref(CoinRefName);
  return coinsRef.once('value').then(snapshot => {
    let items = snapshot.val();
    let coins = [];

    for (let item in items) {
      coins.push({
        id: item,
        denomination: items[item].denomination,
        name: items[item].name
      });
    }
    return coins;
  });
};

export default {
  addCoin,
  getCoins
};
