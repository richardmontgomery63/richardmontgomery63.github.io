import { useRef, useState } from 'react';
import { Background } from '../components/background';
import { Header } from '../components/header';
import { WordArt } from '../components/wordart';

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

      <section className="h-[350px] relative">
        <img src="/img/jesus.gif" className="absolute top-0 right-1/5" />

        <BannerPlane />

        <img src="/img/biplane.gif" className="absolute top-0 left-1/5" />
      </section>

      <section className="h-[350px] relative">
        <div
          style={{
            backgroundImage: 'url("/bgs/indexed.png")',
            transform: 'translateY(-44px)',
          }}
          className="h-[48px]"
        />

        <img
          src="/img/sunset.gif"
          style={{ transform: 'translateY(98px)' }}
          className="absolute right-1/6"
        />

        <div className="absolute left-1/12 top-[150px]">
          <img src="/img/island.webp" className="w-30" />
          <img
            src="/img/dude.gif"
            className="w-10"
            style={{ transform: 'translate(50px, -40px)' }}
          />
        </div>

        <img src="/img/shark.gif" className="absolute left-2/6 top-2/3" />
        <img src="/img/dolphin.gif" className="absolute right-2/6 top-2/3" />
        <img src="/img/bird1.gif" className="absolute left-1/4 top-1/4" />
        <img
          src="/img/birdsflock.gif"
          className="absolute right-1/4 top-1/12"
        />

        <img src="/img/ship.gif" className="absolute left-1/6 top-4/7" />
      </section>

      <section className="h-[700px] relative">
        <img
          src="/img/bubbles.gif"
          className="w-10 absolute left-1/12 top-1/3"
        />

        <img
          src="/img/bubbles.gif"
          className="w-10 absolute right-1/6 top-4/5"
        />

        <img src="/img/sub.gif" className="absolute left-2/5 top-1/2" />

        <img src="/img/fish.gif" className="absolute left-1/5 top-1/4" />

        <img src="/img/orca.gif" className="absolute right-1/12 top-1/4" />
      </section>

      <section className="h-[700px] relative">
        <img src="/img/angla.webp" className="w-30 absolute left-4/5 top-1/2" />

        <div
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/floor.webp")',
            transform: 'translateY(578px)',
          }}
          className="h-[122px] bottom-0"
        />

        <img src="/img/anemone.gif" className=" absolute bottom-0 left-1/6" />

        <img
          src="/img/titanic.gif"
          className=" absolute bottom-[15px] right-2/6"
        />
      </section>
    </Background>
  );
};

const BannerPlane = () => {
  return (
    <div className="overflow-hidden w-full h-full flex items-center">
      <div className="flex items-center slideacross w-full">
        <img src="/img/plane.gif" />
        <img
          src="/img/banner.gif"
          // className="absolute top-[-30px] left-25"
        />
        <WordArt
          fontFamily="comicsans"
          theme="rainbow"
          className="absolute left-[18rem] z-10 text-2xl rotate-[5deg]"
        >
          richardmontgomery63.com
        </WordArt>
      </div>
    </div>
  );
};
