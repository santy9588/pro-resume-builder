import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useSearch } from "@tanstack/react-router";
import {
  ChevronDown,
  Loader2,
  Plus,
  Printer,
  Save,
  Trash2,
} from "lucide-react";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { sampleResume } from "../data/sampleResume";
import { templates } from "../data/templates";
import { useMyResume, useSaveResume } from "../hooks/useQueries";
import { templateComponents } from "../templates";
import type {
  Certification,
  Education,
  Language,
  Project,
  ResumeData,
  Skill,
  WorkExperience,
} from "../types/resume";

export default function Builder() {
  const search = useSearch({ strict: false }) as { template?: string };
  const [selectedTemplate, setSelectedTemplate] = useState(
    search.template ?? "modern-blue",
  );
  const [data, setData] = useState<ResumeData>(sampleResume);
  const { data: saved, isLoading } = useMyResume();
  const saveMutation = useSaveResume();

  // Load from backend if available (only on first load)
  const [loadedFromBackend, setLoadedFromBackend] = useState(false);
  if (saved && !loadedFromBackend) {
    setData(saved);
    setLoadedFromBackend(true);
  }

  const update = useCallback((path: string, value: any) => {
    setData((prev) => {
      const next = JSON.parse(JSON.stringify(prev)) as ResumeData;
      const keys = path.split(".");
      let obj: any = next;
      for (let i = 0; i < keys.length - 1; i++) obj = obj[keys[i]];
      obj[keys[keys.length - 1]] = value;
      return next;
    });
  }, []);

  const Comp = templateComponents[selectedTemplate];

  const handlePrint = () => window.print();
  const handleSave = async () => {
    try {
      await saveMutation.mutateAsync(data);
      toast.success("Resume saved successfully!");
    } catch {
      toast.error("Failed to save. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center h-screen"
        data-ocid="builder.loading_state"
      >
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div
      className="flex flex-col h-[calc(100vh-64px)] bg-background no-print"
      data-ocid="builder.page"
    >
      {/* Top bar */}
      <div className="bg-white border-b border-border px-4 py-3 flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <Label className="text-sm font-medium whitespace-nowrap">
            Template:
          </Label>
          <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
            <SelectTrigger className="w-48" data-ocid="builder.select">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {templates.map((t) => (
                <SelectItem key={t.id} value={t.id}>
                  {t.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={handleSave}
            disabled={saveMutation.isPending}
            data-ocid="builder.save_button"
          >
            {saveMutation.isPending ? (
              <Loader2 className="w-4 h-4 animate-spin mr-1" />
            ) : (
              <Save className="w-4 h-4 mr-1" />
            )}
            Save
          </Button>
          <Button
            size="sm"
            onClick={handlePrint}
            className="bg-primary text-white hover:bg-primary/90"
            data-ocid="builder.primary_button"
          >
            <Printer className="w-4 h-4 mr-1" /> Print / Download PDF
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Editor Panel */}
        <div className="w-[380px] flex-shrink-0 bg-white border-r border-border overflow-y-auto">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="flex w-full overflow-x-auto rounded-none border-b bg-transparent p-0 h-auto flex-wrap">
              {[
                "personal",
                "summary",
                "experience",
                "education",
                "skills",
                "projects",
                "certs",
                "languages",
              ].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary capitalize px-3 py-2 text-xs"
                  data-ocid="builder.tab"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="personal" className="p-4">
              <PersonalForm data={data} update={update} />
            </TabsContent>
            <TabsContent value="summary" className="p-4">
              <Label>Professional Summary</Label>
              <Textarea
                value={data.summary}
                onChange={(e) => update("summary", e.target.value)}
                className="mt-1 h-40"
                placeholder="Write a compelling summary..."
                data-ocid="builder.textarea"
              />
            </TabsContent>
            <TabsContent value="experience" className="p-4">
              <ExperienceForm data={data} setData={setData} />
            </TabsContent>
            <TabsContent value="education" className="p-4">
              <EducationForm data={data} setData={setData} />
            </TabsContent>
            <TabsContent value="skills" className="p-4">
              <SkillsForm data={data} setData={setData} />
            </TabsContent>
            <TabsContent value="projects" className="p-4">
              <ProjectsForm data={data} setData={setData} />
            </TabsContent>
            <TabsContent value="certs" className="p-4">
              <CertsForm data={data} setData={setData} />
            </TabsContent>
            <TabsContent value="languages" className="p-4">
              <LangForm data={data} setData={setData} />
            </TabsContent>
          </Tabs>
        </div>

        {/* Preview Panel */}
        <div className="flex-1 bg-muted overflow-auto p-6 flex justify-center">
          <div>
            <div className="text-center mb-4">
              <Badge variant="secondary" className="text-xs">
                {templates.find((t) => t.id === selectedTemplate)?.name}{" "}
                Template
              </Badge>
            </div>
            <div
              style={{
                transform: "scale(0.8)",
                transformOrigin: "top center",
                width: 794,
              }}
            >
              {Comp ? (
                <Comp data={data} />
              ) : (
                <div className="text-center text-muted-foreground py-20">
                  Template not found
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Print-only resume */}
      <div className="print-only hidden">{Comp && <Comp data={data} />}</div>
    </div>
  );
}

function Field({
  label,
  children,
}: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <Label className="text-xs text-muted-foreground mb-1 block">
        {label}
      </Label>
      {children}
    </div>
  );
}

function PersonalForm({
  data,
  update,
}: { data: ResumeData; update: (path: string, v: any) => void }) {
  const p = data.personalInfo;
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <Field label="First Name">
          <Input
            value={p.firstName}
            onChange={(e) => update("personalInfo.firstName", e.target.value)}
            data-ocid="builder.input"
          />
        </Field>
        <Field label="Last Name">
          <Input
            value={p.lastName}
            onChange={(e) => update("personalInfo.lastName", e.target.value)}
            data-ocid="builder.input"
          />
        </Field>
      </div>
      <Field label="Email">
        <Input
          value={p.email}
          onChange={(e) => update("personalInfo.email", e.target.value)}
          data-ocid="builder.input"
        />
      </Field>
      <Field label="Phone">
        <Input
          value={p.phone}
          onChange={(e) => update("personalInfo.phone", e.target.value)}
        />
      </Field>
      <Field label="Location / Address">
        <Input
          value={p.address}
          onChange={(e) => update("personalInfo.address", e.target.value)}
        />
      </Field>
      <Field label="Website">
        <Input
          value={p.website}
          onChange={(e) => update("personalInfo.website", e.target.value)}
        />
      </Field>
      <Field label="LinkedIn">
        <Input
          value={p.linkedIn}
          onChange={(e) => update("personalInfo.linkedIn", e.target.value)}
        />
      </Field>
      <Field label="GitHub">
        <Input
          value={p.github}
          onChange={(e) => update("personalInfo.github", e.target.value)}
        />
      </Field>
    </div>
  );
}

function ExperienceForm({
  data,
  setData,
}: {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
}) {
  const addItem = () =>
    setData((p) => ({
      ...p,
      workExperience: [
        ...p.workExperience,
        {
          company: "",
          jobTitle: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));
  const removeItem = (i: number) =>
    setData((p) => ({
      ...p,
      workExperience: p.workExperience.filter((_, idx) => idx !== i),
    }));
  const updateItem = (i: number, key: keyof WorkExperience, val: string) =>
    setData((p) => ({
      ...p,
      workExperience: p.workExperience.map((item, idx) =>
        idx === i ? { ...item, [key]: val } : item,
      ),
    }));
  return (
    <div>
      {data.workExperience.map((w, i) => (
        <div
          key={i}
          className="mb-4 p-3 border border-border rounded-lg"
          data-ocid={`builder.item.${i + 1}`}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-foreground">
              {w.jobTitle || `Experience ${i + 1}`}
            </span>
            <button
              type="button"
              onClick={() => removeItem(i)}
              className="text-destructive hover:text-destructive/70"
              data-ocid="builder.delete_button"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Job Title">
              <Input
                value={w.jobTitle}
                onChange={(e) => updateItem(i, "jobTitle", e.target.value)}
                data-ocid="builder.input"
              />
            </Field>
            <Field label="Company">
              <Input
                value={w.company}
                onChange={(e) => updateItem(i, "company", e.target.value)}
              />
            </Field>
            <Field label="Start Date">
              <Input
                value={w.startDate}
                onChange={(e) => updateItem(i, "startDate", e.target.value)}
              />
            </Field>
            <Field label="End Date">
              <Input
                value={w.endDate}
                onChange={(e) => updateItem(i, "endDate", e.target.value)}
              />
            </Field>
          </div>
          <Field label="Location">
            <Input
              value={w.location}
              onChange={(e) => updateItem(i, "location", e.target.value)}
            />
          </Field>
          <Field label="Description">
            <Textarea
              value={w.description}
              onChange={(e) => updateItem(i, "description", e.target.value)}
              className="h-24"
            />
          </Field>
        </div>
      ))}
      <Button
        variant="outline"
        size="sm"
        className="w-full"
        onClick={addItem}
        data-ocid="builder.button"
      >
        <Plus className="w-4 h-4 mr-1" />
        Add Experience
      </Button>
    </div>
  );
}

function EducationForm({
  data,
  setData,
}: {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
}) {
  const addItem = () =>
    setData((p) => ({
      ...p,
      education: [
        ...p.education,
        {
          institution: "",
          degree: "",
          fieldOfStudy: "",
          startDate: "",
          endDate: "",
          gpa: "",
          honors: "",
        },
      ],
    }));
  const removeItem = (i: number) =>
    setData((p) => ({
      ...p,
      education: p.education.filter((_, idx) => idx !== i),
    }));
  const updateItem = (i: number, key: keyof Education, val: string) =>
    setData((p) => ({
      ...p,
      education: p.education.map((item, idx) =>
        idx === i ? { ...item, [key]: val } : item,
      ),
    }));
  return (
    <div>
      {data.education.map((e, i) => (
        <div
          key={i}
          className="mb-4 p-3 border border-border rounded-lg"
          data-ocid={`builder.item.${i + 1}`}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold">
              {e.institution || `Education ${i + 1}`}
            </span>
            <button
              type="button"
              onClick={() => removeItem(i)}
              className="text-destructive"
              data-ocid="builder.delete_button"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
          <Field label="Institution">
            <Input
              value={e.institution}
              onChange={(ex) => updateItem(i, "institution", ex.target.value)}
              data-ocid="builder.input"
            />
          </Field>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Degree">
              <Input
                value={e.degree}
                onChange={(ex) => updateItem(i, "degree", ex.target.value)}
              />
            </Field>
            <Field label="Field of Study">
              <Input
                value={e.fieldOfStudy}
                onChange={(ex) =>
                  updateItem(i, "fieldOfStudy", ex.target.value)
                }
              />
            </Field>
            <Field label="Start Date">
              <Input
                value={e.startDate}
                onChange={(ex) => updateItem(i, "startDate", ex.target.value)}
              />
            </Field>
            <Field label="End Date">
              <Input
                value={e.endDate}
                onChange={(ex) => updateItem(i, "endDate", ex.target.value)}
              />
            </Field>
            <Field label="GPA">
              <Input
                value={e.gpa}
                onChange={(ex) => updateItem(i, "gpa", ex.target.value)}
              />
            </Field>
          </div>
          <Field label="Honors">
            <Input
              value={e.honors}
              onChange={(ex) => updateItem(i, "honors", ex.target.value)}
            />
          </Field>
        </div>
      ))}
      <Button
        variant="outline"
        size="sm"
        className="w-full"
        onClick={addItem}
        data-ocid="builder.button"
      >
        <Plus className="w-4 h-4 mr-1" />
        Add Education
      </Button>
    </div>
  );
}

function SkillsForm({
  data,
  setData,
}: {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
}) {
  const addItem = () =>
    setData((p) => ({
      ...p,
      skills: [
        ...p.skills,
        { name: "", proficiency: "Intermediate", certified: false },
      ],
    }));
  const removeItem = (i: number) =>
    setData((p) => ({ ...p, skills: p.skills.filter((_, idx) => idx !== i) }));
  const updateItem = (i: number, key: keyof Skill, val: any) =>
    setData((p) => ({
      ...p,
      skills: p.skills.map((item, idx) =>
        idx === i ? { ...item, [key]: val } : item,
      ),
    }));
  return (
    <div>
      {data.skills.map((sk, i) => (
        <div
          key={i}
          className="flex items-center gap-2 mb-2"
          data-ocid={`builder.item.${i + 1}`}
        >
          <Input
            value={sk.name}
            onChange={(e) => updateItem(i, "name", e.target.value)}
            placeholder="Skill name"
            className="flex-1"
            data-ocid="builder.input"
          />
          <Select
            value={sk.proficiency}
            onValueChange={(v) => updateItem(i, "proficiency", v)}
          >
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {["Beginner", "Intermediate", "Advanced", "Expert"].map((l) => (
                <SelectItem key={l} value={l}>
                  {l}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <button
            type="button"
            onClick={() => removeItem(i)}
            className="text-destructive"
            data-ocid="builder.delete_button"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
      <Button
        variant="outline"
        size="sm"
        className="w-full"
        onClick={addItem}
        data-ocid="builder.button"
      >
        <Plus className="w-4 h-4 mr-1" />
        Add Skill
      </Button>
    </div>
  );
}

function ProjectsForm({
  data,
  setData,
}: {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
}) {
  const addItem = () =>
    setData((p) => ({
      ...p,
      projects: [
        ...p.projects,
        {
          name: "",
          description: "",
          website: "",
          technologies: [],
          github: "",
        },
      ],
    }));
  const removeItem = (i: number) =>
    setData((p) => ({
      ...p,
      projects: p.projects.filter((_, idx) => idx !== i),
    }));
  const updateItem = (i: number, key: keyof Project, val: any) =>
    setData((p) => ({
      ...p,
      projects: p.projects.map((item, idx) =>
        idx === i ? { ...item, [key]: val } : item,
      ),
    }));
  return (
    <div>
      {data.projects.map((pr, i) => (
        <div
          key={i}
          className="mb-4 p-3 border border-border rounded-lg"
          data-ocid={`builder.item.${i + 1}`}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold">
              {pr.name || `Project ${i + 1}`}
            </span>
            <button
              type="button"
              onClick={() => removeItem(i)}
              className="text-destructive"
              data-ocid="builder.delete_button"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
          <Field label="Project Name">
            <Input
              value={pr.name}
              onChange={(e) => updateItem(i, "name", e.target.value)}
              data-ocid="builder.input"
            />
          </Field>
          <Field label="Description">
            <Textarea
              value={pr.description}
              onChange={(e) => updateItem(i, "description", e.target.value)}
              className="h-20"
            />
          </Field>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Website">
              <Input
                value={pr.website}
                onChange={(e) => updateItem(i, "website", e.target.value)}
              />
            </Field>
            <Field label="GitHub">
              <Input
                value={pr.github}
                onChange={(e) => updateItem(i, "github", e.target.value)}
              />
            </Field>
          </div>
          <Field label="Technologies (comma separated)">
            <Input
              value={pr.technologies.join(", ")}
              onChange={(e) =>
                updateItem(
                  i,
                  "technologies",
                  e.target.value
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean),
                )
              }
            />
          </Field>
        </div>
      ))}
      <Button
        variant="outline"
        size="sm"
        className="w-full"
        onClick={addItem}
        data-ocid="builder.button"
      >
        <Plus className="w-4 h-4 mr-1" />
        Add Project
      </Button>
    </div>
  );
}

function CertsForm({
  data,
  setData,
}: {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
}) {
  const addItem = () =>
    setData((p) => ({
      ...p,
      certifications: [
        ...p.certifications,
        {
          name: "",
          organization: "",
          date: "",
          credentialId: "",
          credentialUrl: "",
        },
      ],
    }));
  const removeItem = (i: number) =>
    setData((p) => ({
      ...p,
      certifications: p.certifications.filter((_, idx) => idx !== i),
    }));
  const updateItem = (i: number, key: keyof Certification, val: string) =>
    setData((p) => ({
      ...p,
      certifications: p.certifications.map((item, idx) =>
        idx === i ? { ...item, [key]: val } : item,
      ),
    }));
  return (
    <div>
      {data.certifications.map((c, i) => (
        <div
          key={i}
          className="mb-4 p-3 border border-border rounded-lg"
          data-ocid={`builder.item.${i + 1}`}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold">
              {c.name || `Certification ${i + 1}`}
            </span>
            <button
              type="button"
              onClick={() => removeItem(i)}
              className="text-destructive"
              data-ocid="builder.delete_button"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
          <Field label="Certification Name">
            <Input
              value={c.name}
              onChange={(e) => updateItem(i, "name", e.target.value)}
              data-ocid="builder.input"
            />
          </Field>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Organization">
              <Input
                value={c.organization}
                onChange={(e) => updateItem(i, "organization", e.target.value)}
              />
            </Field>
            <Field label="Date">
              <Input
                value={c.date}
                onChange={(e) => updateItem(i, "date", e.target.value)}
              />
            </Field>
          </div>
        </div>
      ))}
      <Button
        variant="outline"
        size="sm"
        className="w-full"
        onClick={addItem}
        data-ocid="builder.button"
      >
        <Plus className="w-4 h-4 mr-1" />
        Add Certification
      </Button>
    </div>
  );
}

function LangForm({
  data,
  setData,
}: {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
}) {
  const addItem = () =>
    setData((p) => ({
      ...p,
      languages: [...p.languages, { name: "", proficiency: "" }],
    }));
  const removeItem = (i: number) =>
    setData((p) => ({
      ...p,
      languages: p.languages.filter((_, idx) => idx !== i),
    }));
  const updateItem = (i: number, key: keyof Language, val: string) =>
    setData((p) => ({
      ...p,
      languages: p.languages.map((item, idx) =>
        idx === i ? { ...item, [key]: val } : item,
      ),
    }));
  return (
    <div>
      {data.languages.map((l, i) => (
        <div
          key={i}
          className="flex items-center gap-2 mb-2"
          data-ocid={`builder.item.${i + 1}`}
        >
          <Input
            value={l.name}
            onChange={(e) => updateItem(i, "name", e.target.value)}
            placeholder="Language"
            className="flex-1"
            data-ocid="builder.input"
          />
          <Input
            value={l.proficiency}
            onChange={(e) => updateItem(i, "proficiency", e.target.value)}
            placeholder="Proficiency"
            className="flex-1"
          />
          <button
            type="button"
            onClick={() => removeItem(i)}
            className="text-destructive"
            data-ocid="builder.delete_button"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
      <Button
        variant="outline"
        size="sm"
        className="w-full"
        onClick={addItem}
        data-ocid="builder.button"
      >
        <Plus className="w-4 h-4 mr-1" />
        Add Language
      </Button>
    </div>
  );
}
