import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players,calculatePositions} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';
import App from './../imports/ui/App';
// const gamePlayers=[{
//   _id:"1",
//   name:"Yu Liu",
//   score:90
// },
// {
//   _id:"2",
//   name:"Jingwen Nie",
//   score:91
// },
// {
//   _id:"3",
//   name:"Yuxuan Zhang",
//   score:90
// }
// ];

// const generateJsx=(gamePlayers)=>{
//     return gamePlayers.map((player)=>{
//     return (
//       <Player player={player}/>
//       // <p key={player._id}>
//       //   {player.name} get {player.score}
//       //   <button onClick={()=>Players.update({_id:player._id},{$inc:{score:1}})}> +1 </button>
//       //   <button onClick={()=>Players.update({_id:player._id},{$inc:{score:-1}})}> -1 </button>
//       //   <button onClick={()=>Players.remove({_id:player._id})}> x </button>
//       // </p>
//   );});
// };


Meteor.startup(()=>{
    //let gamePlayers;
    Tracker.autorun(()=>{
      //console.log(Players.find().fetch());
      let gamePlayers=Players.find({},{sort:{score:-1}}).fetch();
      let players=calculatePositions(gamePlayers);
      let title="Score Board";
      //console.log(document.getElementById('app'));
      ReactDOM.render(<App title={title} subTitle="Made by Yu Liu" players={players}/>, document.getElementById("app"));
    });
});
