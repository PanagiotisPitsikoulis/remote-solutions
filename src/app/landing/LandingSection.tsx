import Image from "next/image";

function LandingSection() {
  return (
    <div className='bg-slate-950 gap-10 flex-col flex items-center justify-center p-36 flex-wrap '>
      <Image
        src={"/images/ue/sec1.webp"}
        alt='sec1'
        className='rounded-xl mb-12'
        width={800}
        height={400}
      ></Image>
      <Image
        src={"/images/ue/sec2.webp"}
        alt='sec2'
        className='rounded-xl'
        width={800}
        height={400}
      ></Image>
    </div>
  );
}

export default LandingSection;
