interface PieChartProps {
  size?: number;
  percent: number;
}

export default function PieChart(props: PieChartProps) {
  const pieStyle = () => {
    const deg = (360 * props.percent) / 100;
    return `conic-gradient(#1f8ecd 0deg ${deg}deg,#ee5a52 ${deg}deg 360deg)`;
  };

  return (
    <div className="relative w-[90px] h-[90px]">
      <div
        style={{
          background: pieStyle(),
        }}
        className="rounded-[45px] w-[90px] h-[90px]"
      />
      <div className="text-13 text-gray-4 font-bold absolute top-[13px] left-[13px] w-[64px] h-[64px] rounded-[32px] bg-[#ededed] flex justify-center items-center">
        {props.percent}%
      </div>
    </div>
  );
}
