import type { NextPage } from 'next';
import { useState } from 'react';
import { Grid, SpacingVariants } from '../components/grid';
import Img from '../components/image';
import { PageHeader } from '../components/page-header';
import { Section } from '../components/section';
import { ShowList } from '../components/showlist';
import { SocialMediaLink } from '../components/social-media-link';
import Teaser from '../components/teaser';
import Shows from '../data/shows.json';
import { FacebookIcon, InstagramIcon, SpotifyIcon, YouTubeIcon } from '../identity/icons';

const band = [
  { name: 'Josh', img: 'bg-josh-gold hover:bg-josh' },
  { name: 'Dominik', img: 'bg-dominik-gold hover:bg-dominik' },
  { name: 'Luca', img: 'bg-luca-gold hover:bg-luca' },
  { name: 'Raphi', img: 'bg-raphi-gold hover:bg-raphi' },
];

const Home: NextPage = () => {
  const [showAllShows, setShowAllShows] = useState(false);
  const sortedShows = Shows.sort(({ year: a }, { year: b }) => {
    return b - a;
  });

  return (
    <div>
      <PageHeader>
        <div className="flex justify-center">
          <Img src="/img/monkey.png" alt={'angry gorilla'} className="max-h-[120vh]" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 xl:gap-16">
          <SocialMediaLink socialMedia={'YouTube'}>
            <YouTubeIcon></YouTubeIcon>
          </SocialMediaLink>
          <SocialMediaLink socialMedia={'Spotify'}>
            <SpotifyIcon></SpotifyIcon>
          </SocialMediaLink>
          <SocialMediaLink socialMedia={'Instagram'}>
            <InstagramIcon></InstagramIcon>
          </SocialMediaLink>
          <SocialMediaLink socialMedia={'Facebook'}>
            <FacebookIcon></FacebookIcon>
          </SocialMediaLink>
        </div>
      </PageHeader>
      <main>
        <Section bgColor={true}>
          <Grid cols={2}>
            <Teaser
              title="New video out now!"
              imgPath="/img/teaser/bwyan_thumbnail.jpeg"
              href="https://youtu.be/75pBElJ-w3I"
              linkText="Video ansehen"
            />
            <Teaser
              title="TFC — 80's Remix"
              imgPath="/img/teaser/tfc-remix-thumbnail.jpeg"
              href="https://distrokid.com/hyperfollow/tlmt/time-for-a-change-80s-remix"
              linkText="Zum Song"
            />
          </Grid>
        </Section>

        <Section title="Shows" navigationId="shows">
          {sortedShows
            .filter(({ year }) => year > 2019)
            .map(({ year, shows }) => (
              <ShowList key={year} year={year} shows={shows} />
            ))}

          <button
            className="border-b-4 hover:border-sundance mb-4"
            onClick={() => {
              setShowAllShows(!showAllShows);
            }}
          >
            {showAllShows ? 'Alte Shows ausblenden' : 'Alle Shows anzeigen'}
          </button>

          {showAllShows &&
            sortedShows
              .filter(({ year }) => year <= 2019)
              .map(({ year, shows }) => <ShowList key={year} year={year} shows={shows} />)}
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

export default Home;
