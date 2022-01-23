import { Disclosure } from '@headlessui/react';
import { CalendarIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Button } from './button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Shows', href: '/#shows' },
  { name: 'Band', href: '/#band' },
  { name: 'Presskit', href: '/presskit' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const NavHeader: FC = () => {
  const { pathname } = useRouter();

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-brandy focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6 hover:text-white" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map(({ name, href, newTab }) => (
                    <Link key={name} href={href}>
                      <a
                        target={newTab ? '_blank' : '_self'}
                        className={classNames(
                          pathname.endsWith(href) ? 'border-b-2 border-brandy' : 'hover:border-b-2 border-brandy-100',
                          'px-3 '
                        )}
                        aria-current={pathname.endsWith(href) ? 'page' : undefined}
                      >
                        {name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/buchen">
                    <a>
                      <Button>
                        <CalendarIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        <span>Booking</span>
                      </Button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map(({ name, href, newTab }) => (
                <Disclosure.Button
                  key={name}
                  as="a"
                  target={newTab ? '_blank' : '_self'}
                  href={href}
                  className={classNames(
                    pathname.endsWith(href) ? 'underline' : 'hover:bg-brandy-300 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={pathname.endsWith(href) ? 'page' : undefined}
                >
                  {name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavHeader;
