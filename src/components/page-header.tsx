import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Section } from './section';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export type HeaderLink = {
  text: string;
  href: string;
  className?: string;
  newTab?: boolean;
};

export type PageHeaderProps = {
  title?: string;
  description?: string;
  fullscreen?: boolean;
};

export const PageHeader: FC<PageHeaderProps> = ({ title = '', description, fullscreen, children }) => {
  const { asPath } = useRouter();
  const pageUrl = `${SITE_URL}${asPath}`;

  return (
    <>
      <Head>
        {title && <title>{title.replace(new RegExp('_', 'g'), '')} — TLMT</title>}
        {!title && <title>Rockband — TLMT</title>}

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {description && <meta name="description" content={description} />}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={title} />
        {description && <meta property="og:description" content={description} />}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        <meta property="twitter:title" content={title} />
        {description && <meta property="twitter:description" content={description} />}
      </Head>

      <header>{fullscreen ? children : <Section>{children}</Section>}</header>
    </>
  );
};
