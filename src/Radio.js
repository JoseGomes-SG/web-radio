import React, { useEffect, useState } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import defaultImage from "./radio.jpg";
import stations from "./brStations.json";

export default function Radio() {
  /* const [stations, setStations] = useState(); 

  useEffect(() => {
    setupApi().then((data) => {
      setStations(data);
    });
  }, []);
*/

  /* 
  const setupApi = async () => {
    const api = new RadioBrowserApi(fetch.bind(window), "My Radio App");

    const stations = await api.searchStations({
      country: "Brazil",
      limit: 90,
    });
    return stations;
  };
*/
  const setDefaultSrc = (event) => {
    event.target.src = defaultImage;
  };

  let estacao = [];

  return (
    <div className="radio">
      <div className="stations">
        {Object.keys(stations).map((key) => {
          for (var i in stations[key]) {
            estacao.push(
              <div className="station" key={stations[key][i].id}>
                <div className="stationName">
                  <img
                    className="logo"
                    src={stations[key][i].favicon}
                    alt="station logo"
                    onError={setDefaultSrc}
                  />
                  <div className="name">{stations[key][i].name}</div>
                </div>

                <AudioPlayer
                  className="player"
                  src={stations[key][i].url}
                  showJumpControls={false}
                  layout="stacked"
                  customProgressBarSection={[]}
                  customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                  autoPlayAfterSrcChange={false}
                />
              </div>
            );
          }
          return <>{estacao}</>;
        })}
      </div>
    </div>
  );
}
