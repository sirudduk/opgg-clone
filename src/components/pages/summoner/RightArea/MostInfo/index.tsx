import { useState, Dispatch, SetStateAction } from 'react';
import Tabs, { TabItem, TabsTheme } from '@/components/ui/Tabs';

import { IMostInfo } from '@/interface/summoner';
import MostPositions from './Positions';
import MostChampions from './Champions';
import MostWinRate from './WinRate';

interface MostInfoProps {
  mostInfo: IMostInfo;
  setSelectedTab: Dispatch<SetStateAction<number>>;
}

export default function MostInfo(props: MostInfoProps) {
  const { positions, summary, champions } = props.mostInfo;

  const FIXED_TAB_GROUPS = [
    { tabId: 'all', name: '전체' },
    { tabId: 'solo', name: '솔로랭크' },
    { tabId: 'free', name: '자유랭크' },
  ];

  return (
    <div className="border border-gray-3 bg-gray-1">
      <Tabs
        onChange={tabId => props.setSelectedTab(tabId)}
        theme={TabsTheme.BASIC}>
        {FIXED_TAB_GROUPS.map(item => (
          <TabItem key={item.tabId} tabid={item.tabId}>
            {item.name}
          </TabItem>
        ))}
      </Tabs>

      <div className="border-t border-gray-3 grid grid-cols-[276px_228px_1fr] ">
        <MostWinRate summary={summary} />
        <MostChampions champions={champions} />
        <MostPositions positions={positions} />
      </div>
    </div>
  );
}
