import Image from 'next/image';

interface AvatarProps {
  imgUrl?: string;
  isRounded?: boolean;
  size: AvatarSizeType;
}

export enum AvatarSizeType {
  smallest = 16,
  small = 22,
  medium = 32,
  large = 35,
  largest = 45,
}

export default function Avatar(props: AvatarProps) {
  const { imgUrl = '', isRounded, size } = props;
  const defaultImgUrl = '/assets/imgs/champ.png';

  const getImgUrl = () => {
    const removeString = imgUrl.substring(0, imgUrl.indexOf('opgg', 0));

    return 'https://' + imgUrl.replace(removeString, '');
  };

  return (
    <Image
      className={`${isRounded ? 'rounded-[100%]' : ''}`}
      width={size}
      height={size}
      src={imgUrl.length !== 0 ? getImgUrl : defaultImgUrl}
      alt="챔피언, 아이템"
    />
  );
}
