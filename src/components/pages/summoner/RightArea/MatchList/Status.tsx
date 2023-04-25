import dayjs from 'dayjs';

interface GameStateProps {
  gameType: string;
  createDate: number;
  needRenew: boolean;
  isWin: boolean;
  gameLength: number;
}

export default function MatchStatus(props: GameStateProps) {
  const { gameType, createDate, needRenew, isWin, gameLength } = props;

  const gameTime = () => {
    Math.floor(gameLength / 60);
  };

  const winDescription = () => {
    if (needRenew) return '다시하기';
    return isWin ? '승리' : '패배';
  };

  const winStyle = () => {
    if (needRenew) return 'text-gray-80';
    return isWin ? 'text-[#2c709b]' : 'text-[#d0021b]';
  };

  const gameDate = () => {
    const day = dayjs(createDate * 1000);

    const diffMin = dayjs().diff(day, 'minutes');
    if (diffMin < 60) return `${diffMin}분 전`;

    const diffHour = dayjs().diff(day, 'hours');
    if (diffHour < 24) return `${diffHour}시간 전`;
    const diffDay = dayjs().diff(dayjs(createDate * 1000), 'day');
    if (diffDay === 1) return '하루전';

    return `${diffDay}일 전`;
  };

  return (
    <div className="flex flex-col gap-[4px] items-center justify-center">
      <span className="text-11 font-bold text-gray-50">{gameType}</span>
      <span className={`text-11 font-bold ${winStyle}`}>{winDescription}</span>
      <span className="w-[20px] border-b border-b-gray-30" />
      <span className="text-11 text-gray-50">{gameTime}분</span>
      <span className="text-11 text-gray-50">{gameDate}</span>
    </div>
  );
}
