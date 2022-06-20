import React from "react";

export default function OutlinedWhite({ children }) {
  return (
    <div className="outline-[45px] outline-white outline">
      {children && children}
    </div>
  );
}
