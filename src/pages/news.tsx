import type { NextPage } from 'next';
import { Grid } from '../components/grid';
import { Link } from '../components/link';
import { PageHeader } from '../components/page-header';
import { Section } from '../components/section';
import Teaser from '../components/teaser';
import { Copy } from '../identity/copy';
import { Heading1 } from '../identity/heading-1';

const News: NextPage = () => {
  return (
    <div>
      <PageHeader title="News" description="Was gibts Neues bei TLMT?">
        <Heading1>News</Heading1>
        <Copy>
          Neue Musik, neue Shows und was sonst so läuft. Neuigkeiten von uns gibts auch <Link href="/links">hier</Link>. Und
          wenn du sicher nix mehr verpassen willst:
        </Copy>
        <Copy>
          <Link href="/newsletter">
            <a>abboniere unseren Newsletter</a>
          </Link>
        </Copy>
      </PageHeader>
      <main>
        <Section bgColor={false}>
          <Grid cols={3}>
            <Teaser
              title="Alright"
              imgPath="/img/releases/2022/alright.png"
              href="https://distrokid.com/hyperfollow/tlmt/alright-2"
              text="Inspiriert von den Klima Katastrophen in Sibirien. Unsere neuste Single «Alright»."
              linkText="Song anhören"
            />
            <Teaser
              title="Next Shows"
              imgPath="/img/live/next-shows.png"
              href="/#shows"
              text="Am 13. Mai im PW Pub Gossau um 21h. Am 2. Juni im Treppenhaus Rorschach und 20.15h"
              linkText="Alle Shows ansehen"
            />
            <Teaser
              title="Dissonance"
              imgPath="/img/releases/2022/dissonance.png"
              href="https://distrokid.com/hyperfollow/tlmt/dissonance"
              text="Unsere erste Single im 2022. Zum ersten Mal übernimmt Dominik die Lead Vocals."
              linkText="Song anhören"
            />
            <Teaser
              title="Be With You All Night"
              imgPath="/img/releases/2021/bwyan.png"
              href="https://youtu.be/75pBElJ-w3I"
              text="Das Musikvideo zu unserem Song «Be With You All Night» jetzt auf YouTube."
              linkText="Video ansehen"
            />
            <Teaser
              title="TFC — 80's Remix"
              imgPath="/img/releases/2021/tfc-remix.png"
              href="https://distrokid.com/hyperfollow/tlmt/time-for-a-change-80s-remix"
              text="Achtzigerjahre Dance Remix von «Time For A Change» jetzt auf allen Streaming Plattformen."
              linkText="Song anhören"
            />
            <Teaser
              title="Don't Let Me Go"
              imgPath="/img/releases/2021/go.png"
              href="https://distrokid.com/hyperfollow/tlmt/dont-let-me-go"
              text="«The music that you used to love remembers me, that you won't come home»"
              linkText="Song anhören"
            />
            <Teaser
              title="No Way"
              imgPath="/img/releases/2021/no-way.png"
              href="https://distrokid.com/hyperfollow/tlmt/no-way"
              text="«Life isn't fair. I was trying to love you. But there's no way. I was trying to hate you. But there's no way.»"
              linkText="Song anhören"
            />
            <Teaser
              title="BORN TO LOSE"
              imgPath="/img/releases/2020/born-to-lose.png"
              href="https://distrokid.com/hyperfollow/tlmt/born-to-lose"
              text="Endlich! Unser zweites Album ist da. 9 neue Songs. Hör doch mal rein."
              linkText="Album anhören"
            />
          </Grid>
        </Section>
      </main>
    </div>
  );
};

export default News;
