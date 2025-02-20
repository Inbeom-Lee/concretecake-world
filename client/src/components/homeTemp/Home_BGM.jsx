import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import bgm from "Assets/sounds/bgm1.mp3";

export const Home_BGM = () => {
  const audioRef = useRef(new Audio(bgm));
  const [playing, setPlaying] = useState(true);

  // Play or pause the audio when the playing state changes
  useEffect(() => {
    audioRef.current.loop = true; // Enable looping

    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    // This function is called when the component is unmounted
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset time to start
    };
  }, [playing]);

  // Toggle play/pause
  const togglePlay = () => {
    setPlaying(!playing);
  };

  return (
    <Container>
      <button onClick={togglePlay}>{playing ? "Pause" : "Play"}</button>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 5%;
  left: 5%;
  z-index: 100;
`;
