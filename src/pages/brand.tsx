import { ClipboardCopyIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Button } from '../components/button';
import { Grid } from '../components/grid';
import { Link } from '../components/link';
import { PageHeader } from '../components/page-header';
import { Section } from '../components/section';
import { Copy } from '../identity/copy';
import { Heading1 } from '../identity/heading-1';
import { Heading2 } from '../identity/heading-2';
import { Heading3 } from '../identity/heading-3';

const colors = [
  { name: 'sundance-500', hex: '#D1A65C', bg: 'bg-sundance' },
  { name: 'sundance-200', hex: '#ECDABC', bg: 'bg-sundance-200' },
  { name: 'black', hex: '#161616', bg: 'bg-black' },
  { name: 'white', hex: '#ffffff', bg: 'bg-white' },
];

const Brand: NextPage = () => {
  return (
    <div>
      <PageHeader title="Brand" description="Farben, Schriften, Logo und andere Infos">
        <Heading1>Brand</Heading1>
        <Copy>Farben, Schriften, Logo und andere Infos. Wenn du Fragen hast melde dich einfach.</Copy>
      </PageHeader>
      <main>
        <Section bgColor={false}>
          <Heading2>Schriften</Heading2>
          <Copy>
            Wir schreiben grundsätzlich in{' '}
            <Link href="https://fonts.google.com/share?selection.family=Roboto+Mono:wght@400;600;700">
              Roboto Mono (sans)
            </Link>{' '}
            in den font-weights 400 (light), 600 (regular) und 700 (bold). Wir schreiben Headlines in Uppercase und Bold.
          </Copy>
          <Copy>
            <Heading3>Beispiel Titel</Heading3>
          </Copy>
        </Section>
        <Section bgColor={false}>
          <Heading2>Farben</Heading2>
          <Copy>
            Unsere 3 Primären Farben sind Sundance, Schwarz und Weiss. Du kannst auf den Button klicken um den Hex-Code der
            Farbe in den Zwischenspeicher zu kopieren.
          </Copy>
          <Grid cols={2}>
            {colors.map(({ name, hex, bg }) => (
              <div key={hex} className="bg-sundance rounded px-6 py-6 grid lg:grid-cols-2 justify-between gap-12">
                <div>
                  <Heading3>{name}</Heading3>
                  <div>
                    hex: {hex}
                    <Button
                      primary={false}
                      className="w-16 ml-4"
                      onClick={() => {
                        navigator.clipboard.writeText(hex);
                      }}
                    >
                      <ClipboardCopyIcon className="h-6 w-6"></ClipboardCopyIcon>
                    </Button>
                  </div>
                </div>
                <div className={classNames('rounded border-black border-2 h-48 w-48', bg)}></div>
              </div>
            ))}
          </Grid>
        </Section>
        <Section>
          <Heading2>Logo</Heading2>
          <Copy>
            Unser Logo darf auch beschnitten werden. Damit das Format passt. Eine SVG Version des neuen Logos folgt
            hoffentlich bald. Solltest du unbedingt eine SVG Version brauchen kannst du auch noch das alte Logo verwenden.
            Das findest du im <Link href="/presskit">Presskit</Link>. Meld dich einfach bei uns falls du Fragen hast.
          </Copy>
          <Copy>
            <Link href={'/img/downloads/tlmt_logos.zip'}>Logo herunterladen</Link>
          </Copy>
          <div className="grid grid-cols-2 gap-4">
            <Image alt="TLMT Logo" src={'/img/logo/tlmt_logo_extended_color.png'} height={745} width={1200}></Image>
            <Image alt="TLMT Logo" src={'/img/logo/tlmt_logo_extended_white.png'} height={400} width={900}></Image>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default Brand;
