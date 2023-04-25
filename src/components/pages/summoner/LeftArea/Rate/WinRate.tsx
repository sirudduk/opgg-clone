import WinRateChart from './WinRateChart';
import { winRateCalc } from 'src/utils/calc';
import { IWinRate } from '@/interface/summoner';
import Avatar, { AvatarSizeType } from '@/components/ui/Avatar';

interface WinRateProps {
  winRate: IWinRate[];
}

export default function WinRateList(props: WinRateProps) {
  return (
    <div className="flex flex-col">
      {props.winRate.map((item: IWinRate, idx: number) => (
        <WinRate key={idx} winRate={item} />
      ))}
    </div>
  );
}

function WinRate(props: { winRate: IWinRate }) {
  const winRate =() => {
    return winRateCalc(
      props.winRate.wins,
      props.winRate.wins + props.winRate.losses,
    ),
  }

  return (
    <div className="px-[15px] py-[8px] flex justify-between border-b border-gray-3 last:border-b-0">
      <div className="flex items-center gap-[10px]">
        <Avatar
          imgUrl={props.winRate.imageUrl}
          size={AvatarSizeType.medium}
          isRounded
        />
        <span className="text-gray-4 text-13 font-bold">
          {props.winRate.name}
        </span>
      </div>

      <div className="flex items-center gap-[10px]">
        <span className="text-13 text-gray-40 font-bold">{winRate}%</span>
        <WinRateChart wins={props.winRate.wins} losses={props.winRate.losses} />
      </div>
    </div>
  );
}
