import { IChampion } from '@/interface/summoner';
import Avatar, { AvatarSizeType } from '@/components/ui/Avatar';
import useRate from '@/hooks/useRate';

export default function Champion(props: { champion: IChampion }) {
  const { assists, cs, deaths, games, imageUrl, kills, losses, name, wins } =
    props.champion;

  const { kdaRateStyle, winRateStyle, kdaText, kdaRate, csRate, winRate } =
    useRate({
      kills,
      deaths,
      assists,
      cs,
      wins,
      losses,
      games,
    });

  return (
    <div className="h-[53px] py-[4px] px-[15px] flex gap-[10px] border-gray-3 border-b last:border-b-0">
      <Avatar isRounded imgUrl={imageUrl} size={AvatarSizeType.largest} />

      <div className="flex w-full justify-between">
        <div className="flex flex-col justify-center">
          <span className="text-13 text-gray-4 font-bold w-[70px] text-ellipsis overflow-hidden whitespace-nowrap">
            {name}
          </span>
          <span className="text-11 text-gray-40">
            CS {cs} ({csRate})
          </span>
        </div>
        <div className="flex flex-col justify-center">
          <span
            className={`${
              kdaRateStyle().length ? kdaRateStyle() : 'text-gray-4'
            } text-13 font-bold`}>
            {kdaRate}:1 평점
          </span>
          <span className="text-11 text-gray-40">{kdaText}</span>
        </div>
        <div className="flex flex-col justify-center">
          <span
            className={`text-13 font-bold ${
              winRateStyle().length ? winRateStyle() : 'text-gray-4'
            }`}>
            {winRate}%
          </span>
          <span className="text-11 text-gray-40">{games}게임</span>
        </div>
      </div>
    </div>
  );
}
