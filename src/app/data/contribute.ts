export interface Contributions {
  title: string;
  image: string; // image path in /public
  description: string;
  link: string; // external URL
  tags: Array<string>; // the tags that would go with said project
}

export const proj_contribute_list: Contributions[] = [
  {
    title: "Article Title",
    image: "/images/logo.png",
    description: "This is a fun article hahahahahahhahhhahhaa",
    link: "https://example.com/project1",
    tags: ["programming", "ground station"],
  },
];
