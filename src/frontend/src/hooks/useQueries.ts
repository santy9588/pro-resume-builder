import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ResumeData } from "../types/resume";
import { useActor } from "./useActor";

function toBackendResume(data: ResumeData) {
  return {
    personalInfo: {
      firstName: data.personalInfo.firstName,
      lastName: data.personalInfo.lastName,
      email: data.personalInfo.email,
      phone: data.personalInfo.phone,
      address: data.personalInfo.address,
      website: data.personalInfo.website,
      linkedIn: data.personalInfo.linkedIn,
      github: data.personalInfo.github,
    },
    summary: data.summary,
    workExperience: data.workExperience.map((w) => ({
      company: w.company,
      jobTitle: w.jobTitle,
      location: w.location,
      startDate: w.startDate,
      endDate: w.endDate,
      description: w.description,
    })),
    education: data.education.map((e) => ({
      institution: e.institution,
      degree: e.degree,
      fieldOfStudy: e.fieldOfStudy,
      startDate: e.startDate,
      endDate: e.endDate,
      gpa: e.gpa,
      honors: e.honors,
    })),
    skills: data.skills.map((s) => ({
      name: s.name,
      proficiency: s.proficiency,
      certified: s.certified,
    })),
    certifications: data.certifications.map((c) => ({
      name: c.name,
      organization: c.organization,
      date: c.date,
      credentialId: c.credentialId,
      credentialUrl: c.credentialUrl,
    })),
    languages: data.languages.map((l) => ({
      name: l.name,
      proficiency: l.proficiency,
    })),
    projects: data.projects.map((p) => ({
      name: p.name,
      description: p.description,
      website: p.website,
      technologies: p.technologies,
      github: p.github,
    })),
  };
}

function fromBackendResume(r: any): ResumeData {
  return {
    personalInfo: {
      firstName: r.personalInfo?.firstName ?? "",
      lastName: r.personalInfo?.lastName ?? "",
      email: r.personalInfo?.email ?? "",
      phone: r.personalInfo?.phone ?? "",
      address: r.personalInfo?.address ?? "",
      website: r.personalInfo?.website ?? "",
      linkedIn: r.personalInfo?.linkedIn ?? "",
      github: r.personalInfo?.github ?? "",
    },
    summary: r.summary ?? "",
    workExperience: (r.workExperience ?? []).map((w: any) => ({
      company: w.company ?? "",
      jobTitle: w.jobTitle ?? "",
      location: w.location ?? "",
      startDate: w.startDate ?? "",
      endDate: w.endDate ?? "",
      description: w.description ?? "",
    })),
    education: (r.education ?? []).map((e: any) => ({
      institution: e.institution ?? "",
      degree: e.degree ?? "",
      fieldOfStudy: e.fieldOfStudy ?? "",
      startDate: e.startDate ?? "",
      endDate: e.endDate ?? "",
      gpa: e.gpa ?? "",
      honors: e.honors ?? "",
    })),
    skills: (r.skills ?? []).map((s: any) => ({
      name: s.name ?? "",
      proficiency: s.proficiency ?? "",
      certified: s.certified ?? false,
    })),
    certifications: (r.certifications ?? []).map((c: any) => ({
      name: c.name ?? "",
      organization: c.organization ?? "",
      date: c.date ?? "",
      credentialId: c.credentialId ?? "",
      credentialUrl: c.credentialUrl ?? "",
    })),
    languages: (r.languages ?? []).map((l: any) => ({
      name: l.name ?? "",
      proficiency: l.proficiency ?? "",
    })),
    projects: (r.projects ?? []).map((p: any) => ({
      name: p.name ?? "",
      description: p.description ?? "",
      website: p.website ?? "",
      technologies: p.technologies ?? [],
      github: p.github ?? "",
    })),
  };
}

export function useMyResume() {
  const { actor, isFetching } = useActor();
  return useQuery<ResumeData | null>({
    queryKey: ["my-resume"],
    queryFn: async () => {
      if (!actor) return null;
      const has = await actor.hasResume();
      if (!has) return null;
      const r = await actor.getMyResume();
      return fromBackendResume(r);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSaveResume() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: ResumeData) => {
      if (!actor) throw new Error("Not connected");
      await actor.saveResume(toBackendResume(data) as any);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["my-resume"] }),
  });
}
