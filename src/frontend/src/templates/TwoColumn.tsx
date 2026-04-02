import type { ResumeData } from "../types/resume";

const accent = "#475569";
const light = "#F1F5F9";

export default function TwoColumn({ data }: { data: ResumeData }) {
  const {
    personalInfo: p,
    summary,
    workExperience,
    education,
    skills,
    certifications,
    languages,
    projects,
  } = data;
  const name = `${p.firstName} ${p.lastName}`;
  return (
    <div
      style={{
        width: 794,
        minHeight: 1123,
        background: "#fff",
        fontFamily: "Arial,sans-serif",
        color: "#1e293b",
        boxSizing: "border-box",
      }}
    >
      <div style={{ background: accent, color: "#fff", padding: "28px 32px" }}>
        <div style={{ fontSize: 26, fontWeight: 700 }}>{name}</div>
        <div style={{ fontSize: 12, opacity: 0.8, marginTop: 6 }}>
          {[p.email, p.phone, p.address].filter(Boolean).join(" · ")}
        </div>
      </div>
      <div style={{ display: "flex", minHeight: 900 }}>
        <div
          style={{
            width: "50%",
            padding: "24px 24px 24px 28px",
            borderRight: `2px solid ${light}`,
          }}
        >
          {summary && (
            <Sec title="Summary" color={accent}>
              <p style={{ fontSize: 12, lineHeight: 1.7, color: "#475569" }}>
                {summary}
              </p>
            </Sec>
          )}
          {workExperience.length > 0 && (
            <Sec title="Experience" color={accent}>
              {workExperience.map((w) => (
                <div
                  key={`${w.jobTitle}-${w.company}`}
                  style={{ marginBottom: 14 }}
                >
                  <div style={{ fontWeight: 700, fontSize: 13 }}>
                    {w.jobTitle}
                  </div>
                  <div style={{ fontSize: 12, color: accent }}>
                    {w.company} · {w.location}
                  </div>
                  <div
                    style={{ fontSize: 11, color: "#94a3b8", marginBottom: 4 }}
                  >
                    {w.startDate} – {w.endDate}
                  </div>
                  <p style={{ fontSize: 12, color: "#555", lineHeight: 1.6 }}>
                    {w.description}
                  </p>
                </div>
              ))}
            </Sec>
          )}
          {projects.length > 0 && (
            <Sec title="Projects" color={accent}>
              {projects.map((pr) => (
                <div key={pr.name} style={{ marginBottom: 10 }}>
                  <div style={{ fontWeight: 700, fontSize: 12 }}>{pr.name}</div>
                  <p style={{ fontSize: 11, color: "#555", lineHeight: 1.6 }}>
                    {pr.description}
                  </p>
                </div>
              ))}
            </Sec>
          )}
        </div>
        <div
          style={{
            width: "50%",
            padding: "24px 28px 24px 24px",
            background: light,
          }}
        >
          {education.length > 0 && (
            <Sec title="Education" color={accent}>
              {education.map((e) => (
                <div
                  key={`${e.institution}-${e.degree}`}
                  style={{ marginBottom: 12 }}
                >
                  <div style={{ fontWeight: 700, fontSize: 13 }}>
                    {e.degree}
                  </div>
                  <div style={{ fontSize: 12 }}>{e.fieldOfStudy}</div>
                  <div style={{ fontSize: 12, color: accent }}>
                    {e.institution}
                  </div>
                  <div style={{ fontSize: 11, color: "#94a3b8" }}>
                    {e.startDate} – {e.endDate}
                    {e.gpa ? ` · GPA: ${e.gpa}` : ""}
                  </div>
                </div>
              ))}
            </Sec>
          )}
          {skills.length > 0 && (
            <Sec title="Skills" color={accent}>
              {skills.map((sk) => (
                <div key={sk.name} style={{ marginBottom: 8 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 12,
                    }}
                  >
                    <span>{sk.name}</span>
                    <span style={{ color: "#94a3b8", fontSize: 11 }}>
                      {sk.proficiency}
                    </span>
                  </div>
                  <div
                    style={{
                      height: 5,
                      background: "#cbd5e1",
                      borderRadius: 3,
                    }}
                  >
                    <div
                      style={{
                        height: 5,
                        background: accent,
                        borderRadius: 3,
                        width: pw(sk.proficiency),
                      }}
                    />
                  </div>
                </div>
              ))}
            </Sec>
          )}
          {certifications.length > 0 && (
            <Sec title="Certifications" color={accent}>
              {certifications.map((c) => (
                <div
                  key={`${c.name}-${c.organization}`}
                  style={{ fontSize: 11, color: "#475569", marginBottom: 6 }}
                >
                  <div style={{ fontWeight: 600 }}>{c.name}</div>
                  <div style={{ color: "#94a3b8" }}>
                    {c.organization} · {c.date}
                  </div>
                </div>
              ))}
            </Sec>
          )}
          {languages.length > 0 && (
            <Sec title="Languages" color={accent}>
              {languages.map((l) => (
                <div key={l.name} style={{ fontSize: 12, marginBottom: 4 }}>
                  {l.name}{" "}
                  <span style={{ color: "#94a3b8" }}>– {l.proficiency}</span>
                </div>
              ))}
            </Sec>
          )}
        </div>
      </div>
    </div>
  );
}

function Sec({
  title,
  color,
  children,
}: { title: string; color: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          color,
          borderBottom: `2px solid ${color}`,
          paddingBottom: 4,
          marginBottom: 10,
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}

function pw(p: string) {
  return (
    (
      {
        Expert: "95%",
        Advanced: "78%",
        Intermediate: "58%",
        Beginner: "32%",
      } as Record<string, string>
    )[p] ?? "50%"
  );
}
