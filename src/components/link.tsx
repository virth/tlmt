import React, { forwardRef, LinkHTMLAttributes } from 'react';

export type LinkProps = {
  className?: string;
  newTab?: boolean;
  active?: boolean;
} & LinkHTMLAttributes<HTMLElement>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className = '', newTab = false, ...props }, ref) => (
    <a
      ref={ref}
      className={`border-b-4 border-white hover:border-sundance-300 transition-colors duration-150 inline-block ${className} `}
      {...(newTab ? { target: '_blank', rel: 'noreferrer' } : {})}
      {...props}
    >
      {children}
    </a>
  )
);
