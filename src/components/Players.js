// // import React, { Component } from "react";
// // export default class Players extends Component {
// //     render() {
// //         return (
// //             <div className="container">
// //                 <div className="column">
// //                     <div className="card">
// //                         <img src="assets/images/cr.jpg"></img>
// //                         <h3>Cristiano Ronaldo</h3>                       
// //                         <p className="title">Manchester United</p>
// //                         <p className="btn"><button>Detail</button></p>
// //                     </div>
// //                 </div>
// //                 <div className="column">
// //                     <div className="card">
// //                         <img src="assets/images/kante.jpg"></img>
// //                         <h3>Kante</h3>
// //                         <p className="title">Chelsea</p>
// //                         <p className="btn"><button>Detail</button></p>
// //                     </div>
// //                 </div>
// //                 <div className="column">
// //                     <div className="card">
// //                         <img src="assets/images/messi.jpg"></img>
// //                         <h3>Messi</h3>
// //                         <p className="title">PSG</p>
// //                         <p className="btn"><button>Detail</button></p>
// //                     </div>
// //                 </div>
// //                 <div className="column">
// //                     <div className="card">
// //                         <img src="assets/images/neymar.jpg"></img>
// //                         <h3>Neymar</h3>
// //                         <p className="title">PSG</p>
// //                         <p className="btn"><button>Detail</button></p>
// //                     </div>
// //                 </div>
// //                 <div className="column">
// //                     <div className="card">
// //                         <img src="assets/images/kane.jpg"></img>
// //                         <h3>Kane</h3>
// //                         <p className="title">Totteham</p>
// //                         <p className="btn"><button>Detail</button></p>
// //                     </div>
// //                 </div>
// //                 <div className="column">
// //                     <div className="card">
// //                         <img src="assets/images/haaland.jpg"></img>
// //                         <h3>Haaland</h3>
// //                         <p className="title">Manchester City</p>
// //                         <p className="btn"><button>Detail</button></p>
// //                     </div>
// //                 </div>
// //             </div>
// //         )
// //     }
// // }

// import React from 'react';
// import { Players } from '../shared/ListOfPlayers';
// export default class PlayersList extends React.Component {
//   render() {
//     return (
//       <div className='container'>
//         {Players.map((player) => (
//           <div className='column'>
//             <div className='card'>
//               <img src={player.img} alt={player.name} />
//               <h3>{player.name}</h3>
//               <p className='title'>{player.club}</p>
//               <p className='btn'>
//                 <button>Detail</button>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

import React from 'react';
import { Players as PlayerList } from '../shared/ListOfPlayers';
import { useState } from 'react';

export default function Players() {
  const [player, setPlayer] = useState([])
  return (
    <div className='container'>
      {PlayerList.map((player) => (
        <div className='column' key={player.id}>
          <div className='card'>
            <img src={player.img} alt={player.name} />
            <h3>{player.name}</h3>
            <p className='title'>{player.club}</p>
            <p className='btn'><button onClick={() => { setPlayer(player) }}>
              <a href='#popup1' id='openPopUp'>Detail</a></button></p>
          </div>
        </div>
      ))}
      <div id='popup1' className='overlay'>
        <div className='popup'>
          <img src={player.img} />
          <h2>{player.name}</h2>
          <a className='close' href='#'>&times;</a>
          <div className='content'>
            {player.info}
          </div>
        </div>
      </div>
    </div>
  );
}
