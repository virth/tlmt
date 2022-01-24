import React, { FC } from 'react';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export const Heading2: FC<Props> = ({ children, as: Tag = 'h2', className = '' }) => (
  <Tag className={`text-sundance font-bold text-lg lg:text-xxl uppercase ${className}`}>{children}</Tag>
);
