import React from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { toast } from 'react-toastify';

const navigation = [
  { name: '오토렌트·리스', href: '#', current: true },
  { name: '신용대출', href: '#', current: false },
  { name: '담보대출', href: '#', current: false },
  { name: '계산기', href: '#', current: false }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar: React.FC = () => {
  const handleAlert = () => {
    toast.info('페이지 준비중입니다.', {
      autoClose: 1000
    });
  };
  return (
    <>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <Link to="/" className="text-indigo-500 text-2xl font-bold">
                      finda
                    </Link>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={handleAlert}
                          className={classNames(
                            item.current
                              ? 'text-indigo-500 font-semibold underline'
                              : 'text-gray-300 hover:text-indigo-500',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}>
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden sm:block">
                  <button
                    type="button"
                    onClick={handleAlert}
                    className="text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-200 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 ">
                    <span className=" text-white">앱 다운받기</span>
                  </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'text-indigo-500 font-semibold underline'
                        : 'text-gray-300 hover:text-indigo-500',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}>
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
