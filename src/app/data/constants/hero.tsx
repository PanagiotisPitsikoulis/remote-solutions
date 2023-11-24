import Image from "next/image";

export const roadmapItems = [
  {
    title: "Communication with Hardware",
    completed: true,
  },
  {
    title: "Develop Automated Flight Control",
    completed: true,
  },
  {
    title: "Integrate Navigation Systems",
    completed: false,
  },
  {
    title: "Conduct Field Testing",
    completed: false,
  },
  {
    title: "Optimize and Release",
    completed: false,
  },
];

export const GameAssets = [
  <Image
    key={1}
    className='rounded-xl'
    alt='img1'
    width={300}
    height={500}
    src={"/images/drones/drone1.jpg"}
  />,
  <Image
    key={2}
    className='rounded-xl'
    alt='img2'
    width={300}
    height={500}
    src={"/images/drones/drone2.jpg"}
  />,
  <Image
    key={3}
    className='rounded-xl'
    alt='img3'
    width={300}
    height={500}
    src={"/images/drones/drone3.jpg"}
  />,
  <Image
    key={4}
    className='rounded-xl'
    alt='img4'
    width={300}
    height={500}
    src={"/images/drones/drone4.jpg"}
  />,
];

export const EpicGames = [
  <Image
    key={1}
    className='rounded-xl'
    alt='img1'
    width={300}
    height={500}
    src={
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D"
    }
  />,
  <Image
    key={2}
    className='rounded-xl'
    alt='img2'
    width={300}
    height={500}
    src={
      "https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  />,
  <Image
    key={3}
    className='rounded-xl'
    alt='img3'
    width={300}
    height={500}
    src={
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  />,
];
