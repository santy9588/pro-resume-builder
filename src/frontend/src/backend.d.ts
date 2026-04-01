import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Certification {
    date: string;
    name: string;
    credentialId: string;
    organization: string;
    credentialUrl: string;
}
export interface Skill {
    name: string;
    proficiency: string;
    certified: boolean;
}
export interface WorkExperience {
    endDate: string;
    description: string;
    company: string;
    jobTitle: string;
    location: string;
    startDate: string;
}
export interface Education {
    gpa: string;
    endDate: string;
    institution: string;
    degree: string;
    honors: string;
    fieldOfStudy: string;
    startDate: string;
}
export interface PersonalInfo {
    linkedIn: string;
    email: string;
    website: string;
    address: string;
    phone: string;
    lastName: string;
    github: string;
    firstName: string;
}
export interface Language {
    name: string;
    proficiency: string;
}
export interface Resume {
    projects: Array<Project>;
    education: Array<Education>;
    workExperience: Array<WorkExperience>;
    languages: Array<Language>;
    summary: string;
    certifications: Array<Certification>;
    personalInfo: PersonalInfo;
    skills: Array<Skill>;
}
export interface Project {
    name: string;
    description: string;
    website: string;
    technologies: Array<string>;
    github: string;
}
export interface backendInterface {
    getAllResumes(): Promise<Array<Resume>>;
    getMyResume(): Promise<Resume>;
    hasResume(): Promise<boolean>;
    saveResume(resume: Resume): Promise<void>;
}
