import classnames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { FacebookIcon, InstagramIcon, SpotifyIcon, YouTubeIcon } from '../identity/icons';

export const socialMediaLinks = {
  Facebook: 'https://www.facebook.com/tlmtRockband',
  Instagram: 'https://www.instagram.com/tlmt_rockband/',
  Spotify: 'https://open.spotify.com/artist/3OdzQZQLrZhJSmNXwXaVed?si=skgIxaiITc-IYP5mYFDH4A',
  YouTube: 'https://www.youtube.com/c/The-limitCh?sub_confirmation=1',
};

export type SocialMediaLinkProps = {
  socialMedia: keyof typeof socialMediaLinks;
  hoverBlack?: boolean;
  small?: boolean;
};

export const SocialMediaLink: FC<SocialMediaLinkProps> = ({ socialMedia, small = false, hoverBlack = false }) => (
  <Link href={socialMediaLinks[socialMedia]}>
    <a
      target="_blank"
      className={classnames(
        'flex items-center fill-white my-2',
        !small && 'xl:text-lg',
        hoverBlack && 'hover:fill-black hover:text-black',
        !hoverBlack && 'hover:fill-sundance hover:text-sundance'
      )}
    >
      <div className={small ? 'w-8 mr-2' : 'w-12 mr-3'}>
        {socialMedia === 'Facebook' && <FacebookIcon size={small ? '32' : '48'} />}
        {socialMedia === 'YouTube' && <YouTubeIcon size={small ? '32' : '48'} />}
        {socialMedia === 'Instagram' && <InstagramIcon size={small ? '32' : '48'} />}
        {socialMedia === 'Spotify' && <SpotifyIcon size={small ? '32' : '48'} />}
      </div>
      <span>{socialMedia}</span>
    </a>
  </Link>
);
