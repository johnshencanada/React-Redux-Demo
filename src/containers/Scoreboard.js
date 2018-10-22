import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as playerActionCreators from '../actions/player';
import PropTypes from 'prop-types';
import AddPlayerForm from '../components/AddPlayerForm';
import Header from '../components/Header';
import Player from '../components/Player';

class Scoreboard extends React.Component {

  static PropTypes = {
    players: PropTypes.array.isRequired,
  }

  onScoreChange = (index, delta) => {
    this.state.players[index].score += delta;
    this.setState(this.state);
  }

  render() {

    const {dispatch, players} = this.props;

    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          {players.map(function(player, index) {
             return (
                <Player
                  index={index}
                  name={player.name}
                  score={player.score}
                  key={player.name}
                  onScoreChange={ () => dispatch({ type:'UPDATE_PLAYER_SCORE', index:index, score:1 }) }
                  removePlayer={ () => dispatch({ type:'REMOVE_PLAYER', index:index }) }
               />
             );
           }.bind(this))}
        </div>
        <AddPlayerForm onAdd={ () => dispatch({ type:'ADD_PLAYER', name:'john' }) }/>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    players: state
  }
);

export default connect(mapStateToProps)(Scoreboard);