import React from "react";
import Content from "../../../demo/Content";

export default function TextDefault({ content }) {
  return (
    <section className="px-4 py-8 md:py-14 lg:py-20 relative ">
      <div className="grid md:grid-cols-10 container mx-auto ">
        <div className="md:col-start-4 md:col-span-7 ">
          {/*TODO: replace with Markdown or RichText compontent when adding Contentful Data */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </section>
  );
}
