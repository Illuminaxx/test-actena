import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import api from "../api";


function Stream() {

  const [viewerRL, setViewerRL] = useState();
  const [viewerHS, setViewerHS] = useState();
  const [viewerD2, setViewerD2] = useState();


  useEffect(() => {
    const fetchData_RocketLeague = async () => {
      let game_id_RocketLeague = '30921'
      const result = await api.get(`https://api.twitch.tv/helix/streams?game_id=${game_id_RocketLeague}&first=100`);
      let dataArray = result.data.data;
      let finalResult = dataArray.map(game => {
        const viewRL = game.viewer_count
        return {"viewer_rocketleague" : viewRL};
      });
      setViewerRL(finalResult);
    };

    const fetchData_Hearthstone = async () => {
      let game_id_Hearthstone= '138585'
      const result = await api.get(`https://api.twitch.tv/helix/streams?game_id=${game_id_Hearthstone}&first=100`);
      let dataArray = result.data.data;
      let finalResult = dataArray.map(game => {
        const viewHS = game.viewer_count;
        return { "viewer_hearthstone" : viewHS };
      });
      setViewerHS(finalResult);

    };

    const fetchData_Dota_two = async () => {
      let game_id_Dota = '29595'
      const result = await api.get(`https://api.twitch.tv/helix/streams?game_id=${game_id_Dota}&first=100`);
      let dataArray = result.data.data;
      let finalResult = dataArray.map(game => {
        const viewD2 = game.viewer_count;
        return {"viewer_Dota2" : viewD2 };
      });
      setViewerD2(finalResult);
    };

    fetchData_RocketLeague();
    fetchData_Hearthstone();
    fetchData_Dota_two();

  }, []);

  const dataRL = viewerRL
  const dataHS = viewerHS
  const dataD2 = viewerD2

  return (
    <div>
      <h1>Analytics Streams</h1>
      <div>
        <LineChart width={730} height={350} data={dataRL} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis type="category" tick={false} padding={{ left: 20, right: 20 }} />
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Line type="basis" dataKey="viewer_rocketleague" stroke="#8884d8" dot={false}/>
        </LineChart>
        <LineChart width={730} height={350} data={dataHS} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis type="category"  tick={false} padding={{ left: 20, right: 20 }} />
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Line type="basis" dataKey="viewer_hearthstone" stroke="#445ff0" dot={false}/>
        </LineChart>
        <LineChart width={730} height={450} data={dataD2} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis type="category" tick={false} padding={{ left: 20, right: 20 }} />
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Line type="basis" dataKey="viewer_Dota2" dot={false}/>
        </LineChart>
      </div>
    </div>
  );
  
}

export default Stream;
