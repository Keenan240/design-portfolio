import { ExperienceItem } from "@/data/experience";

interface ExperienceListProps {
  title: string;
  items: ExperienceItem[];
}

export default function ExperienceList({ title, items }: ExperienceListProps) {
  return (
    <div className="w-full flex flex-col gap-[60px]">
      <div className="flex items-end justify-between w-full">
        <h2 className="text-[36px] font-semibold text-black text-right min-w-[200px]">
          {title}
        </h2>
        <div className="flex w-[730px] text-[#acacac] text-[20px] font-medium italic">
          <span className="w-[271px] shrink-0">company</span>
          <span className="w-[375px] shrink-0">role</span>
          <span className="shrink-0">year</span>
        </div>
      </div>
      
      <div className="flex flex-col gap-5 items-end w-full">
        <div className="w-[730px] flex flex-col gap-5">
          {items.map((item, index) => (
            <div 
              key={`${item.company}-${index}`}
              className="flex w-full text-[20px] text-[#202020] whitespace-nowrap"
            >
              <span className="w-[271px] shrink-0 font-medium">{item.company}</span>
              <span className="w-[375px] shrink-0 font-medium">{item.role}</span>
              <span className="shrink-0 font-medium">{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

