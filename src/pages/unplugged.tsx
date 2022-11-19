import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import unplugged from '../../public/img/live/tlmt_unplugged.png';
import { Button } from '../components/button';
import { PageHeader } from '../components/page-header';
import { Section } from '../components/section';
import { TextBlock } from '../components/text-block';
import { Heading1 } from '../identity/heading-1';
import { Heading2 } from '../identity/heading-2';
import { Heading3 } from '../identity/heading-3';

const Unplugged: NextPage = () => {
  return (
    <div>
      <PageHeader title="Unplugged" description="Akkustische Coversongs für deinen nächsten Anlasss.">
        <Heading1>Akustische Coversongs für deinen Event</Heading1>
        <Image src={unplugged} layout="responsive" className="rounded" alt="Guitar players on stage" />
      </PageHeader>
      <main>
        <Section>
          <div className="grid grid-cols1 lg:grid-cols-[1fr,2fr] gap-8 lg:gap-16">
            <div>
              <Heading2>Musik</Heading2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                <iframe
                  width="100%"
                  height="300"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  className="w-full h-40 rounded border-sundance border-2"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1386586705&color=%23D1A65C&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false"
                ></iframe>
                <iframe
                  width="100%"
                  height="300"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  className="w-full h-40 rounded border-sundance border-2"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/206249134&color=%23D1A65C&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false"
                ></iframe>
                <iframe
                  width="100%"
                  height="300"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  className="w-full h-40 rounded border-sundance border-2"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/206249126&color=%23D1A65C&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false"
                ></iframe>
                <iframe
                  width="100%"
                  height="300"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  className="w-full h-40 rounded border-sundance border-2"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/206249121&color=%23D1A65C&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false"
                ></iframe>
                <iframe
                  width="100%"
                  height="300"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  className="w-full h-40 rounded border-sundance border-2"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/206249120&color=%23D1A65C&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false"
                ></iframe>
              </div>
            </div>
            <div>
              <Heading2>Handgemacht</Heading2>
              <TextBlock>
                Ein unplugged Konzert passt überall. Akustische Gitarren, Bass und Cajon. Wenig Platz, wenig Lärm, super
                Show. Passend für deine Hochzeit, für deine Firmenfeier, für deinen Event.{' '}
              </TextBlock>
              <TextBlock>
                Wir bringen mit, was du brauchst und sorgen für guten Sound. Musikanlage, Lichtanlage, wenn du willst auch
                eine kleine Bühne. Du kümmerst dich um deine Gäste oder geniesst deinen Event. Ab CHF 900.- gehts los.
              </TextBlock>
              <Link href="/booking">
                <a className="block my-8">
                  <Button>Jetzt unverbindlich anfragen</Button>
                </a>
              </Link>

              <Heading3 className="mt-24">Ein Auszug aus unserem Songportfolio:</Heading3>
              <ul className="text-sm md:text-base xl:text-lg">
                <li>Thinking out loud – Ed Sheeran</li>
                <li>Viva la Vida – Coldplay</li>
                <li>Learn to Fly – Foo Fighters</li>
                <li>Opposites – Biffy Clyro</li>
                <li>Bed of Roses – Bon Jovi</li>
                <li>500 Miles – The Proclaimers</li>
                <li>und viele mehr...</li>
              </ul>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default Unplugged;
