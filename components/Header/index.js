import Link from 'next/link';
import React from 'react';
import Logo from '../Logo';
import MenuToggle from '../Menu/Toggle';
import LanguageSwitch from '../Menus/LanguageSwitch';
import TopMenu from '../Menus/TopMenu';

export default function Header() {
  return (
    <header className="py-[1.85em] px-5">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-8 items-center">
        <div className="md:col-span-3">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>

        <div className="justify-self-end md:col-span-5 md:justify-self-stretch ">
          <div className="md:hidden">
            <MenuToggle />
          </div>
          <div className="hidden md:block w-full">
            <div className="w-full flex gap-4 text-xs justify-between items-center">
              <TopMenu />
              <LanguageSwitch />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
