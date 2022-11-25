interface WinRateChartProps {
  wins: number;
  losses: number;
}

export default function WinRateChart(props: WinRateChartProps) {
  return (
    <div className="w-[124px] h-[24px] rounded-[4px] overflow-hidden flex relative">
      <div className="h-full bg-[#1f8ecd]" style={{ flex: props.wins }} />
      <div className="h-full bg-[#ee5a52]" style={{ flex: props.losses }} />
      <div className="font-bold text-12 text-[#ffffff] absolute top-0 left-0 w-full h-full flex items-center justify-between px-[4px]">
        <span>{props.wins}승</span>
        <span>{props.losses}패</span>
      </div>
    </div>
  );
}
