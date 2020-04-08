export interface Root {
    projects: Project[];
  }
  
  export interface Project {
    id: string;
    name: string;
    published: string;
    title: string;
    descriptions: string;
    technologies: string[];
    website: string;
    image: string;
    isOpenSource: boolean;
    gitLink?: string;
  }