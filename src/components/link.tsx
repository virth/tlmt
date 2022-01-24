import classnames from 'classnames';
import React, { forwardRef, LinkHTMLAttributes } from 'react';

export type LinkProps = {
  newTab?: boolean;
  active?: boolean;
  hoverBlack?: boolean;
} & LinkHTMLAttributes<HTMLElement>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, newTab = false, hoverBlack = false, ...props }, ref) => (
    <a
      ref={ref}
      className={classnames(
        'border-b-4 border-white transition-colors duration-150 inline-block',
        hoverBlack ? 'hover:border-black' : 'hover:border-sundance'
      )}
      {...(newTab ? { target: '_blank', rel: 'noreferrer' } : {})}
      {...props}
    >
      {children}
    </a>
  )
);
