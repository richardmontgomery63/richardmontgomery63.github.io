import { WordArt } from './wordart';

export const Header = () => {
  return (
    <header className="flex items-center justify-center h-[350px]">
      <img
        src="/img/babe.gif"
        className="absolute h-40 right-10 top-10 rotate-[10deg]"
      />

      <img
        src="/img/planet1.gif"
        className="absolute h-20 left-10 top-10 rotate-[10deg]"
      />

      <img
        src="/img/yes.gif"
        className="absolute h-20 left-1/6 top-20 rotate-[-15deg]"
      />

      <img
        src="/img/fr.gif"
        className="absolute h-20 right-1/6 top-20 rotate-[-15deg]"
      />

      <img
        src="/img/jupiter.gif"
        className="absolute h-20 right-2/6 top-50 rotate-[-15deg]"
      />

      <img
        src="/img/alien.gif"
        className="absolute h-20 left-2/6 top-50 rotate-[15deg]"
      />

      <WordArt
        theme="radial"
        fontFamily="comicsans"
        className="text-4xl md:text-6xl"
      >
        RICHYS SITE
      </WordArt>
    </header>
  );
};
