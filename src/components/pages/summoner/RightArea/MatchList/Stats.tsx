import { IStats } from '@/interface/summoner';

interface MatchStatsProps {
  stats: IStats;
}
interface MatchStats2Props {
  stats: IStats;
  level: number;
}

export function MatchStats(props: MatchStatsProps) {
  const { stats } = props;

  return (
    <div className="flex flex-col items-center justify-center gap-[4px]">
      <div className="text-15 font-bold text-gray-70">
        <span>{`${stats.kill} / `}</span>
        <span className="text-[#d0021b]">{stats.death}</span>
        <span>{` / ${stats.assist}`}</span>
      </div>
      <span className="text-11 font-bold">{stats.kdaString} 평점</span>
    </div>
  );
}

export function MatchStats2(props: MatchStats2Props) {
  const { stats, level } = props;
  return (
    <div className="flex flex-col items-center justify-center gap-[4px]">
      <span className="text-11">{`레벨 ${level}`}</span>
      <span className="text-11">{`${stats.cs} (${stats.csPerMin}) CS`}</span>
      <span className="text-11 text-[#d0021b]">{`킬관여 ${stats.contributionForKillRate}`}</span>
    </div>
  );
}
