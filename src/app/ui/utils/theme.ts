export const colorsLight = {
  background: {
    main: "bg-neutral-300",
    content: "bg-neutral-200",
    neutral: "bg-neutral-50",
  },
  focus: { normal: "bg-neutral-400", high: "bg-pink-500" },
  border: {
    main: "border-2 border-neutral-600",
    neutral: "border-2 border-neutral-300",
    accent: "border-2 border-blue-500",
  },
  text: {
    matchBorder: "text-neutral-600",
    dark: "text-neutral-200",
    darkAccent: "text-neutral-100",
    light: "text-neutral-950",
    lightAccent: "text-neutral-900",
  },
};

export const colorsDark = {
  background: {
    main: "bg-black",
    content: "bg-neutral-950",
    neutral: "bg-neutral-900",
  },
  focus: { normal: "bg-neutral-400", high: "bg-pink-200" },
  border: {
    main: "border-2 border-neutral-200",
    neutral: "border-2 border-neutral-400",
    accent: "border-2 border-blue-500",
  },
  text: {
    matchBorder: "text-neutral-200",
    dark: "text-neutral-800",
    darkAccent: "text-neutral-900",
    light: "text-neutral-50",
    lightAccent: "text-neutral-100",
  },
};

export const colors = colorsDark;

export const text = {
  header: "md:text-7xl text-4xl font-bold",
  content: "text-xl md:w-[55vh] ",
};

export const layout = {
  padding: "md:p-24 p-8",
  content: {},
  section: {
    center: "w-full flex items-center justify-center",
    heightNormal: "w-full h-screen",
    heightBig: "w-full h-[140vh]",
  },
};

export const utils = {
  hscroll: "flex flex-row overflow-scroll gap-5",
};

export const darkTheme = {};
