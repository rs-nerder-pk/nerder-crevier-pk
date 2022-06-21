import Sections from "@/components/sections/Sections";
import React from "react";

const mockData = {
  "about-us": [
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
  careers: [
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

export default function SlugPage({ title, sections }) {
  return <main>{sections && <Sections sections={sections} />}</main>;
}

export async function getStaticPaths() {
  const paths = [
    { params: { slug: "about-us" } },
    { params: { slug: "careers" } },
    { params: { slug: "contact-us" } },
    { params: { slug: "fleet-cards" } },
    { params: { slug: "gift-cards" } },
    { params: { slug: "stations" } },
  ];
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  return {
    props: {
      title: slug,
      sections: mockData[slug],
    },
  };
}
