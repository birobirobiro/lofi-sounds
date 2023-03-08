import { useState } from "react";
import useSound from "use-sound";

function Lofi(props) {
  const soundFiles = ['lofi1.mp3', 'lofi2.mp3', 'lofi3.mp3', 'lofi4.mp3', 'lofi5.mp3', 'lofi6.mp3', 'lofi7.mp3', 'lofi8.mp3'];
  const audioSources = soundFiles.map(sound => `assets/lofi-sounds/${sound}`);

  const [audioIndex, setAudioIndex] = useState(0);
  const audioSrc = audioSources[audioIndex];

  useEffect(() => {
    if (!isClicked) {
      // Select a random audio index if not clicked yet
      setAudioIndex(Math.floor(Math.random() * soundFiles.length));
    } else {
      const audio = new Audio(audioSrc);
      const handleAudioEnded = () => {
        setAudioIndex((audioIndex + 1) % soundFiles.length);
      };
      audio.addEventListener('ended', handleAudioEnded);
      audio.play();
      return () => {
        audio.removeEventListener('ended', handleAudioEnded);
        audio.pause();
      }
    }
  }, [audioIndex, isClicked, soundFiles, audioSrc]);


  const [isClicked, setIsClicked] = useState(
    false
  );

  const [volume, setVolume] = useState(
    0.05
  );

  const [play, { stop }] = useSound(props.audioSrc, { volume: volume, loop: true });

  return (
    <div className={`hover:cursor-pointer transition-all relative
      ${isClicked ? "scale-105 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]" : "shadow-none"}
    `}
      onClick={() => {
        setIsClicked(!isClicked);
        isClicked ? stop() : play();
      }}
    >

      <img className="w-[300px] h-[160px] md:h-[250px] lg:h-[260px] rounded-lg object-cover" src={props.imageSrc} alt={props.imageAlt} />

      <div className="absolute flex p-2 w-full">
        <input type="range" max="1" min="0" step="0.01" defaultValue="0.05"
          className="relative z-2 w-full bottom-10"
          onChange={(e) => setVolume(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Lofi;
