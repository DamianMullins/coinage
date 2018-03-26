import React, { Component } from 'react';

import coinService from '../services/coinService';
import Filters from './Filters';
import CoinList from './CoinList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      coins: [],
      filters: {
        all: true,
        onlyNeeded: false,
        onlyOwned: false
      },
      owned: []
    };
  }

  componentDidMount() {
    const { owned } = this.props.user;
    const coinsData = coinService.getCoins().then(coins => {
      this.setState({
        coins
      });
    });

    this.setState({
      owned
    });
  }

  handleFilterCheckboxChange = e => {
    const defaultState = {
      all: false,
      onlyNeeded: false,
      onlyOwned: false
    };
    const newState = {
      [e.target.name]: e.target.checked
    };

    this.setState({
      filters: { ...defaultState, ...newState }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.table([
      { filter: 'all', value: this.state.filters.all },
      { filter: 'onlyNeeded', value: this.state.filters.onlyNeeded },
      { filter: 'onlyOwned', value: this.state.filters.onlyOwned }
    ]);
  };

  handleSelectedAsOwned = (e, id) => {
    const { checked } = e.target;
    const newState = checked
      ? [...this.state.owned, { id }]
      : this.state.owned.filter(o => o.id !== id);

    this.setState({
      owned: newState
    });
  };

  render() {
    const { coins, owned, filters } = this.state;

    return (
      <div>
        <Filters
          handleSubmit={this.handleSubmit}
          handleCheckboxChange={this.handleFilterCheckboxChange}
          filters={filters}
        />

        <CoinList
          coins={coins}
          owned={owned}
          filters={filters}
          onSelectedAsOwned={this.handleSelectedAsOwned}
        />
      </div>
    );
  }
}

export default App;
