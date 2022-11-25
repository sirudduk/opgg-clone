import PieChart from '@/components/ui/chart/Pie';
import { ISummary } from '@/interface/summoner';
import useRate from '@/hooks/useRate';

interface MostWinRateProps {
  summary: ISummary;
}

export default function MostWinRate(props: MostWinRateProps) {
  const { summary } = props;

  const { kdaRateStyle, winRateStyle, kdaText, kdaRate, winRate, winPercent } =
    useRate({
      kills: summary.kills,
      deaths: summary.deaths,
      assists: summary.assists,
      wins: summary.wins,
      losses: summary.losses,
    });
  return (
    <div className="px-[24px] py-[16px] flex gap-[32px] border-r border-gray-3 last:bottom-r-0">
      <div className="flex flex-col gap-[16px]">
        <span className="text-12 text-gray-5">{`${
          summary.wins + summary.losses
        }전 ${summary.wins}승 ${summary.losses}패`}</span>
        <PieChart percent={winPercent} />
      </div>
      <div className="flex flex-col items-center justify-center gap-[4px]">
        <span className="text-11">{kdaText}</span>
        <div>
          <span
            className={`font-bold ${kdaRateStyle()}`}>{`${kdaRate}:1 `}</span>
          <span className={`${winRateStyle()}`}>({winRate}%)</span>
        </div>
      </div>
    </div>
  );
}
