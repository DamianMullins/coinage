import React, { Component } from 'react';
import PropTypes from 'prop-types';
import coinService from '../services/coinService';
import Filters from './Filters';
import CoinList from './CoinList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      coins: [],
      filter: 'all',
      owned: []
    };
  }

  async componentDidMount() {
    const { owned } = this.props.user;
    const coins = await coinService.getCoins();

    this.setState({
      coins,
      owned,
      isLoading: false
    });
  }

  handleFilterCheckboxChange = e => {
    const { value } = e.target;

    this.setState({
      filter: value
    });
  };

  handleFilterSubmit = e => {
    e.preventDefault();

    console.log(this.state.filter);
  };

  handleOwnedCheckboxChange = e => {
    const { checked, value: id } = e.target;
    const { owned } = this.state;

    const newState = checked
      ? [...owned, { id }]
      : owned.filter(o => o.id !== id);

    this.setState({
      owned: newState
    });
  };

  handleCoinSubmit = e => {
    e.preventDefault();

    console.log(this.state.owned.map(o => o.id));
  };

  render() {
    const { isLoading, filter } = this.state;

    return (
      <div>
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <div>
            <Filters
              handleSubmit={this.handleFilterSubmit}
              handleCheckboxChange={this.handleFilterCheckboxChange}
              filter={filter}
            />

            <CoinList
              handleSubmit={this.handleCoinSubmit}
              handleOwnedCheckboxChange={this.handleOwnedCheckboxChange}
              {...this.state}
            />
          </div>
        )}
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.object.isRequired
};

export default App;
