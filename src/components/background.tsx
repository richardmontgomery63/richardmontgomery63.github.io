import { PropsWithChildren } from 'react';

export const Background = (props: PropsWithChildren) => {
  const imgs = [
    'url("/bgs/space.png")',
    'url("/bgs/spaceatmos.png")',
    'linear-gradient(#000,rgba(0, 0, 0, 0)),url("/bgs/cloudsatmos.gif")',
    'url("/bgs/clouds.gif")',
    'url("/bgs/sunset.png")',
    'url("/bgs/sea.gif")',
    'linear-gradient(rgba(0, 0, 0, 0),rgb(9, 0, 63)),url("/bgs/sea.gif")',
    'linear-gradient(rgb(9, 0, 63),#000),url("/bgs/sea.gif")',
  ];

  return (
    <div>
      {imgs.map((img) => (
        <section style={{ backgroundImage: img }} className="h-[350px]" />
      ))}

      <section className="h-[350px] bg-[#000]" />

      <div className="absolute top-0 w-full">{props.children}</div>
    </div>
  );
};
