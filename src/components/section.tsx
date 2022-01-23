import classnames from 'classnames';
import React, { FC, ReactNode } from 'react';
import { Heading2 } from '../identity/heading-2';

export type SectionProps = {
  children?: ReactNode;
  bgColor?: boolean;
  title?: string;
  navigationId?: string;
};

export const Section: FC<SectionProps> = ({ children, bgColor, navigationId, title = '' }) => (
  <section id={navigationId} className={classnames('py-2 my-4 md:py-4 xl:py-16', bgColor && 'bg-sundance')}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {title && <Heading2 className="mb-12">{title}</Heading2>}
      {children}
    </div>
  </section>
);
