import Player from './Player';
import React from 'react';
import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component{

  generateJsx(){

    if(this.props.players.length===0)
    {
       return(
         <div className="item">
            <p className="item__message">Please create a player</p>
         </div>
     );
    }
    else {
      console.log(this.props.players);
      return this.props.players.map((player)=>{
      return <Player key={player._id} player={player}/>;
      });
    }
  }

  render(){
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.generateJsx()}
        </FlipMove>
      </div>
    );
  }
};

PlayerList.propTypes={
  players:React.PropTypes.array.isRequired
}
