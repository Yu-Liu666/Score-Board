import {Players} from './../api/players';
import React from 'react';

export default class Player extends React.Component{

  render(){
    let itemClassName=`item item--position-${this.props.player.rank}`;
    return(
      <div key={this.props.player._id} className={itemClassName}>
        <div className="player">
          <div>
            <p className="player__name">{this.props.player.name}</p>
            <p className="player__stats">Rank: {this.props.player.rank} {this.props.player.position} Score: {this.props.player.score} Points</p>
          </div>
          <div className="player__actions">
            <button className="button button--round" onClick={()=>Players.update({_id:this.props.player._id},{$inc:{score:1}})}> +1 </button>
            <button className="button button--round" onClick={()=>Players.update({_id:this.props.player._id},{$inc:{score:-1}})}> -1 </button>
            <button className="button button--round" onClick={()=>Players.remove({_id:this.props.player._id})}> x </button>
          </div>
        </div>
      </div>
    );
  }
};

Player.propTypes={
  player:React.PropTypes.object.isRequired
};
