import { Fragment } from "react";
import Banner from "../banner/Banner";
import CallOuts from "../callouts/Callouts";
import Cta from "../cta/Cta";
import ImageWithText from "../imageWithText/ImageWithText";
import StationFinder from "../stationFinder/StationFinder";
import StationsCta from "../stationsCta/StationsCta";
import Text from "../text/Text";

export default function Sections({ sections }) {
  const getSectionComponent = (section) => {
    switch (section.contentType) {
      case "banner":
        return <Banner {...section} />;
      case "callOuts":
        return <CallOuts {...section} />;
      case "imageWithText":
        return <ImageWithText {...section} />;
      case "cta":
        return <Cta {...section} />;
      case "stationsCta":
        return <StationsCta {...section} />;
      case "stationFinder":
        return <StationFinder {...section} />;
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
