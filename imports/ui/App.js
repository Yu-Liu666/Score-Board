import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import React from 'react';

export default class App extends React.Component{
    render(){
      return(
      <div>
        <TitleBar title={this.props.title} subTitle={this.props.subTitle}/>
        <div className="wrapper">
          <PlayerList players={this.props.players} />
          <AddPlayer score={10}/>
        </div>
      </div>
    );}
};

App.propTypes={
  title:React.PropTypes.string.isRequired,
  players:React.PropTypes.array.isRequired
}
