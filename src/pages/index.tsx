import type { NextPage } from 'next';
import Script from 'next/script';
import { useState } from 'react';
import { Grid, SpacingVariants } from '../components/grid';
import Img from '../components/image';
import { Link } from '../components/link';
import { PageHeader } from '../components/page-header';
import { Section } from '../components/section';
import { SocialMediaLink } from '../components/social-media-link';
import Teaser from '../components/teaser';
import Shows from '../data/shows.json';

const band = [
  { name: 'Josh', img: 'bg-josh-gold hover:bg-josh' },
  { name: 'Dominik', img: 'bg-dominik-gold hover:bg-dominik' },
  { name: 'Luca', img: 'bg-luca-gold hover:bg-luca' },
  { name: 'Raphi', img: 'bg-raphi-gold hover:bg-raphi' },
];

const Home: NextPage = () => {
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
        <Section title="Shows" navigationId="shows">
          <Script charSet="utf-8" src="https://widgetv3.bandsintown.com/main.min.js"></Script>
          <a
            className="bit-widget-initializer"
            data-artist-name="id_15511142"
            data-background-color="rgba(22,22,22,1)"
            data-separator-color="#DDDDDD"
            data-text-color="rgba(255,255,255,1)"
            data-font="Roboto (mono)"
            data-auto-style="true"
            data-button-label-capitalization="UPPERCASE"
            data-header-capitalization="undefined"
            data-location-capitalization="capitalize"
            data-venue-capitalization="capitalize"
            data-display-local-dates="true"
            data-local-dates-position="tab"
            data-display-past-dates="true"
            data-display-details="false"
            data-display-lineup=""
            data-display-start-time=""
            data-social-share-icon="true"
            data-display-limit="all"
            data-date-format="DD.MM.YY (dddd)"
            data-date-orientation="horizontal"
            data-date-border-color="#9B9B9B"
            data-date-border-width="1px"
            data-date-capitalization="undefined"
            data-date-border-radius="10px"
            data-event-ticket-cta-size="medium"
            data-event-custom-ticket-text="undefined"
            data-event-ticket-text="TICKETS"
            data-event-ticket-icon=""
            data-event-ticket-cta-text-color="#FFFFFF"
            data-event-ticket-cta-bg-color="#9B9B9B"
            data-event-ticket-cta-border-color="#9B9B9B"
            data-event-ticket-cta-border-width="0px"
            data-event-ticket-cta-border-radius="4px"
            data-sold-out-button-text-color="#FFFFFF"
            data-sold-out-button-background-color="#9B9B9B"
            data-sold-out-button-border-color="#9B9B9B"
            data-sold-out-button-clickable="true"
            data-event-rsvp-position="hidden"
            data-event-rsvp-cta-size="medium"
            data-event-rsvp-only-show-icon="undefined"
            data-event-rsvp-text="Erinnere mich"
            data-event-rsvp-icon=""
            data-event-rsvp-cta-text-color="#9B9B9B"
            data-event-rsvp-cta-bg-color="#FFFFFF"
            data-event-rsvp-cta-border-color="#9B9B9B"
            data-event-rsvp-cta-border-width="1px"
            data-event-rsvp-cta-border-radius="4px"
            data-follow-section-position="top"
            data-follow-section-alignment="center"
            data-follow-section-header-text="So verpasst du keine Show:"
            data-follow-section-cta-size="large"
            data-follow-section-cta-text="Folge uns bei bandsintown"
            data-follow-section-cta-icon="true"
            data-follow-section-cta-text-color="#FFFFFF"
            data-follow-section-cta-bg-color="rgba(209,166,92,1)"
            data-follow-section-cta-border-color="rgba(209,166,92,1)"
            data-follow-section-cta-border-width="0px"
            data-follow-section-cta-border-radius="4px"
            data-play-my-city-position="hidden"
            data-play-my-city-alignment="Center"
            data-play-my-city-header-text="Keine Show in deiner Nähe?"
            data-play-my-city-cta-size="medium"
            data-play-my-city-cta-text="Wir kommen auch zu dir!"
            data-play-my-city-cta-icon="false"
            data-play-my-city-cta-text-color="#FFFFFF"
            data-play-my-city-cta-bg-color="rgba(209,166,92,1)"
            data-play-my-city-cta-border-color="#9B9B9B"
            data-play-my-city-cta-border-width="0px"
            data-play-my-city-cta-border-radius="4px"
            data-language="de"
            data-layout-breakpoint="900"
            data-app-id=""
            data-affil-code=""
            data-bit-logo-position="bottomCenter"
            data-bit-logo-color="rgba(255,255,255,1)"
            data-optin-font=""
            data-optin-text-color=""
            data-optin-bg-color=""
            data-optin-cta-text-color=""
            data-optin-cta-bg-color=""
            data-optin-cta-border-width=""
            data-optin-cta-border-radius=""
            data-optin-cta-border-color=""
          ></a>
        </Section>

        <Section bgColor={true} title="News">
          <Link href="/newsletter" className="mr-8 mb-8">
            Newsletter abbonieren
          </Link>
          <Link href="/news">Alle News lesen</Link>
          <Grid cols={2}>
            <Teaser
              title="Alright"
              imgPath="/img/releases/2022/alright.png"
              href="https://distrokid.com/hyperfollow/tlmt/alright-2"
              text="Inspiriert von den Klima Katastrophen in Sibirien. Unsere neuste Single «Alright»."
              linkText="Song anhören"
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
