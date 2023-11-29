export const type = [
  "/images/drones/drone1.jpg",
  "/images/drones/drone2.jpg",
  "/images/drones/drone4.jpg",
];

export const use = [
  "https://images.unsplash.com/photo-1701137054978-8fd721f01142?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1701137054978-8fd721f01142?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const software = [
  "https://images.unsplash.com/photo-1701137054978-8fd721f01142?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1701137054978-8fd721f01142?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export interface cardProps {
  title: string;
  description: string;
  imgs: string[];
}

export const cards: cardProps[] = [
  {
    title: "Drone type",
    description: "Civilian use, surveillance, military, photography.",
    imgs: type,
  },
  {
    title: "Drone use",
    description: "Personal, commercial, military, photography.",
    imgs: use,
  },
  {
    title: "Software type",
    description: "Autonomous, remote control, hybrid.",
    imgs: software,
  },
];

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
  "/images/drones/drone1.jpg",
  "/images/drones/drone2.jpg",
  "/images/drones/drone3.jpg",
  "/images/drones/drone4.jpg",
];

export const EpicGames = [
  "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
