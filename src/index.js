import React from 'react';
import { render } from 'react-dom';
import './config/firebase';
import App from './components/App';

const data = {
  /*coins: [
    { id: 1, denomination: '10p', name: 'A - Angel of the North', year: 2018 },
    { id: 2, denomination: '10p', name: 'B - Bond... James Bond', year: 2018 },
    { id: 3, denomination: '10p', name: 'C - Cricket', year: 2018 }
  ],*/

  user: {
    owned: [{ id: '-L8Xpu4bdU1iN9GGCROd' }]
  }
};

const { /*coins,*/ user } = data;

render(<App /*coins={coins}*/ user={user} />, document.getElementById('root'));
