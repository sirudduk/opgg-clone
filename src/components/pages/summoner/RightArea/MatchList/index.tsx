import MatchStatus from './Status';
import MatchChampion from './Champion';
import { MatchStats, MatchStats2 } from './Stats';
import MatchTeams from './Teams';
import MatchItems from './Items';

import { IGames } from '@/interface/summoner';

interface MatchListProps {
  games: IGames[];
}

export default function MatchList(props: MatchListProps) {
  const { games } = props;

  return (
    <div className="flex flex-col gap-[8px]">
      {games.map((item, idx) => (
        <div
          className={`${
            item.isWin ? 'bg-[#b0ceea]' : 'bg-[#d6b5b2]'
          } grid pr-[16px] py-[4px] grid-cols-[80px_100px_80px_60px_100px_1fr] gap-[16px]`}
          key={idx}>
          <MatchStatus
            gameType={item.gameType}
            needRenew={item.needRenew}
            createDate={item.createDate}
            isWin={item.isWin}
            gameLength={item.gameLength}
          />
          <MatchChampion
            championImgUrl={item.champion.imageUrl}
            peak={item.peak}
            spells={item.spells}
          />
          <MatchStats stats={item.stats.general} />
          <MatchStats2 stats={item.stats.general} level={item.champion.level} />
          <MatchItems
            items={item.items}
            ward={item.stats.ward.visionWardsBought}
            isWin={item.isWin}
          />
          <MatchTeams gameId={item.gameId} />
        </div>
      ))}
    </div>
  );
}
