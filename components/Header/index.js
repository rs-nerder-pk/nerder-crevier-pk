import Link from "next/link";
import React from "react";
import Logo from "../Logo";
import MenuToggle from "../Menus/Toggle";
import LanguageSwitch from "../Menus/LanguageSwitch";
import MainMenu from "../Menus/MainMenu";
import TopMenu from "../Menus/TopMenu";

export default function Header() {
  return (
    <header className="pt-[1.85em] md:pt-8 px-5">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-10 items-center md:items-start">
        <div className="md:col-span-3">
          <Link href="/">
            <a className="">
              <Logo />
            </a>
          </Link>
        </div>
        <div className="justify-self-end md:justify-self-auto md:col-span-7">
          <div className="md:hidden">
            <MenuToggle />
          </div>
          <div className="hidden  w-full md:grid gap-4 md:gap-8 lg:gap-10 xl:gap-16">
            <div className="w-full flex gap-4 text-xs lg:text-sm justify-between items-center">
              <TopMenu />
              <LanguageSwitch />
            </div>
            <MainMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
