import React, { FC } from 'react';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  itemProp?: string;
  itemScope?: boolean;
  itemType?: string;
};

export const Heading3: FC<Props> = ({ children, as: Tag = 'h3', className = '', ...props }) => (
  <Tag className={`font-bold text-lg xl:text-xl mb-4 ${className}`} {...props}>
    {children}
  </Tag>
);
