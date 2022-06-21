import Link from "next/link";
import React from "react";
import Logo from "../../logo/Logo";
import MenuToggle from "../menus/Toggle";
import LanguageSwitch from "../menus/LanguageSwitch/LanguageSwitch";
import MainMenu from "../menus/mainMenu/MainMenu";
import TopMenu from "../menus/TopMenu";
import SplitColumns from "../../UI/containers/SplitColumns";

export default function Header() {
  return (
    <header className="pt-[1.85em] md:pt-8 px-4 ">
      <SplitColumns
        leftComponent={<LeftHeader />}
        rightComponent={<RightHeader />}
      />
    </header>
  );
}
``;

const LeftHeader = () => {
  return (
    <div className="md:pt-6">
      <Link href="/">
        <a className="">
          <Logo />
        </a>
      </Link>
    </div>
  );
};

const RightHeader = () => {
  return (
    <div className="grid  gap-16">
      <div className="w-full flex gap-4 text-xs lg:text-sm justify-end items-center">
        <TopMenu />
        <LanguageSwitch />
      </div>
      <div>
        <MainMenu />
      </div>
    </div>
  );
};
