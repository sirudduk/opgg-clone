import { kdaCalc, winRateCalc } from 'src/utils/calc';

interface RateHooksProps {
  kills?: number;
  deaths?: number;
  assists?: number;
  cs?: number;
  wins?: number;
  losses?: number;
  games?: number;
}

export default function useRate(props: RateHooksProps) {
  const {
    kills = 0,
    deaths = 0,
    assists = 0,
    cs = 0,
    wins = 0,
    losses = 0,
  } = props;

  const games = props.games ? props.games : wins + losses;

  const csRate = () => {
    if (!cs) return null;
    return Math.round((cs / wins + losses) * 10) / 10;
  };

  const kdaRate = () => {
    const k = kdaCalc(kills, games);
    const a = kdaCalc(assists, games);
    const d = kdaCalc(deaths, games);

    return ((Number(k) + Number(a)) / Number(d)).toFixed(2);
  };

  const kdaText = () => {
    return `${kdaCalc(kills, games).toFixed(1)} / ${kdaCalc(
      deaths,
      games,
    ).toFixed(1)} / ${kdaCalc(assists, games).toFixed(1)}`;
  };

  const winRate = () => {
    return winRateCalc(wins, games);
  };

  const winPercent = () => {
    return Math.floor((wins / (wins + losses)) * 100);
  };

  const kdaRateStyle = () => {
    if (Number(kdaRate) >= 5) return 'text-[#e19205]';
    if (Number(kdaRate) >= 4) return 'text-[#1f8ecd]';
    if (Number(kdaRate) >= 3) return 'text-[#2daf7f]';
    return '';
  };

  const winRateStyle = () => {
    if (Number(winRate) >= 60) return 'text-[#c6443e]';
    return '';
  };

  return {
    kdaRateStyle,
    winRateStyle,
    kdaText,
    kdaRate,
    csRate,
    winRate,
    winPercent,
  };
}
