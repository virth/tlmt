import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';

const AvailableColumnLayouts = {
  2: 'grid-cols-1 md:grid-cols-2',
  '2-lg': 'grid-cols-1 xl:grid-cols-2',
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
      gap === SpacingVariants.default ? ' gap-x-8 gap-y-32 xl:gap-x-16 xl:gap-y-32' : ' gap-x-4 gap-y-8 xl:gap-8',
      className
    )}
  >
    {children}
  </div>
);
