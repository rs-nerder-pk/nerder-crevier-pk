import { Fragment } from "react";
import Banner from "./Banner/Banner";
import CallOuts from "./CallOuts";
import Cta from "./Cta/Cta";
import Text from "./Text/Text";

export default function Sections({ sections }) {
  const getSectionComponent = (section) => {
    switch (section.contentType) {
      case "banner":
        return <Banner {...section} />;
      case "callOuts":
        return <CallOuts {...section} />;
      case "cta":
        return <Cta {...section} />;
      case "text":
        return <Text {...section} />;
      default:
        return JSON.stringify(section, null, 2);
    }
  };
  return sections.map((section, i) => {
    return (
      <Fragment key={section.sys.id + i}>
        {getSectionComponent(section)}
      </Fragment>
    );
  });
}
