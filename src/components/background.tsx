import { PropsWithChildren } from 'react';

export const Background = (props: PropsWithChildren) => {
  const imgs = [
    'url("/bgs/space.png")',
    'url("/bgs/spaceatmos.png")',
    'linear-gradient(#000,rgba(0, 0, 0, 0)),url("/bgs/cloudsatmos.gif")',
    'url("/bgs/clouds.gif")',
  ];

  return (
    <div>
      {imgs.map((img) => (
        <section style={{ backgroundImage: img }} className="h-[350px]" />
      ))}

      <div className="absolute top-0 w-full">{props.children}</div>
    </div>
  );
};
