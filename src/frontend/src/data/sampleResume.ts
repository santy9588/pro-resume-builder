import type { ResumeData } from "../types/resume";

export const sampleResume: ResumeData = {
  personalInfo: {
    firstName: "Alexandra",
    lastName: "Chen",
    email: "alex.chen@email.com",
    phone: "+1 (415) 555-0192",
    address: "San Francisco, CA 94105",
    website: "alexchen.dev",
    linkedIn: "linkedin.com/in/alexchen",
    github: "github.com/alexchen",
  },
  summary:
    "Results-driven Senior Software Engineer with 7+ years of experience building scalable distributed systems and leading cross-functional teams. Passionate about clean architecture, developer experience, and delivering impactful products. Proven track record of reducing infrastructure costs by 40% and improving system reliability to 99.9% uptime.",
  workExperience: [
    {
      company: "Stripe Inc.",
      jobTitle: "Senior Software Engineer",
      location: "San Francisco, CA",
      startDate: "Jan 2021",
      endDate: "Present",
      description:
        "Led re-architecture of payment processing pipeline handling $2B+ annual volume. Designed microservices reducing latency by 35%. Mentored 4 junior engineers and drove team adoption of TypeScript across 12 services.",
    },
    {
      company: "Airbnb",
      jobTitle: "Software Engineer II",
      location: "San Francisco, CA",
      startDate: "Mar 2018",
      endDate: "Dec 2020",
      description:
        "Built real-time availability system for 7M+ listings. Implemented GraphQL API layer serving 50M daily requests. Collaborated with ML team to integrate dynamic pricing model boosting host revenue by 12%.",
    },
    {
      company: "Palantir Technologies",
      jobTitle: "Software Engineer",
      location: "New York, NY",
      startDate: "Jun 2016",
      endDate: "Feb 2018",
      description:
        "Developed data pipeline tooling for government analytics platform. Built React dashboards used by 500+ analysts. Optimized PostgreSQL queries reducing report generation time from 45s to 3s.",
    },
  ],
  education: [
    {
      institution: "Stanford University",
      degree: "Bachelor of Science",
      fieldOfStudy: "Computer Science",
      startDate: "Sep 2012",
      endDate: "Jun 2016",
      gpa: "3.92",
      honors: "Magna Cum Laude, Phi Beta Kappa",
    },
  ],
  skills: [
    {
      name: "TypeScript / JavaScript",
      proficiency: "Expert",
      certified: false,
    },
    { name: "React & Next.js", proficiency: "Expert", certified: false },
    { name: "Go & Rust", proficiency: "Advanced", certified: false },
    { name: "PostgreSQL & Redis", proficiency: "Advanced", certified: true },
    { name: "Kubernetes & Docker", proficiency: "Advanced", certified: true },
    { name: "AWS & GCP", proficiency: "Intermediate", certified: true },
    { name: "GraphQL & gRPC", proficiency: "Advanced", certified: false },
    {
      name: "Python & Machine Learning",
      proficiency: "Intermediate",
      certified: false,
    },
  ],
  certifications: [
    {
      name: "AWS Solutions Architect – Professional",
      organization: "Amazon Web Services",
      date: "Mar 2023",
      credentialId: "AWS-SAP-20230312",
      credentialUrl: "aws.amazon.com/verify",
    },
    {
      name: "Certified Kubernetes Administrator",
      organization: "Cloud Native Computing Foundation",
      date: "Nov 2022",
      credentialId: "CKA-2022-4521",
      credentialUrl: "cncf.io/verify",
    },
  ],
  languages: [
    { name: "English", proficiency: "Native" },
    { name: "Mandarin Chinese", proficiency: "Fluent" },
    { name: "Spanish", proficiency: "Conversational" },
  ],
  projects: [
    {
      name: "OpenPayments SDK",
      description:
        "Open-source TypeScript SDK for payment API integration with 2,400+ GitHub stars. Supports 15 payment providers with unified interface.",
      website: "openpayments.dev",
      technologies: ["TypeScript", "Node.js", "Jest"],
      github: "github.com/alexchen/openpayments",
    },
    {
      name: "DataFlow Orchestrator",
      description:
        "Distributed data pipeline orchestration tool processing 10M+ events/day. Features visual DAG editor and real-time monitoring.",
      website: "",
      technologies: ["Go", "Kubernetes", "React", "PostgreSQL"],
      github: "github.com/alexchen/dataflow",
    },
  ],
};
