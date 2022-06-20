import Sections from "../components/sections/Sections";

export default function Home(props) {
  const { sections } = props;
  return (
    <main
      className="bg-[length:0%] md:bg-[length:50%] bg-no-repeat bg-left-bottom"
      style={{ backgroundImage: `url(/images/bg-page.jpeg)` }}
    >
      {sections && <Sections sections={sections} />}
    </main>
  );
}

export async function getStaticProps() {
  const sections = [
    {
      sys: {
        id: "adfadfeu9u0",
      },
      contentType: "banner",
      type: "",
    },
    {
      sys: {
        id: "adasdfdfadfeu9u0",
      },
      contentType: "imageWithText",
      type: "offsetImageLeftOnBlue",
    },
    {
      sys: {
        id: "adfadfeu9u0",
      },
      contentType: "stationsCta",
      type: "default",
    },
    {
      sys: {
        id: "adfadfeu9u0",
      },
      contentType: "text",
      type: "default",
    },
    {
      sys: {
        id: "adfadfeu9u0",
      },
      contentType: "text",
      type: "boxed-two-col",
    },
    {
      sys: {
        id: "adfadfeu9u0",
      },
      contentType: "callOuts",
      type: "bg-primary-padding-bottom",
    },
    {
      sys: {
        id: "adfadfeu9u0",
      },
      contentType: "callOuts",
      type: "inset-bg-white",
    },
    {
      sys: {
        id: "adfadfeu9u0",
      },
      contentType: "cta",
      type: "bg-offset-top",
    },

    {
      sys: {
        id: "adfadfeu9u0",
      },
      contentType: "text",
      type: "boxed-two-col-with-list",
    },
    {
      sys: {
        id: "adfadfeu9u0",
      },
      contentType: "text",
      type: "boxed-two-col",
    },
    {
      sys: {
        id: "adfadfeu9u0",
      },
      contentType: "text",
      type: "default",
    },
    {
      sys: {
        id: "adfadfeu9u0",
      },
      contentType: "text",
      type: "with-two-cols",
    },
  ];
  return {
    props: {
      sections,
    },
  };
}
