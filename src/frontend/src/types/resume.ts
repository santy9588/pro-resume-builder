export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  website: string;
  linkedIn: string;
  github: string;
}

export interface WorkExperience {
  company: string;
  jobTitle: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  gpa: string;
  honors: string;
}

export interface Skill {
  name: string;
  proficiency: string;
  certified: boolean;
}

export interface Certification {
  name: string;
  organization: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface Project {
  name: string;
  description: string;
  website: string;
  technologies: string[];
  github: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  workExperience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  certifications: Certification[];
  languages: Language[];
  projects: Project[];
}
