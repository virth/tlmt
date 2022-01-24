import Link from 'next/link';
import { FC } from 'react';
import { Heading3 } from '../identity/heading-3';

export type ShowListProps = {
  year: number;
  shows: ShowProps[];
};

export type ShowProps = {
  date?: string;
  place?: string;
  name?: string;
  unplugged?: string;
  url?: string;
};

export const ShowList: FC<ShowListProps> = ({ year, shows }) => (
  <div className="mb-16 last:mb-0 text-sm md:text-base">
    <Heading3>{year}</Heading3>
    {shows.length < 1 ? (
      <span className="text-gray-500">Noch keine Shows geplant.</span>
    ) : (
      <ul className="list-disc pl-4 md:list-none md:pl-0">
        {shows.map(({ name, date, place, url = '' }, index) => (
          <li key={index}>
            {url ? (
              <Link href={url}>
                <a className="hover:border-b-4" target="_blank">
                  <Show name={name} date={date} place={place} />
                </a>
              </Link>
            ) : (
              <Show name={name} date={date} place={place} />
            )}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export const Show: FC<ShowProps> = ({ name, date, place }) => (
  <>
    <span>
      {date} — {name}
    </span>
    <span className="text-gray-500 block mb-3 last:mb-0 md:inline md:ml-2 font-light">{place}</span>
  </>
);
