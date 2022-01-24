import Link from 'next/link';
import { FC } from 'react';

export const socialMediaLinks = {
  Facebook: 'https://www.facebook.com/tlmtRockband',
  Instagram: 'https://www.instagram.com/tlmt_rockband/',
  Spotify: 'https://open.spotify.com/artist/3OdzQZQLrZhJSmNXwXaVed?si=skgIxaiITc-IYP5mYFDH4A',
  YouTube: 'https://www.youtube.com/c/The-limitCh?sub_confirmation=1',
};

export type SocialMediaLinkProps = {
  socialMedia: keyof typeof socialMediaLinks;
};

export const SocialMediaLink: FC<SocialMediaLinkProps> = ({ socialMedia, children }) => (
  <Link href={socialMediaLinks[socialMedia]}>
    <a className="flex items-center text-lg fill-white hover:fill-sundance hover:text-sundance mx-2">
      <div className="w-12 md:w-12 mr-3">{children}</div>
      <span>{socialMedia}</span>
    </a>
  </Link>
);
