import React from "react";
import RichText from "./RichText";
export default function RichTextWrapper({ richTexts, className = "" }) {
  console.log({ richTexts });
  return (
    <div className={"richText " + className}>
      {richTexts.map((richText, i) => {
        return <RichText key={i}>{richText}</RichText>;
      })}
    </div>
  );
}
