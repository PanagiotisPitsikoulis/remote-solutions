import { EpicGames, GameAssets, roadmapItems } from "@/app/data/constants/hero";
import Hero from "@/app/ui/landing/Hero";
import Roadmap from "@/app/ui/landing/Roadmap";
import Footer from "./ui/landing/Footer";
import LandingInfoSection from "./ui/landing/LandingInfoSection";
import clsx from "clsx";
import { colors, layout } from "./ui/utils/theme";
import Credits from "./ui/landing/Credits";
import ContactUs from "./ui/landing/ContactUs";

export default function Home() {
  return (
    <div className='flex flex-col w-full min-h-screen'>
      <div
        className={clsx(colors.background.main, layout.section.heightNormal)}
      >
        <Credits />
        <Hero
          title='Remote Solutions'
          description="Remote Solutions is a tech leader reshaping the future of work. Our suite of cutting-edge tools empowers businesses to thrive in a remote environment, ensuring seamless collaboration and adaptability in today's dynamic landscape."
          logoSrc='/logo.png'
          preorderButtonLabel='Preorder Now'
          contactButtonLabel='Contact Our Sales Team'
          heroImageSrc='https://images.unsplash.com/photo-1533309907656-7b1c2ee56ddf?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          variant='right'
        />
      </div>
      <div className={clsx(colors.background.content)}>
        <LandingInfoSection Elements={GameAssets} title='Your Drone...' />
      </div>
      <div className={clsx(colors.background.main)}>
        <LandingInfoSection Elements={EpicGames} title='Our Software.' />
      </div>
      <div
        className={clsx(
          colors.background.content,
          layout.section.center,
          layout.section.heightBig
        )}
      >
        <Roadmap
          title='Development Roadmap'
          description='Visit The About Us Section For More Information.'
          roadmapItems={roadmapItems}
        />
      </div>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}
