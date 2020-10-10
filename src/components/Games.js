import React, { useState, useEffect } from "react";
import api from "../api";
import socketIOClient from "socket.io-client";

function Games() {
  const [games, setgames] = useState([]);
  const [countViewer, setcountViewer] = useState('');
 
  useEffect(() => {
    const fetchData = async () => {
      let game_id = '743'
      const result = await api.get(`https://api.twitch.tv/helix/streams?game_id=${game_id}&first=100`);
      let dataArray = result.data.data;
      let finalArray = dataArray.map(game => {
        let newURL = game.thumbnail_url
          .replace("{width}", "300")
          .replace("{height}", "300");
        game.thumbnail = newURL;
        return game;
      });

      setgames(finalArray);
 

      let counter_viewer = dataArray.map(view => {
        return view.viewer_count
      });

      const viewers = counter_viewer.reduce(add)
      setcountViewer(viewers)

    };
    fetchData();
    
  }, []);

  const add = (a, b) => a + b; 


  return (
    <div>
      <h1 className="center">Chess Channel</h1>
        Total viewers : { countViewer }
      <div className="row">
        {games.map(game => (
          <div className="col-lg-4 col-md-6 col-sm-12 mt-5" key={game.id}>
            <div className="card">
              <img className="card-img-top" src={game.thumbnail} alt="" />
              <div className="card-body">
                <h5 className="card-title">{game.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;
