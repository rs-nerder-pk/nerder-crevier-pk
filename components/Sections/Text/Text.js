import React from "react";
import TextBoxedTwoCol from "./types/TextBoxedTwoCol";
import TextWithTwoCols from "./types/TextWithTwoCols";
import TextDefault from "./types/TextDefault";
import TextBoxedTwoColWithList from "./types/TestBoxedTwoColWithList";

export default function Text(props) {
  switch (props.type) {
    case "boxed-two-col":
      return <TextBoxedTwoCol {...props} />;
    case "boxed-two-col-with-list":
      return <TextBoxedTwoColWithList {...props} />;
    case "with-two-cols":
      return <TextWithTwoCols {...props} />;
    case "default":
    default:
      return <TextDefault {...props} />;
  }
}
