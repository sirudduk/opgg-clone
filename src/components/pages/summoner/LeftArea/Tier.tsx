import Image from 'next/image';

import usePosition from '@/hooks/usePosition';
import { ITier } from '@/interface/summoner';
import { PositionTypes } from '@/hooks/usePosition';

interface TierProps {
  tier: ITier;
  position: PositionTypes;
}

export default function Tier(props: TierProps) {
  const { positionText } = usePosition(props.position);

  const tierText = () => {
    const noSeries = ['Challenger', 'Grandmaster', 'Master'].includes(
      props.tier.tierRank.tier,
    );

    if (noSeries) return props.tier.tierRank.tier;
    const tierNumber =
      props.tier.tierRank.shortString[
        props.tier.tierRank.shortString.length - 1
      ];

    return `${props.tier.tierRank.tier} ${tierNumber}`;
  };

  const winRate = () => {
    return Math.round(
      (props.tier.wins / (props.tier.losses + props.tier.wins)) * 100,
    );
  };

  return (
    <div className="bg-gray-1 border border-gray-3 p-[16px] flex gap-[10px]">
      <Image
        width={100}
        height={100}
        src={props.tier.tierRank.imageUrl}
        alt="티어 이미지"
      />

      <div
        className={`flex flex-col gap-[4px] ${
          !props.tier.hasResults ? 'justify-center' : ''
        }`}>
        <span className="text-11 text-gray-40">
          {props.tier.tierRank.name === '솔랭'
            ? '솔로 랭크'
            : props.tier.tierRank.name}
        </span>
        <span className="text-12">
          <span className="font-bold">{positionText}</span>
          {` (총 ${props.tier.wins + props.tier.losses}게임)`}
        </span>

        {props.tier.hasResults ? (
          <div className="flex flex-col gap-[2px]">
            <span className="text-blue-10 font-bold text-15">{tierText}</span>
            <div className="text-12">
              <span className="text-gray-90 font-bold">
                {props.tier.tierRank.lp} LP
              </span>
              <span className="text-gray-40">
                {` / ${props.tier.wins}승 ${props.tier.losses}패`}
              </span>
            </div>
            <span className="text-12 text-gray-40">{`승률 ${winRate}%`}</span>
          </div>
        ) : (
          <span className="text-gray-40 font-bold text-13">Unranked</span>
        )}
      </div>
    </div>
  );
}
