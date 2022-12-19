import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import defaultImage from "./radio.jpg";
import data from "./data";

export default function Radio() {
  // Imprimir as estações

  const [estacoes] = useState(data());

  const setDefaultSrc = (event) => {
    event.target.src = defaultImage;
  };

  return (
    <div className="radio">
      <div className="stations">
        {estacoes.map((index) => {
          return (
            <div className="station" key={index.id}>
              <div className="stationName">
                <img
                  className="logo"
                  src={index.favicon}
                  alt="station logo"
                  onError={setDefaultSrc}
                />
                <div className="name">{index.name}</div>
              </div>

              <AudioPlayer
                className="player"
                src={index.url}
                showJumpControls={false}
                layout="stacked"
                customProgressBarSection={[]}
                customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                autoPlayAfterSrcChange={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
