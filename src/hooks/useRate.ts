import { kdaCalc, winRateCalc } from 'src/utils/calc';
import { useMemo } from 'react';

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

  const csRate = useMemo(() => {
    if (!cs) return null;
    return Math.round((cs / wins + losses) * 10) / 10;
  }, [cs, wins, losses]);

  const kdaRate = useMemo(() => {
    const k = kdaCalc(kills, games);
    const a = kdaCalc(assists, games);
    const d = kdaCalc(deaths, games);

    return ((Number(k) + Number(a)) / Number(d)).toFixed(2);
  }, [kills, assists, deaths, games]);

  const kdaText = useMemo(() => {
    return `${kdaCalc(kills, games).toFixed(1)} / ${kdaCalc(
      deaths,
      games,
    ).toFixed(1)} / ${kdaCalc(assists, games).toFixed(1)}`;
  }, [games, kills, assists, deaths]);

  const winRate = useMemo(() => winRateCalc(wins, games), [wins, games]);

  const winPercent = useMemo(() => {
    return Math.floor((wins / (wins + losses)) * 100);
  }, [losses, wins]);

  const kdaRateStyle = () => {
    if (Number(kdaRate) >= 5) return 'text-[#e19205]';
    if (Number(kdaRate) >= 4) return 'text-[#1f8ecd]';
    if (Number(kdaRate) >= 3) return 'text-[#2daf7f]';
    return '';
  };

  const winRateStyle = () => {
    if (winRate >= 60) return 'text-[#c6443e]';
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
