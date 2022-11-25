export interface ISummoner {
  ladderRank: ILadderRank;
  leagues: ITier[];
  level: number;
  name: string;
  previousTiers: IPreviousTiers[];
  profileBackgroundImageUrl: string;
  profileBorderImageUrl: string;
  profileImageUrl: string;
  url: string;
}

export interface IPreviousTiers {
  division: string;
  imageUrl: string;
  lp: number;
  name: string;
  season: number;
  shortString: string;
  string: string;
  tier: string;
  tierDivision: string;
  tierRankPoint: number;
}

export interface ILadderRank {
  rank: number;
  rankPercentOfTop: number;
}

export interface ITier {
  hasResults: boolean;
  losses: number;
  tierRank: {
    division: string;
    imageUrl: string;
    lp: number;
    name: string;
    shortString: string;
    string: string;
    tier: string;
    tierDivision: string;
    tierRankPoint: number;
  };
  wins: 36;
}

export interface IChampion {
  assists: number;
  cs?: number;
  deaths: number;
  games: number;
  id: number;
  imageUrl: string;
  key: string;
  kills: number;
  losses: number;
  name: string;
  rank?: number;
  wins: number;
}

export interface IWinRate {
  id: number;
  imageUrl: string;
  key: string;
  losses: number;
  name: string;
  wins: number;
}

export interface IPositions {
  games: number;
  losses: number;
  position: string;
  positionName: string;
  wins: number;
}

export interface ISummary {
  assists: number;
  deaths: number;
  kills: number;
  losses: number;
  wins: number;
}

export interface IStats {
  assist: number;
  contributionForKillRate: string;
  cs: number;
  csPerMin: number;
  death: number;
  goldEarned: number;
  kdaString: string;
  kill: number;
  largestMultiKillString: string;
  opScoreBadge: string;
  totalDamageDealtToChampions: number;
}

export interface IGames {
  champion: { imageUrl: string; level: number };
  createDate: number;
  gameId: string;
  gameLength: number;
  gameType: string;
  isWin: boolean;
  items: { imageUrl: string }[];
  mapInfo: null;
  mmr: number;
  needRenew: boolean;
  peak: string[];
  spells: { imageUrl: string }[];
  stats: {
    general: IStats;
    ward: { sightWardsBought: number; visionWardsBought: number };
  };
  summonerId: string;
  summonerName: string;
  tierRankShort: string;
}

export interface IMostInfo {
  champions: IChampion[];
  games: IGames[];
  positions: IPositions[];
  summary: ISummary;
}
