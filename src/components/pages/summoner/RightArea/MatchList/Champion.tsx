import { useMemo } from 'react';
import Avatar, { AvatarSizeType } from '@/components/ui/Avatar';

interface MatchChampionProps {
  championImgUrl: string;
  peak: string[];
  spells: { imageUrl: string }[];
}
export default function MatchChampion(props: MatchChampionProps) {
  const { championImgUrl, peak, spells } = props;

  const championName = useMemo(() => {
    const removeString = championImgUrl.split('/champion/')[1];
    return removeString.slice(0, removeString.length - 4);
  }, [championImgUrl]);

  return (
    <div className="flex flex-col items-center justify-center gap-[8px]">
      <div className="flex gap-[8px]">
        <Avatar
          imgUrl={championImgUrl}
          size={AvatarSizeType.largest}
          isRounded
        />

        <div className="flex">
          <div className="flex flex-col gap-[2px]">
            {spells.map((item, idx) => (
              <Avatar
                key={idx}
                imgUrl={item.imageUrl}
                size={AvatarSizeType.small}
              />
            ))}
          </div>
          <div className="flex flex-col gap-[2px]">
            {peak.map((item, idx) => (
              <Avatar
                key={idx}
                imgUrl={item}
                size={AvatarSizeType.small}
                isRounded
              />
            ))}
          </div>
        </div>
      </div>
      <span className="text-11 text-gray-80">{championName}</span>
    </div>
  );
}
