import clsx from "clsx";
import Responsive from "@/app/ui/utils/Responsive";

interface LandingInfoSectionProps {
  Elements: JSX.Element[];
  title?: string;
}

function LandingInfoSection({ Elements, title }: LandingInfoSectionProps) {
  return (
    <Responsive
      ContentDesktop={
        <div
          className={clsx(
            "flex justify-around p-12 items-center gap-10",
            { "md:flex-row flex-col": true },
            { "md:flex-row-reverse flex-col": false }
          )}
        >
          <h1 className='font-bold text-7xl'>{title}</h1>
          <div className='flex flex-col gap-5 md:p-12'>
            {Elements.slice(0, Elements.length / 2).map((asset) => asset)}
          </div>
          <div className='flex flex-col gap-5 md:p-12'>
            {Elements.slice(Elements.length / 2, Elements.length).map(
              (asset) => asset
            )}
          </div>
        </div>
      }
      ContentMobile={
        <div className='flex flex-row overflow-scroll gap-5 p-16'>
          <h1 className='font-bold text-5xl mr-24'>{title}</h1>
          {Elements.map((asset, index) => (
            <div key={index} className='flex shrink-0 h-64 w-96'>
              {asset}
            </div>
          ))}
        </div>
      }
    ></Responsive>
  );
}

export default LandingInfoSection;
