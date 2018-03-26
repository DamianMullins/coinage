import React, { Component } from 'react';
import PropTypes from 'prop-types';
import coinService from '../services/coinService';
import Filters from './Filters';
import CoinList from './CoinList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      coins: [],
      filter: 'all',
      owned: []
    };
  }

  componentDidMount() {
    const { owned } = this.props.user;

    coinService.getCoins().then(coins => {
      this.setState({
        coins
      });
    });

    this.setState({
      owned
    });
  }

  handleFilterCheckboxChange = e => {
    this.setState({
      filter: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.filter);
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
    const { filter } = this.state;

    return (
      <div>
        <Filters
          handleSubmit={this.handleSubmit}
          handleCheckboxChange={this.handleFilterCheckboxChange}
          filter={filter}
        />

        <CoinList
          {...this.state}
          onSelectedAsOwned={this.handleSelectedAsOwned}
        />
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.object
};

export default App;
