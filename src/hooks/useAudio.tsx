import { useEffect, useRef } from 'react';

type Options = {
  volume?: number;
  playbackRate?: number;
};

const useAudio = (src: string, options: Options = {}) => {
  const { volume = 1, playbackRate = 1 } = options;
  const audio = useRef(new Audio(src));

  useEffect(() => {
    audio.current.playbackRate = playbackRate;
  }, [playbackRate]);

  useEffect(() => {
    audio.current.volume = volume;
  }, [volume]);

  const play = () => {
    audio.current.play();
  };

  const pause = () => {
    audio.current.pause();
  };

  return { play, pause };
};

export default useAudio;
