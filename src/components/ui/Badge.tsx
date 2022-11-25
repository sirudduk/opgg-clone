interface IBadge {
  tier: string;
  season: number;
}

export default function Badge(props: IBadge) {
  return (
    <div className="bg-gray-10 border-gray-20 border-[1px] rounded-[2px] py-[4px] px-[5px] text-11">
      <span className="mr-[5px] font-bold text-gray-50">S{props.season}</span>
      <span className="text-gray-50">{props.tier}</span>
    </div>
  );
}
