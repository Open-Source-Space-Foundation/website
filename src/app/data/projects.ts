export interface Project {
  title: string;
  image: string; // image path in /public
  description: string;
  link: string; // external URL
}

export const projects: Project[] = [
  {
    title: "OreSat",
    image: "/images/logo.png",
    description: "CUBE",
    link: "https://example.com/project1",
  },
  {
    title: "Artemis",
    image: "/images/logo.png",
    description: "tthis is cube is cube is cube.",
    link: "https://example.com/project2",
  },
  {
    title: "PROVES kit",
    image: "/images/logo.png",
    description:
      "tthis is cube is cube is cubetthis is cube is cube is cubetthis is cube is cube is cubetthis is cube is cube is cube.",
    link: "https://example.com/project3",
  },
  {
    title: "OreSat2",
    image: "/images/logo.png",
    description: "CUBE",
    link: "https://example.com/project1",
  },
  {
    title: "Artemis2",
    image: "/images/logo.png",
    description: "tthis is cube is cube is cube.",
    link: "https://example.com/project2",
  },
  {
    title: "PROVES kit2",
    image: "/images/logo.png",
    description:
      "tthis is cube is cube is cubetthis is cube is cube is cubetthis is cube is cube is cubetthis is cube is cube is cube.",
    link: "https://example.com/project3",
  },
];
