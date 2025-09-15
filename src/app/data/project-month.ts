export interface Project_Month {
  title: string;
  image: string; // image path in /public
  description: string;
  link: string; // external URL
}

export const projects_of_month: Project_Month[] = [
  {
    title: "Project of the montj: SeptemberTitle",
    image: "/images/logo.png",
    description: "Project of the montj: October",
    link: "https://example.com/project1",
  },
  {
    title: "Project of the montj: September ",
    image: "/images/logo.png",
    description: "Project of the montj: September.",
    link: "https://example.com/project2",
  },
  {
    title: "Project of the montj: September",
    image: "/images/logo.png",
    description:
      "tthis is cube is cube is cubetthis is cube is cube is cubetthis is cube is cube is cubetthis is cube is cube is cube.",
    link: "https://example.com/project3",
  },
];
