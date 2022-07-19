import Sections from "@/components/sections/Sections";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import {
  fetchEntries,
  fetchEntryBySlug,
  fetchOppositeEntrySlug,
  getEntryById,
} from "utils/contentful";
import { OppositeSlugContext } from "context/oppositeSlugContext";

const mockData = {
  "about-us": [
    {
      sys: {
        id: Math.random(),
      },
      contentType: "banner",
      type: "",
      image: {
        url: "/images/banner-home.jpeg",
      },
      content: `
      <h1><b>Our</b>
      History</h1>
      `,
    },
    {
      sys: {
        id: Math.random(),
      },
      contentType: "text",
      type: "default",
      content: `
      <h2>About Us</h2>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aperiam vel sunt doloribus quasi incidunt veniam minus dolores voluptas culpa 
      enim nihil harum asperiores vero, a excepturi quo voluptatibus. Natus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aperiam 
      vel sunt doloribus quasi incidunt veniam minus dolores voluptas culpa enim nihil harum asperiores vero, a excepturi quo voluptatibus. Natus?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aperiam vel sunt doloribus quasi incidunt veniam minus dolores voluptas culpa 
      enim nihil harum asperiores vero, a excepturi quo voluptatibus. Natus?
      </p>
      `,
    },
  ],
  careers: [
    // {
    //   sys: {
    //     id: Math.random(),
    //   },
    //   contentType: "banner",
    //   type: "",
    // },
    {
      sys: {
        id: Math.random(),
      },
      contentType: "cta",
      type: "bg-offset-top",
    },
  ],
  "contact-us": [
    {
      sys: {
        id: Math.random(),
      },
      contentType: "banner",
      type: "",
    },
    {
      sys: {
        id: Math.random(),
      },
      contentType: "text",
      type: "default",
    },
  ],
  "fleet-cards": [
    {
      sys: {
        id: Math.random(),
      },
      contentType: "banner",
      type: "",
    },
    {
      sys: {
        id: Math.random(),
      },
      contentType: "imageWithText",
      type: "boxedContentImageRight",
    },
    {
      sys: {
        id: Math.random(),
      },
      contentType: "imageWithText",
      type: "boxedContentImageRight",
    },
  ],
  "gift-cards": [
    {
      sys: {
        id: Math.random(),
      },
      contentType: "banner",
      type: "",
    },
    {
      sys: {
        id: Math.random(),
      },
      contentType: "imageWithText",
      type: "boxedContentImageRight",
    },
    {
      sys: {
        id: Math.random(),
      },
      contentType: "imageWithText",
      type: "boxedContentImageRight",
    },
  ],

  stations: [
    {
      sys: {
        id: Math.random(),
      },
      contentType: "stationFinder",
      type: "",
    },
  ],
};

export default function SlugPage({ sections, contentBlocks, oppositeSlug }) {
  const [_, setOppositeSlug] = useContext(OppositeSlugContext);
  useEffect(() => {
    setOppositeSlug(oppositeSlug);
  }, [oppositeSlug, setOppositeSlug]);
  return <main>{sections && <Sections sections={sections} />}</main>;
}

export async function getStaticPaths() {
  // const paths = [
  //   { params: { slug: "about-us" } },
  //   { params: { slug: "careers" } },
  //   { params: { slug: "contact-us" } },
  //   { params: { slug: "fleet-cards" } },
  //   { params: { slug: "gift-cards" } },
  //   { params: { slug: "stations" } },
  //   { params: { slug: "redirect" } },
  // ];
  const paths = [];
  const locales = ["en-US", "fr-CA"];
  for (const i in locales) {
    const localeEntries = await fetchEntries(locales[i]);
    localeEntries
      .filter((page) => {
        return page.fields.slug && page.fields.slug !== "/";
      })
      .forEach((entry) => {
        const localeSlugs = entry.fields.slug.slice(1).split("/");
        paths.push({ params: { slug: localeSlugs }, locale: locales[i] });
      });
  }
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps({ locale, params }) {
  const {
    slug: [pageSlug],
  } = params;
  // const slug = params.slug;
  const contentfulLocale = locale === "en-US" ? "en-US" : "fr-CA";
  const entry = await fetchEntryBySlug("/" + pageSlug, contentfulLocale);
  const oppositeSlug = await fetchOppositeEntrySlug(
    entry.sys.id,
    contentfulLocale
  );
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
      oppositeSlug,
      header,
      footer,
    },
  };
}
