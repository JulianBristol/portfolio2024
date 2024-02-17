export type Experiences = {
  title: string;
  companyName: string;
  icon: image;
  date: string;
  points: string[];
}

export type Technologies = {
  name: string;
    icon: image;
}

export type Projects = {
  name: string;
    description: string;
    tags: string[];
    image: image[];
    github: string | null;
    website: string | null;
}