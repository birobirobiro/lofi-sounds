import { useState } from "react";
import useSound from "use-sound";

function Card(props) {
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
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}

export default Card;
