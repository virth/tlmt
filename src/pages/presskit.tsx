import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import greenwood from '../../public/img/live/greenwood.png';
import { Button } from '../components/button';
import { PageHeader } from '../components/page-header';
import { Section } from '../components/section';
import { TextBlock } from '../components/text-block';
import { Heading1 } from '../identity/heading-1';
import { Heading2 } from '../identity/heading-2';
import { Heading3 } from '../identity/heading-3';
import { FacebookIcon, InstagramIcon, SpotifyIcon, YouTubeIcon } from '../identity/icons';

const ElectronicPressKit: NextPage = () => {
  return (
    <div>
      <PageHeader title="Press Kit" description="Schweizer Rockband.">
        <Heading1>Presskit</Heading1>
        <Image src={greenwood} layout="responsive" className="rounded" alt="Guitar players on stage" />
      </PageHeader>
      <main>
        <Section>
          <div className="grid grid-cols1 lg:grid-cols-[1fr,2fr] gap-8 lg:gap-16">
            <div>
              <Heading2>Downloads</Heading2>
              <Link href="/downloads/TLMT-Presskit-Mai-2022.zip">
                <a>
                  <Button className="my-4">Download Presskit</Button>
                </a>
              </Link>
              <Link href="/downloads/TLMT-Rider_Mai-2022-(deutsch).pdf">
                <a>
                  <Button className="my-4">Download Tech Rider (deutsch)</Button>
                </a>
              </Link>
              <Link href="/downloads/TLMT-Rider_May-2022-(english).pdf">
                <a>
                <Button className="my-4">Download Tech Rider (english)</Button>
                </a>
              </Link>
              <Heading2 className="mt-16">Musik</Heading2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                <iframe
                  className="w-full h-60 rounded border-sundance border-2"
                  src="https://www.youtube.com/embed/H2fqc_j0dI4"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  className="w-full h-60 rounded border-sundance border-2"
                  src="https://www.youtube.com/embed/75pBElJ-w3I"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <iframe
                  className="w-full h-80 rounded border-sundance border-2"
                  src="https://open.spotify.com/embed/artist/3OdzQZQLrZhJSmNXwXaVed?utm_source=generator"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
              </div>
            </div>
            <div>
              <Heading2>HANDMADE SWISS ROCKMUSIC</Heading2>

              <TextBlock>
                Wer die Foo Fighters, Shinedown oder Papa Roach mag ist bei TLMT genau richtig. Musikbegeisterte Rockfans
                wissen es genau: bei einem echten Rockkonzert steht die Zeit still, alles ist möglich. Bodenständiger
                Hardrock der den Alltag vergessen lässt, gepaart kraftvollem Gesang und Melodien die an bessere Zeiten
                erinnern. Das ist der Sound von TLMT. 🤘
              </TextBlock>

              <Heading3 className="mt-8 lg:mt-16">Members</Heading3>
              <ul className="text-sm md:text-base xl:text-lg">
                <li>Joshua Wirth — Vocals &amp; Guitar</li>
                <li>Dominik Manser — Guitar &amp; Vocals</li>
                <li>Luca Wirth — Bass</li>
                <li>Raphael Wirth — Drums</li>
              </ul>
              <InstagramIcon size="48" />
              <Heading3 className="mt-8 lg:mt-16">Social Media Links</Heading3>
              <ul className="text-sm md:text-base fill-white">
                <li>
                  <InstagramIcon size="24" className="inline" /> Instagram: https://instagram.com/timt_rockband
                </li>
                <li>
                  <YouTubeIcon size="24" className="inline" /> YouTube: https://youtube.com/c/The-limitCh
                </li>
                <li>
                  <FacebookIcon size="24" className="inline" /> Facebook: https://www.facebook.com/tlmtRockband
                </li>
                <li>
                  <SpotifyIcon size="24" className="inline" /> Spotify:
                  https://open.spotify.com/artist/3OdzQZQLrZhJSmNXwXaVed?si=skgIxaiITc-IYP5mYFDH4A
                </li>
              </ul>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default ElectronicPressKit;
