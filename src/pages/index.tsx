import type { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import { Grid, SpacingVariants } from '../components/grid';
import Img from '../components/image';
import { Link } from '../components/link';
import { PageHeader } from '../components/page-header';
import { Section } from '../components/section';
import { ShowList } from '../components/showlist';
import { SocialMediaLink } from '../components/social-media-link';
import Teaser from '../components/teaser';
import Shows from '../data/shows.json';

const band = [
  { name: 'Josh', img: 'bg-josh-gold hover:bg-josh' },
  { name: 'Dominik', img: 'bg-dominik-gold hover:bg-dominik' },
  { name: 'Luca', img: 'bg-luca-gold hover:bg-luca' },
  { name: 'Raphi', img: 'bg-raphi-gold hover:bg-raphi' },
];

export type BandhelperGig = {
  ID: string;
  date_start: string;
  name: string;
  time_start: string;
  custom_kbCdKP: string; // custom field: place
  custom_j7cNfm: string; // custom field: url
};

type Props = {
  bandhelperGigs: BandhelperGig[];
};

const Home: NextPage<Props> = ({ bandhelperGigs }) => {
  const [showAllShows, setShowAllShows] = useState(false);

  const newGigs = bandhelperGigs.map(({ date_start, name, custom_j7cNfm: url, custom_kbCdKP: place }) => {
    const date = new Date(date_start) as Date;

    return {
      date: date.toLocaleDateString('de-DE', { day: 'numeric', month: 'long' }),
      name,
      url: `https://${url}`,
      unplugged: '',
      place,
    };
  });

  const sortedShows = Shows.sort(({ year: a }, { year: b }) => {
    return b - a;
  });

  return (
    <div>
      <PageHeader fullscreen={true}>
        <div className="flex justify-center">
          <Img src="/img/monkey.png" alt={'angry gorilla'} className="max-h-[120vh]" />
        </div>
        <Section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 xl:gap-16">
            <SocialMediaLink socialMedia={'YouTube'} />
            <SocialMediaLink socialMedia={'Spotify'} />
            <SocialMediaLink socialMedia={'Instagram'} />
            <SocialMediaLink socialMedia={'Facebook'} />
          </div>
        </Section>
      </PageHeader>
      <main>
        <Section bgColor={true} title="News">
          <Link href="/newsletter" className="mr-8 mb-8">
            Newsletter abbonieren
          </Link>
          <Link href="/news">Alle News lesen</Link>
          <Grid cols={2}>
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
          </Grid>
        </Section>

        <Section title="Shows" navigationId="shows">
          <Grid cols="2-lg">
            <ShowList key={2022} year={2022} shows={newGigs} />
            {sortedShows
              .filter(({ year }) => year > 2019)
              .map(({ year, shows }) => (
                <ShowList key={year} year={year} shows={shows} />
              ))}
          </Grid>
          <button
            className="border-b-4 hover:border-sundance mb-4"
            onClick={() => {
              setShowAllShows(!showAllShows);
            }}
          >
            {showAllShows ? 'Alte Shows ausblenden' : 'Alle Shows anzeigen'}
          </button>
          <Grid cols="2-lg">
            {showAllShows &&
              sortedShows
                .filter(({ year }) => year <= 2019)
                .map(({ year, shows }) => <ShowList key={year} year={year} shows={shows} />)}
          </Grid>
        </Section>

        <Section title="Band" navigationId="band">
          <Grid cols={4} spacing={SpacingVariants.sm}>
            {band.map(({ name, img }) => (
              <div
                key={name}
                className={`${img} h-[50vh] bg-top bg-cover bg-no-repeat flex items-center justify-center relative rounded-md`}
              >
                <div className="bg-white blur-md rounded-lg py-1 px-4">
                  <span className="text-xl font-bold invisible">{name}</span>
                </div>
                <span className="text-xl font-bold absolute text-black">{name}</span>
              </div>
            ))}
          </Grid>
        </Section>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch('https://www.bandhelper.com/feed/calendar/32064?range=6');
  const bandhelperGigs = await response.json();

  return {
    props: {
      bandhelperGigs,
    },
  };
};

export default Home;
