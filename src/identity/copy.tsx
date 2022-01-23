import React, { FC } from 'react';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export const Copy: FC<Props> = ({ children, as: Tag = 'p', className = '' }) => (
  <Tag className={`font-sans text-sm md:text-base xl:text-lg md:max-w-prose my-4 lg:my-8 first:mt-0 ${className}`}>
    {children}
  </Tag>
);
