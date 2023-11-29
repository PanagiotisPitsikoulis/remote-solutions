import clsx from "clsx";
import Responsive from "@/app/ui/utils/Responsive";
import { layout, text, utils } from "../utils/theme";
import Image from "next/image";

interface LandingInfoSectionProps {
  Elements: string[];
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
          <h1 className={clsx(text.header, "mr-36", "w-96")}>{title}</h1>
          <div className={clsx("grid grid-cols-2 gap-3")}>
            {Elements.map((asset, index) => (
              <Image
                key={index}
                className='rounded-xl w-48 h-48 object-cover'
                alt={`img${index}`}
                width={300}
                height={500}
                src={asset}
              />
            ))}
          </div>
        </div>
      }
      ContentMobile={
        <div className={clsx(layout.padding, utils.hscroll)}>
          <h1 className={clsx(text.header, "mr-24")}>{title}</h1>
          {Elements.map((asset, index) => (
            <Image
              key={index}
              className='rounded-xl w-40 h-40 object-cover'
              alt={`img${index}`}
              width={300}
              height={500}
              src={asset}
            />
          ))}
        </div>
      }
    ></Responsive>
  );
}

export default LandingInfoSection;
