import NextLink from 'next/link';
import { FC } from 'react';
import { Heading3 } from '../identity/heading-3';

export type TeaserProps = {
  title: string;
  text?: string;
  linkText: string;
  imgPath: string;
  href: string;
};

const Teaser: FC<TeaserProps> = ({ title, text = '', imgPath, href, linkText }) => {
  return (
    <>
      <NextLink href={href}>
        <a className="max-w-lg">
          <div className="grid lg:grid-rows-[auto,1fr,1fr]">
            <img src={imgPath} alt={text} className="rounded-xl object-cover w-full h-80 mx-auto" />
            <Heading3 className="mt-8">{title}</Heading3>
            {text && <p>{text}</p>}
            <div className="mt-4">
              <span className="border-b-4 border-white hover:border-sundance-300 transition-colors duration-150 inline-block">
                {linkText}
              </span>
            </div>
          </div>
        </a>
      </NextLink>
    </>
  );
};

export default Teaser;
