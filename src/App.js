import React, { useState, useEffect } from "react";

import Start from "./Start";
import Loading from "./Loading";
import Main from "./Main";

import SoundTrack from "./assets/soundtrack.mp3";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [loadingIndicator, setLoadingIndicator] = useState(true);
  const [vol, setVol] = useState(0.3);

  function handleToggleVol(e) {
    setVol(e.target.value);
  }

  const cursorRef = React.useRef(null);

  const bgAudioRef = React.useRef(null);

  function start() {
    bgAudioRef.current.volume = vol;
    bgAudioRef.current.play();
    setLoading(true);
  }

  useEffect(() => {
    bgAudioRef.current.volume = vol;
  }, [vol]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoadingIndicator(false);
      }, 6000);
    }
  }, [loading]);

  useEffect(() => {
    function cursorAnimated(event) {
      const { clientX: x, clientY: y } = event;
      cursorRef.current.style.left = `${x}px`;
      cursorRef.current.style.top = `${y}px`;
    }

    window.addEventListener("mousemove", cursorAnimated);
  }, []);

  return (
    <div className="App">
      {!loading ? (
        <Start handleClick={start} />
      ) : (
        <div className="container">
          {loadingIndicator ? <Loading /> : <Main />}
        </div>
      )}
      <audio
        controls={false}
        ref={bgAudioRef}
        src={SoundTrack}
        autoPlay={true}
        loop={true}
      />
      <div className="controls-reproduction">
        <input
          type="range"
          value={vol}
          onChange={handleToggleVol}
          step="0.1"
          min="0"
          max="1"
        />
      </div>
      <div ref={cursorRef} className="cursor"></div>
    </div>
  );
}

export default App;
