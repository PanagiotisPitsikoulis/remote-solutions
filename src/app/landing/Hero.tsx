import Image from "next/image";

function Hero() {
  return (
    <>
      <div className='md:p-24 p-6'>
        <h1 className='md:text-7xl text-5xl font-bold mb-3'>Remote Solution</h1>
        <p className='md:w-[55vh] mb-12 text-xl'>
          Remote Solutions is a tech leader reshaping the future of work. Our
          suite of cutting-edge tools empowers businesses to thrive in a remote
          environment, ensuring seamless collaboration and adaptability in
          today's dynamic landscape.
        </p>
        <div className='flex flex-col-reverse md:flex-row gap-5'>
          <Image
            src={"/logo.svg"}
            alt='Quantum Forge'
            width={150}
            height={150}
            className=''
          ></Image>
          <div className='flex flex-col gap-4 w-fit justify-start items-start'>
            <button className='border-slate-600 bg-slate-500 text-slate-50 border-2 rounded-xl px-2 py-1 font-bold'>
              Preorder Now
            </button>
            <button className='border-slate-600 text-slate-600 border-2 rounded-xl px-2 py-1 font-bold'>
              Contact Our Sales Team
            </button>
          </div>
        </div>
      </div>
      <div>
        <img
          className='h-screen w-[120vh] object-cover max-sm:hidden'
          src='https://images.unsplash.com/photo-1528459702148-ccb57a300872?q=80&w=2153&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Hero image'
        />
      </div>
    </>
  );
}

export default Hero;
