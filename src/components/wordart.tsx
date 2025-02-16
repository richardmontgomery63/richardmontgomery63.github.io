import classNames from 'classnames';
import { PropsWithChildren } from 'react';

type WordArtTheme =
  | 'rainbow'
  | 'blues'
  | 'superhero'
  | 'radial'
  | 'tilt'
  | 'purple'
  | 'horizon'
  | 'italicOutline'
  | 'slate';

// https://github.com/yershalom/css-wordart but for modern react
export const WordArt = (
  props: PropsWithChildren<{
    theme: WordArtTheme;
    className?: string;
    fontFamily: string;
  }>
) => {
  return (
    <h1 className={classNames('wordart', props.theme, props.className)}>
      <span className="text" style={{ fontFamily: props.fontFamily }}>
        {props.children}
      </span>
    </h1>
  );
};
