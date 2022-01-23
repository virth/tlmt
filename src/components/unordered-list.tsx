import React, { FC, ReactNode } from 'react';
import { Heading2 } from '../identity/heading-2';

export type UnorderedListProps = {
  title?: string;
  items: ReactNode[];
};

export const UnorderedList: FC<UnorderedListProps> = ({ title, items }) => (
  <div>
    {title && <Heading2>{title}</Heading2>}
    <ul className="list-none text-base lg:text-lg">
      {items.map((item, i) => (
        <li key={i} className="grid grid-cols-[auto,1fr] mb-2">
          <svg className={`mr-4`} width="36" height="36" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10.5" y="10" width="10" height="10" rx="6" fill="currentColor" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);
