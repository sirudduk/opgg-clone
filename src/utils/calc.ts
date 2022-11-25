export const winRateCalc = (wins: number, games: number) => {
  return Math.round((wins / games) * 100);
};

export const kdaCalc = (num: number, games: number) => num / games;
