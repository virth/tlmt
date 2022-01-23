import React, { FC } from 'react';

export type ImageProps = {
  className?: string;
  src: string;
  alt: string;
};

const Img: FC<ImageProps> = ({ className = '', src, alt }) => (
  <img src={src} alt={alt} className={className ? className : 'h-full object-cover'} />
);

export default Img;
