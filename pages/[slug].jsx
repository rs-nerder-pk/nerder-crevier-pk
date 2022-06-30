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
      Crevier Group is a family business handed down from generation to generation.
Founded by Émile Crevier in 1945, the company started in retail, selling heating oil and later supplying wholesale fuel and petroleum products to independent resellers in Montreal's West Island.
In the mid-1980s, the second generation took up the reins, expanding its operations to supply independent gas station owners under the Crevier banner. The subsidiary Crevier Lubricants was established at this time, making Crevier one of Eastern Canada's largest independent oil companies.
The lubricant division expanded in the 2000s, when Crevier became the main distributor of Chevron products for Eastern Canada. Crevier Lubricants later became a 1st Source Elite Chevron Marketer, which represents the highest level of performance and customer satisfaction.
In 2012, to meet all its customers' energy needs, Crevier Group added aviation fuel to its “One Stop Shop” offer. The Group then continued its geographic expansion by starting its lubricant distribution activities in British Columbia under the name Catalys Lubricants, which allowed the company to establish itself from coast to coast.
The third generation took the helm in 2014. With new energy and fresh perspectives, they have continued the Crevier tradition of pursuing excellence.
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
  console.log(sections);
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
