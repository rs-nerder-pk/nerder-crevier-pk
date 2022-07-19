import { useContext, useEffect } from "react";
import { OppositeSlugContext } from "context/oppositeSlugContext";
import { fetchEntryBySlug, getEntryById } from "utils/contentful";
import Sections from "../components/sections/Sections";

export default function Home({ sections, seo, oppositeSlug }) {
  const [_, setOppositeSlug] = useContext(OppositeSlugContext);
  useEffect(() => {
    setOppositeSlug(oppositeSlug);
  }, [oppositeSlug, setOppositeSlug]);
  // const { sections } = props;
  return <main>{sections && <Sections sections={sections} />}</main>;
}

export async function getStaticProps({ locale }) {
  const contentfulLocale = locale === "en-US" ? "en-US" : "fr-CA";
  const entry = await fetchEntryBySlug("/", contentfulLocale);
  const sections = entry?.fields?.sections ? entry.fields.sections : [];

  const headerID = "33TDxOkFtBYk2hxtOMzhis";
  const headerEntry = await getEntryById(headerID, contentfulLocale);
  const header = headerEntry?.fields?.textWithPaths
    ? headerEntry.fields.textWithPaths
    : [];

  const footerID = "33TDxOkFtBYk2hxtOMzhis";
  const footerEntry = await getEntryById(footerID, contentfulLocale);
  const footer = footerEntry?.fields?.textWithPaths
    ? footerEntry.fields.textWithPaths
    : [];
  const seo = {};
  return {
    props: {
      seo,
      sections,
      oppositeSlug: "/",
      header,
      footer,
    },
  };
}
