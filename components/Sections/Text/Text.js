import React from "react";
import TextBoxedTwoCol from "./types/TextBoxedTwoCol";

export default function Text(props) {
  switch (props.type) {
    case "boxed-two-col":
      return <TextBoxedTwoCol {...props} />;
    default:
      return JSON.stringify(props, null, 2);
  }
}
