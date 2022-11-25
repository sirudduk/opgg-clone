import React, { useState } from 'react';

export enum TabsTheme {
  FULL = 'full',
  BASIC = 'basic',
}

export interface TabsPropsType {
  defaultSelectedIndex?: number;
  theme?: TabsTheme;
  fulfill?: boolean;
  children: React.ReactElement<TabPropsType>[];
  onChange: (index: number, id: string) => void;
}

export default function Tabs(props: TabsPropsType) {
  const [selectIndex, setSelectIndex] = useState(
    props.defaultSelectedIndex ? props.defaultSelectedIndex : 0,
  );
  const handleChange = (idx: number, tabId: string) => {
    setSelectIndex(idx);
    props.onChange(idx, tabId);
  };

  const tabsStyles = {
    [TabsTheme.FULL]: '',
    [TabsTheme.BASIC]: '',
  }[props.theme || TabsTheme.BASIC];

  return (
    <div className={`${tabsStyles} flex items-center text-12`}>
      {React.Children.map(props.children, (child: React.ReactElement, idx) => {
        return React.cloneElement(child, {
          index: idx,
          selected: selectIndex === idx,
          fulfill: props.fulfill,
          theme: props.theme,
          onClick: () => handleChange(idx, child.props.tabId),
        });
      })}
    </div>
  );
}

export interface TabPropsType {
  tabid: string;
  children: string;
  selected?: boolean;
  onClick?: () => void;
  theme?: TabsTheme;
  fulfill?: boolean;
}

export function TabItem(props: TabPropsType) {
  const tabStyles = {
    [TabsTheme.FULL]: `border-r last:border-r-0 w-full h-[44px] border-gray-3 ${
      props.selected ? 'text-gray-80' : 'text-gray-40 border-b bg-gray-1'
    }`,
    [TabsTheme.BASIC]: `h-[36px] px-[16px] text-12 ${
      props.selected
        ? 'font-bold text-[#1f8ecd] border-b-2 border-[#1f8ecd]'
        : ''
    }`,
  }[props.theme || TabsTheme.BASIC];

  return (
    <div
      className={`${tabStyles} ${
        props.selected ? 'font-bold' : ''
      } flex justify-center cursor-pointer items-center`}
      {...props}>
      <span>{props.children}</span>
    </div>
  );
}
