import React from 'react';

export default function MenuToggle() {
  return (
    <button aria-label={`toggle menu open`} className="grid gap-1 w-8">
      <span className="border-blue border-t-[3px] rounded-sm" />
      <span className="border-blue border-t-[3px] rounded-sm" />
      <span className="border-blue border-t-[3px] rounded-sm" />
    </button>
  );
}
