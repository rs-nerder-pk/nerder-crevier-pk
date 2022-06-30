import React from "react";
import Content from "../../../demo/Content";
import RichTextWrapper from "@/components/UI/RichText/RichTextWrapper";
import RichTextObject from "demo/RichText";

export default function TextDefault({ content }) {
  return (
    <section className="px-4 py-8 md:py-14 lg:py-20 relative ">
      <div className="grid md:grid-cols-10 container mx-auto ">
        <div className="md:col-start-4 md:col-span-7 ">
          <RichTextWrapper richTexts={RichTextObject} />
        </div>
      </div>
    </section>
  );
}
