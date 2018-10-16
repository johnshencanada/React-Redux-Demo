import React from 'react';
import { render } from 'react-dom';
import Scoreboard from './containers/Scoreboard';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import PlayerReducer from './reducers/player.js'

const store = createStore(
	PlayerReducer
);

render (
	<Provider store={store}>
		<Scoreboard />
  </Provider>,
	document.getElementById('root')
);