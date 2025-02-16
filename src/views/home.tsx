import { useRef, useState } from 'react';
import { Background } from '../components/background';
import { Header } from '../components/header';

export const Home = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showBird, setShowBird] = useState(false);

  return (
    <Background>
      <Header />

      <section className="flex flex-col items-center h-[700px] gap-15 relative">
        <a
          className="absolute left-1/6 top-1/2"
          href="mailto:richardmontgomery1936@gmail.com"
        >
          <img src="/img/email.gif" />
        </a>
        <img src="/img/awb.gif" className="absolute right-1/6 top-1/2" />

        <div className="relative">
          <img src="/img/soyjack.gif" />
          <img src="/img/ufo.gif" className="absolute top-22 left-14" />
        </div>

        <img
          src="/img/comet.gif"
          className="absolute right-1/12 top-1/6 rotate-[-45deg]"
        />

        <button
          style={{ fontFamily: 'comicsans' }}
          className="win95btn h-20 w-40 flex items-center justify-center"
          disabled={showBird}
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
        <img src="/img/goku.gif" />
      </section>
    </Background>
  );
};
