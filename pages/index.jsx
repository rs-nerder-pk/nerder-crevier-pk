import Sections from "../components/sections/Sections";

export default function Home(props) {
  const { sections } = props;
  return <main>{sections && <Sections sections={sections} />}</main>;
}

export async function getStaticProps() {
  const sections = [
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
      type: "offsetImageLeftOnBlue",
    },
    {
      sys: {
        id: Math.random(),
      },
      contentType: "stationsCta",
      type: "default",
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
    // {
    //   sys: {
    //     id: Math.random(),
    //   },
    //   contentType: "text",
    //   type: "default",
    // },
    // {
    //   sys: {
    //     id: Math.random(),
    //   },
    //   contentType: "text",
    //   type: "boxed-two-col",
    // },
    // {
    //   sys: {
    //     id: Math.random(),
    //   },
    //   contentType: "callOuts",
    //   type: "bg-primary-padding-bottom",
    // },
    // {
    //   sys: {
    //     id: Math.random(),
    //   },
    //   contentType: "callOuts",
    //   type: "inset-bg-white",
    // },
    // {
    //   sys: {
    //     id: Math.random(),
    //   },
    //   contentType: "cta",
    //   type: "bg-offset-top",
    // },

    // {
    //   sys: {
    //     id: Math.random(),
    //   },
    //   contentType: "text",
    //   type: "boxed-two-col-with-list",
    // },
    // {
    //   sys: {
    //     id: Math.random(),
    //   },
    //   contentType: "text",
    //   type: "boxed-two-col",
    // },
    // {
    //   sys: {
    //     id: Math.random(),
    //   },
    //   contentType: "text",
    //   type: "default",
    // },
    // {
    //   sys: {
    //     id: Math.random(),
    //   },
    //   contentType: "text",
    //   type: "with-two-cols",
    // },
  ];
  return {
    props: {
      sections,
    },
  };
}
