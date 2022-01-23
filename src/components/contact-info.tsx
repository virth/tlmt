import NextLink from 'next/link';
import React, { FC } from 'react';
import { Link } from './link';

const Address = {
  name: 'TLMT, Joshua Wirth',
  street: 'Lilienstrasse 53',
  country: 'CH',
  postalCode: '9000',
  locality: 'St.Gallen',
  telephone: '+41 79 276 81 41',
  email: 'band@tlmt.ch',
} as const;

export type ContactInfoProps = {
  className?: string;
  linkClassName?: string;
};

export const ContactInfo: FC<ContactInfoProps> = ({ className = '', linkClassName = '' }) => (
  <address
    className={`${className} not-italic grid grid-flow-row place-self-start gap1`}
    itemScope
    itemType="http://schema.org/Organization"
  >
    <NextLink href="/standort">
      <a className="hover:text-brandy-100">
        <span itemProp="name">{Address.name}</span>
        <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
          <div>
            <span itemProp="streetAddress">{Address.street}</span>
            <br />
            <span itemProp="addressCountry">{Address.country}</span>-<span itemProp="postalCode">{Address.postalCode}</span>
            &nbsp;
            <span itemProp="addressLocality">{Address.locality}</span>
          </div>
        </div>
      </a>
    </NextLink>
    <span className="mt-2">
      <Link href={`tel:${Address.telephone}`} itemProp="telephone" className={linkClassName}>
        {Address.telephone}
      </Link>
    </span>
    <span>
      <Link href={`mailto:${Address.email}`} itemProp="email" className={linkClassName}>
        {Address.email}
      </Link>
    </span>
  </address>
);
