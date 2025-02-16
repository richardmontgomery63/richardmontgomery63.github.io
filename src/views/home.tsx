import { useRef, useState } from 'react';

export const Home = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showBird, setShowBird] = useState(false);

  return (
    <section className="flex flex-col gap-20 items-center justify-center">
      <img src="/img/soyjack.gif" />
      <img src="/img/awb.gif" className="w-1/3" />

      <button
        style={{ fontFamily: 'comicsans' }}
        className="win95btn"
        onClick={() => {
          audioRef.current?.play();
          setShowBird(true);
          setTimeout(() => {
            setShowBird(false);
          }, 2500);
        }}
      >
        {showBird ? <img src="/img/bird.gif" /> : 'FILE A COMPLAINT'}
      </button>
      <audio id="fuckoff" src="/sounds/fuckoff.mp3" ref={audioRef}></audio>
    </section>
  );
};
