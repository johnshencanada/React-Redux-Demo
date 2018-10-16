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

  onRemovePlayer = (index) => {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  }

  render() {

    const {dispatch, players} = this.props;
    const addPlayer = bindActionCreators(playerActionCreators.addPlayer, dispatch);

    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          {players.map(function(player, index) {
             return (
               <Player
                 name={player.name}
                 score={player.score}
                 key={player.name}
                 onScoreChange={(delta) => this.onScoreChange(index, delta)}
                 onRemove={() => this.onRemovePlayer(index)}
               />
             );
           }.bind(this))}
        </div>
        <AddPlayerForm onAdd={addPlayer} />
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