import { EpicGames, GameAssets, roadmapItems } from "@/app/data/constants/hero";
import Hero from "@/app/landing/Hero";
import LandingSection from "@/app/landing/LandingSection";
import Roadmap from "@/app/landing/Roadmap";
import SwitchText from "@/app/landing/SwitchText";
import Image from "next/image";
import LandingInfoSection from "./landing/LandingInfoSection";
import Footer from "./landing/Footer";

export default function Home() {
  return (
    <div className='flex flex-col w-full min-h-screen'>
      <div className='bg-slate-100 flex flex-row justify-between'>
        <Hero />
      </div>
      <div className='bg-slate-50'>
        <LandingInfoSection
          Elements={GameAssets}
          title='A Perfect Balance Of Artist and AI Generated Artwork.'
          direction='right'
        />
      </div>
      <div className='bg-slate-100'>
        <LandingInfoSection
          Elements={EpicGames}
          title='Utilizing Unreal Engine 5 To Create A Stunning Visual Experience.'
          horizontal={true}
        />
      </div>
      <div className='min-h-[80vh] md:h-[160vh] bg-slate-50 w-full flex items-center justify-center'>
        <Roadmap roadmapItems={roadmapItems} />
      </div>
      <SwitchText />
      <Footer></Footer>
    </div>
  );
}
