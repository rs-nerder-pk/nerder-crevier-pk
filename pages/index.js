import Sections from "../components/Sections/Sections";

export default function Home(props) {
  const { sections } = props;
  return <main>{sections && <Sections sections={sections} />}</main>;
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
  ];
  return {
    props: {
      sections,
    },
  };
}
