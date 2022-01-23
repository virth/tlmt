import Link from 'next/link';
import { FC } from 'react';
import { Heading3 } from '../identity/heading-3';

export type ShowListProps = {
  year: number;
  shows: {
    date?: string;
    place?: string;
    name?: string;
    unplugged?: string;
    url?: string;
  }[];
};

export const ShowList: FC<ShowListProps> = ({ year, shows }) => (
  <div className="mb-8 last:mb-0">
    <Heading3>{year}</Heading3>
    {shows.length > 0 ? (
      shows.map(({ name, date, place, url = '' }, index) => (
        <li key={index}>
          {date} —{' '}
          {url ? (
            <Link href={url}>
              <a className="hover:text-sundance" target="_blank">
                {name}
              </a>
            </Link>
          ) : (
            name
          )}
          , <span className="text-gray-500">{place}</span>
        </li>
      ))
    ) : (
      <span className="text-gray-500">Noch keine Shows geplant. </span>
    )}
  </div>
);
