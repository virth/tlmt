import React, { FC } from 'react';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  noSpacing?: boolean;
};

export const Heading2: FC<Props> = ({ children, as: Tag = 'h2', className = '', noSpacing = false }) => (
  <Tag className={`text-sundance font-bold text-lg lg:text-xxl ${noSpacing ? '' : 'mb-4 lg:mb-8 max-w-prose'} ${className}`}>
    {children}
  </Tag>
);
