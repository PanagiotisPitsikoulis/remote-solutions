import clsx from "clsx";
import { Circle, CircleDashed } from "lucide-react";

export interface RoadmapProps {
  roadmapItems: RoadmapItem[];
  title: string;
  description: string;
}

export interface RoadmapItem {
  title: string;
  completed: boolean;
}

function Roadmap({ roadmapItems, title, description }: RoadmapProps) {
  return (
    <div className='flex md:flex-row flex-col gap-5 items-center justify-between'>
      <div className='md:mr-24  max-sm:p-12 max-sm:mt-12'>
        <h1 className='text-5xl mb-3 font-bold'>{title}</h1>
        <p>{description}</p>
      </div>
      <section className='flex flex-col py-12'>
        {roadmapItems.map((item, index) => (
          <div className='flex flex-col' key={index}>
            <div
              className={
                "flex mb-6 md:mb-12 flex-row justify-between py-6 items-center"
              }
            >
              <p className=' max-sm:w-40 font-bold text-lg mb-2 py-1'>
                {item.title}
              </p>
              <div className='text-xl md:text-4xl ml-8 py-2'>
                {item.completed ? (
                  <Circle size={24}></Circle>
                ) : (
                  <CircleDashed size={24}></CircleDashed>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Roadmap;
