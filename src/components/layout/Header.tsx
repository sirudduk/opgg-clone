import React from 'react';

export default function Header(props: { children: React.ReactNode }) {
  return (
    <div className="h-[97px] w-full bg-[#1ea1f7] flex justify-center min-w-[1000px]">
      <div className="flex justify-end items-end h-full w-[1000px] py-[12px]">
        {props.children}
      </div>
    </div>
  );
}
