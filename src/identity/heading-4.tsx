import React, { FC } from 'react';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  itemProp?: string;
  itemScope?: boolean;
  itemType?: string;
};

export const Heading4: FC<Props> = ({ children, as: Tag = 'h4', className = '', ...props }) => (
  <Tag className={`font-sans font-bold text-base mb-2 ${className}`} {...props}>
    {children}
  </Tag>
);
