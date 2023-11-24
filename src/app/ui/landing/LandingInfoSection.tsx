import clsx from "clsx";
import Responsive from "@/app/ui/utils/Responsive";
import { layout, text } from "../utils/theme";

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
            layout.section.center,
            layout.padding,
            { "md:flex-row flex-col": true },
            { "md:flex-row-reverse flex-col": false }
          )}
        >
          <h1 className={clsx(text.header, "mr-5")}>{title}</h1>
          <div className={clsx("grid grid-cols-2 gap-3")}>
            {Elements.map((asset) => asset)}
          </div>
        </div>
      }
      ContentMobile={
        <div
          className={clsx(
            layout.padding,
            "flex flex-row overflow-scroll gap-5"
          )}
        >
          <h1 className='font-bold text-5xl mr-24'>{title}</h1>
          {Elements.map((asset, index) => (
            <div key={index} className='flex shrink-0 h-64 p-4 w-96'>
              {asset}
            </div>
          ))}
        </div>
      }
    ></Responsive>
  );
}

export default LandingInfoSection;
