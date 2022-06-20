import React from "react";

export default function SplitColumns({ leftComponent, rightComponent }) {
  return (
    <div className="md:grid  split-columns">
      <div className=""></div>
      <div className="col-start-2 col-span-1 row-start-1">
        {leftComponent && leftComponent}
      </div>
      <div className="col-start-3  row-start-1 relative md:-mr-4">
        {rightComponent && rightComponent}
      </div>
      <div className=""></div>
    </div>
  );
}
