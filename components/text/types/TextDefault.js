import React from "react";
import Content from "../../../demo/Content";

export default function TextDefault() {
  return (
    <section className="px-4 py-8 md:py-14 lg:py-20 relative ">
      <div className="grid md:grid-cols-12 container mx-auto ">
        <div className="md:col-start-4 md:col-span-7 ">
          <Content />
        </div>
      </div>
    </section>
  );
}
