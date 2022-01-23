import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';

const AvailableColumnLayouts = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  6: 'grid-cols-3 lg:grid-cols-6',
} as const;

export enum SpacingVariants {
  default = 'Default',
  sm = 'sm',
}

export type GridProps = {
  cols: keyof typeof AvailableColumnLayouts;
  className?: string;
  children?: ReactNode;
  spacing?: SpacingVariants;
};

export const Grid: FC<GridProps> = ({ cols, children, className = '', spacing: gap = SpacingVariants.default }) => (
  <div
    className={classNames(
      'grid',
      AvailableColumnLayouts[cols],
      'grid-flow-row my-8',
      gap === SpacingVariants.default ? ' gap-8 xl:gap-16' : ' gap-4 xl:gap-8',
      className
    )}
  >
    {children}
  </div>
);
