import React, { FC } from 'react';
import { Heading4 } from '../identity/heading-4';
import { ContactInfo } from './contact-info';
import { Grid } from './grid';
import { Section } from './section';
import { SocialMediaLink } from './social-media-link';

export const Footer: FC = () => {
  return (
    <footer className="">
      <Section bgColor={true}>
        <Grid cols={4}>
          <div>
            <Heading4>Kontakt</Heading4>
            <ContactInfo hoverBlack={true}></ContactInfo>
          </div>
          <div>
            <Heading4>Social Media</Heading4>
            <SocialMediaLink hoverBlack={true} small={true} socialMedia={'YouTube'} />
            <SocialMediaLink hoverBlack={true} small={true} socialMedia={'Spotify'} />
            <SocialMediaLink hoverBlack={true} small={true} socialMedia={'Instagram'} />
            <SocialMediaLink hoverBlack={true} small={true} socialMedia={'Facebook'} />
          </div>
        </Grid>
      </Section>
    </footer>
  );
};
