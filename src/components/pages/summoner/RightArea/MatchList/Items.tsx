import Image from 'next/image';
import Avatar, { AvatarSizeType } from '@/components/ui/Avatar';

interface MatchItemsProps {
  items: { imageUrl: string }[];
  ward: number;
  isWin: boolean;
}

export default function MatchItems(props: MatchItemsProps) {
  const ItemsTemps = [0, 1, 2, 3, 4, 5, 6, 7];

  const wardImgUrl = !props.isWin
    ? '/assets/icons/ward-red.svg'
    : '/assets/icons/ward-blue.svg';

  return (
    <div className="flex items-center flex-col justify-center gap-[8px]">
      <div className="grid grid-cols-4 gap-[2px] items-center grid-rows-[24px_24px]">
        {ItemsTemps.map(idx => {
          const item = props.items[idx];
          if (item)
            return (
              <Avatar
                key={idx}
                imgUrl={item.imageUrl}
                size={AvatarSizeType.small}
              />
            );
          return <div key={idx} className="shadow-md w-[22px] h-[22px]" />;
        })}
      </div>
      <div className="flex gap-[4px]">
        <Image src={wardImgUrl} width="16" height="16" alt="와드" />
        <span className="text-11">{`제어와드 ${props.ward}`}</span>
      </div>
    </div>
  );
}
