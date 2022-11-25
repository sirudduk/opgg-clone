import Avatar, { AvatarSizeType } from '@/components/ui/Avatar';
import useRate from '@/hooks/useRate';
import { IChampion } from '@/interface/summoner';
import React from 'react';

interface MostChampionProps {
  champion: IChampion;
}

export default function MostChampion(props: MostChampionProps) {
  const { champion } = props;

  const { kdaRateStyle, winRateStyle, kdaRate, winRate } = useRate({
    kills: champion.kills,
    deaths: champion.deaths,
    assists: champion.assists,
    wins: champion.wins,
    losses: champion.losses,
  });

  return (
    <div className="flex gap-[8px] items-center">
      <Avatar
        imgUrl={champion.imageUrl}
        size={AvatarSizeType.large}
        isRounded
      />
      <div className="flex flex-col">
        <span className="text-14 text-gray-80">{champion.name}</span>
        <span className="text-11">
          <span className={`${winRateStyle()} font-bold`}>{winRate}%</span>
          <span className=" text-gray-5">{` (${champion.wins}승 ${champion.losses}패)`}</span>
          <span className="border-r border-gray-3 mx-[8px]" />
          <span
            className={`${kdaRateStyle()} font-bold`}>{`${kdaRate} 평점`}</span>
        </span>
      </div>
    </div>
  );
}

export function Empty() {
  return (
    <div className="flex items-center gap-[8px]">
      <Avatar size={AvatarSizeType.large} isRounded />
      <span className="text-11 text-gray-40">챔피언 정보가 없습니다.</span>
    </div>
  );
}
