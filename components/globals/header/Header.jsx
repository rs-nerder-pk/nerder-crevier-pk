import Link from "next/link";
import React from "react";
import Logo from "../../logo/Logo";
import MenuToggle from "../menus/Toggle";
import LanguageSwitch from "../menus/LanguageSwitch/LanguageSwitch";
import MainMenu from "../menus/mainMenu/MainMenu";
import TopMenu from "../menus/TopMenu";
import SplitColumns from "../../UI/containers/SplitColumns";

export default function Header({ header }) {
  const topLinks = [];
  const mainLinks = [];
  const findStation = [];
  header.forEach((headerLink) => {
    if (headerLink.fields.type === "topItem") {
      topLinks.push(headerLink.fields);
    } else if (headerLink.fields.type === "mainItem") {
      mainLinks.push(headerLink.fields);
    } else if (headerLink.fields.type === "findStation") {
      findStation.push(headerLink.fields);
    }
  });
  return (
    <header className="pt-[1.85em] md:pt-8 px-4 ">
      <SplitColumns
        leftComponent={<LeftHeader />}
        rightComponent={
          <RightHeader
            topLinks={topLinks}
            mainLinks={mainLinks}
            findStation={findStation}
          />
        }
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

const RightHeader = ({ topLinks, mainLinks, findStation }) => {
  return (
    <div className="grid  gap-16">
      <div className="w-full flex gap-4 text-xs lg:text-sm justify-end items-center">
        <TopMenu links={topLinks} />
        <LanguageSwitch />
      </div>
      <div>
        <MainMenu
          links={mainLinks}
          findStation={findStation.length > 0 ? findStation[0] : []}
        />
      </div>
    </div>
  );
};
