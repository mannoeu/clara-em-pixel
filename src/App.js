import React, { useState, useEffect } from "react";

import Start from "./Start";
import Loading from "./Loading";
import Main from "./Main";

import SoundTrack from "./assets/soundtrack.mp3";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [loadingIndicator, setLoadingIndicator] = useState(true);

  const cursorRef = React.useRef(null);

  const bgAudioRef = React.useRef(null);

  function start() {
    bgAudioRef.current.volume = 0.3;
    bgAudioRef.current.play();
    setLoading(true);
  }

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
      <div ref={cursorRef} className="cursor"></div>
    </div>
  );
}

export default App;
