import classNames from 'classnames';
import React, { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react';

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  primary?: boolean;
};

const getButtonStyles = (primary: boolean) =>
  classNames({
    'relative inline-flex items-center px-4 py-2 lg:px-6 text-sm lg:text-base rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brandy-100 focus:ring-brandy-100':
      true,
    'text-white bg-sundance hover:bg-brandy-400': primary,
    'text-black border': !primary,
  });

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = '', primary = true, ...props }, ref) => (
    <button ref={ref} className={`${getButtonStyles(primary)} ${className}`} {...props}>
      {children}
    </button>
  )
);
