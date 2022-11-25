import { useState, useMemo } from 'react';

import { IMostInfo } from '@/interface/summoner';
import MatchesList from './MatchList';
import MostInfo from './MostInfo';

export interface RightAreaProps {
  mostInfo: IMostInfo;
}

export default function RightArea(props: RightAreaProps) {
  const { mostInfo } = props;

  const [selectedTab, setSelectedTab] = useState<number>(0);

  const t = {
    0: '전체',
    1: '솔랭',
    2: '자유 5:5 랭크',
  }[selectedTab];

  const games = useMemo(() => {
    if (selectedTab === 0) {
      return mostInfo.games;
    }

    return mostInfo.games.filter(game => {
      return game.gameType === t;
    });
  }, [mostInfo.games, selectedTab, t]);

  return (
    <div className="min-w-[690px] flex flex-col gap-[16px]">
      <MostInfo mostInfo={mostInfo} setSelectedTab={setSelectedTab} />
      <MatchesList games={games} />
    </div>
  );
}
