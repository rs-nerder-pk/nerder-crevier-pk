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
    const contentType = section?.sys?.contentType?.sys?.id;
    switch (contentType) {
      case "blockPageBanner":
        const image = section.fields.background
          ? section.fields.background.fields
          : {
              file: { url: "/images/banner-home.jpeg" },
              description: "Banner Background",
            };
        return (
          <Banner
            {...section}
            content={section.fields.bannerTitle.content}
            image={image}
          />
        );
      // case "callOuts":
      //   return <CallOuts {...section} />;
      case "textWithImage":
        return (
          <ImageWithText
            type={section.fields.type}
            content={section.fields.text}
            image={section.fields.image?.fields}
            buttons={section.fields.links}
          />
        );
      // case "cta":
      //   return <Cta {...section} />;
      case "blockTextWithButton":
        if (section.fields.type === "stationsCta") {
          return <StationsCta content={section.fields.text?.content} />;
        }
        break;
      case "blockFullImage":
        if (section.fields.type === "stationFinder") {
          return <StationFinder {...section} />;
        }
        break;
      case "testWithLink":
        return (
          <Text
            type={section.fields.type}
            content={section.fields.text.content}
          />
        );
      default:
        return (
          // <pre>
          //   {section.contentType}
          //   <br></br>
          //   {JSON.stringify(section, null, 2)}
          // </pre>
          <></>
        );
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
