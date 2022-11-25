import React from 'react';

export default function Container(props: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-2 w-full flex justify-center py-[10px]">
      <div className="max-w-[1000px] w-full">{props.children}</div>
    </div>
  );
}
