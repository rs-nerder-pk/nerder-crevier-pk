import Sections from "@/components/sections/Sections";
import { useRouter } from "next/router";
import React from "react";

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

export default function SlugPage({ title, sections }) {
  // console.log(sections);
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
    { params: { slug: "redirect" } },
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
