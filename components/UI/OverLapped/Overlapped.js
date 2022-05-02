import React from "react";

export default function Overlapped({ col1, col2 }) {
  return (
    <div className="px-4">
      <div className="md:grid  something">
        <div className=""></div>
        <div className="col-start-2 col-span-2 row-start-1 z-10">
          <div className="md:grid grid-cols-10 py-8">
            <div className="col-span-4 bg-white p-8 md:pl-0">
              {col1 && col1}
            </div>
          </div>
        </div>
        <div className="col-start-3 col-span-2 row-start-1 relative md:-mr-4">
          {col2 && col2}
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
