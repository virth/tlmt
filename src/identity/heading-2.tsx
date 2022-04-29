import classNames from 'classnames';
import React, { FC } from 'react';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  colorInvert?: boolean;
};

export const Heading2: FC<Props> = ({ children, as: Tag = 'h2', className = '', colorInvert = false }) => (
  <Tag
    className={classNames(
      'font-bold text-lg lg:text-xxl uppercase',
      className,
      colorInvert && 'text-white',
      !colorInvert && 'text-sundance'
    )}
  >
    {children}
  </Tag>
);
