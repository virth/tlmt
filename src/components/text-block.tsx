import React, { FC, ReactNode } from 'react';
import { Copy } from '../identity/copy';
import { Heading3 } from '../identity/heading-3';

export type TextBlockProps = {
  title?: string;
  children: ReactNode;
};

export const TextBlock: FC<TextBlockProps> = ({ title = '', children }) => (
  <div>
    {title && <Heading3 as="p">{title}</Heading3>}
    <Copy>{children}</Copy>
  </div>
);
