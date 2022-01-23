import type { NextPage } from 'next';
import Image from 'next/image';
import greenwood from '../../public/img/live/greenwood.jpeg';
import { PageHeader } from '../components/page-header';
import { Section } from '../components/section';
import { TextBlock } from '../components/text-block';
import { Heading1 } from '../identity/heading-1';
import { Heading2 } from '../identity/heading-2';
import { Heading3 } from '../identity/heading-3';

const ElectronicPressKit: NextPage = () => {
  return (
    <div>
      <PageHeader title="Press Kit" description="Schweizer Rockband.">
        <Heading1>Presskit</Heading1>
        <Image src={greenwood} layout="responsive" className="rounded" alt="musicians on stage" />
      </PageHeader>
      <main>
        <Section>
          <div className="grid grid-cols1 md:grid-cols-[1fr,2fr] gap-8 xl:gap-16">
            <div>
              <Heading2>Music</Heading2>
              coming soon ...
            </div>
            <div>
              <Heading2>HANDMADE SWISS ROCKMUSIC</Heading2>

              <TextBlock>
                Wer die Foo Fighters, Shinedown oder Papa Roach mag ist bei TLMT genau richtig. Musikbegeisterte Rockfans
                wissen es genau: bei einem echten Rockkonzert steht die Zeit still, alles ist möglich. Bodenständiger
                Hardrock der den Alltag vergessen lässt, gepaart kraftvollem Gesang und Melodien die an bessere Zeiten
                erinnern. Das ist der Sound von TLMT. 🤘
              </TextBlock>

              <Heading3>Members</Heading3>

              <TextBlock>... coming soon</TextBlock>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default ElectronicPressKit;
