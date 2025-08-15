interface Image {
  _type: "image";
  asset: {
    _ref: string;
    url: string;
    _type: "reference";
  };
}

export type Technology = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
  _type: "skills";
  title: string;
  progress: number;
  image: Image;
};

export type Project = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
  _type: "project";
  title: string;
  linkToBuild: string;
  summary: string;
  image: Image;
  technologies: Technology[];
};

export interface Experience {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
  _type: "experience";
  company: string;
  companyImage: Image;
  dateEnded: string;
  dateStarted: string;
  jobTitle: string;
  points: string[];
  socials: Social[];
  isCrrentlyWorkingHere?: boolean;
  technologies: Technology[];
}

export interface Social {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
  _type: "social";
  title: string;
  url: string;
}
