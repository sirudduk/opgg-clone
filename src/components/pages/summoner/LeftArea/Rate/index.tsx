import { useState } from 'react';
import { useRouter } from 'next/router';

import { IChampion } from '@/interface/summoner';
import useMostInfoQuery from '@/quires/summoner/useMostInfoQuery';
import Tabs, { TabItem, TabsTheme } from '@/components/ui/Tabs';
import ChampionsRate from './Champions';
import WinRateList from './WinRate';

export default function Rate() {
  const router = useRouter();
  const summonerName = router.query.summoner;
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const FIXED_TAB_GROUPS = [
    { tabId: 'champion', name: '챔피언 승률' },
    { tabId: 'rank', name: '7일간 랭크 승률' },
  ];

  const { data } = useMostInfoQuery(summonerName);

  const champions = () => {
    return data.champions.sort((a: IChampion, b: IChampion) => {
      return b.games - a.games;
    });
  };

  const recentWinRate = () => {
    return data.recentWinRate.sort((a: any, b: any) => {
      const aGame = a.wins + a.losses;
      const bGame = b.wins + b.losses;
      return bGame - aGame;
    });
  };

  return (
    <div className="border border-gray-3">
      <Tabs
        onChange={idx => {
          setSelectedIdx(idx);
        }}
        theme={TabsTheme.FULL}>
        {FIXED_TAB_GROUPS.map((item, idx) => (
          <TabItem key={item.tabId} tabid={item.tabId}>
            {item.name}
          </TabItem>
        ))}
      </Tabs>

      {selectedIdx === 0 && <ChampionsRate champions={champions} />}
      {selectedIdx === 1 && <WinRateList winRate={recentWinRate} />}
    </div>
  );
}
