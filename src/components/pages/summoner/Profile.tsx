import Image from 'next/image';

import { IPreviousTiers, ILadderRank } from 'src/interface/summoner';
import Container from '@/components/layout/Container';
import Badge from '@/components/ui/Badge';

interface ProfileProps {
  name: string;
  ladderRank: ILadderRank;
  previousTiers: IPreviousTiers[];
  profileImageUrl: string;
  profileBorderImageUrl: string;
  level: number;
}

export default function Profile(props: ProfileProps) {
  return (
    <div className="w-full border-b border-gray-3">
      <Container>
        <div className="py-[15px] px-[20px]">
          <div className="flex gap-[7px]">
            {props.previousTiers.map((item: IPreviousTiers, idx: number) => (
              <Badge key={idx} season={item.season} tier={item.tier} />
            ))}
          </div>

          <div className="flex gap-[16px] mt-[12px]">
            <div className="relative w-[120px] h-[120px]">
              <Image
                className="absolute"
                src={props.profileBorderImageUrl}
                width={120}
                height={120}
                alt="프로필 배경"
              />
              <Image
                className="absolute top-[12px] left-[12px]"
                src={props.profileImageUrl}
                width={97}
                height={90}
                alt="프로필"
              />
              <span className="absolute bottom-0 left-[45px] bg-gray-50 px-[5px]">
                {props.level}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-20 font-bold">{props.name}</span>
              <span className="text-11 text-gray-50">
                레더 랭킹
                <span className="font-bold">
                  {' '}
                  {props.ladderRank.rank.toLocaleString('ko-KR')}위{' '}
                </span>
                (상위 {props.ladderRank.rankPercentOfTop}%)
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
