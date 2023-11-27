import clsx from "clsx";
import Responsive from "@/app/ui/utils/Responsive";
import { layout, text } from "../utils/theme";
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
                className='rounded-xl w-full h-96'
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
        <div
          className={clsx(
            layout.padding,
            "flex flex-row overflow-scroll gap-5"
          )}
        >
          <h1 className='font-bold text-5xl mr-24'>{title}</h1>
          {Elements.map((asset, index) => (
            <Image
              key={index}
              className='rounded-xl w-full h-28'
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

// <Image
//     key={2}
//     className='rounded-xl w-full h-96'
//     alt='img2'
//     width={300}
//     height={500}
//     src={
//       "https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     }
//   />,
