import React from "react";

export default function Overlapped({ content, image }) {
  return (
    <div className="md:grid  split-columns">
      <div className=""></div>
      <div className="col-start-2 col-span-2 row-start-1 z-10">
        {content && content}
      </div>
      <div className="col-start-3 col-span-2 row-start-1 relative md:-mr-4 min-h-[470px]">
        {image && image}
      </div>
      <div className=""></div>
    </div>
  );
}
