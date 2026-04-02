import type { ResumeData } from "../types/resume";

const sky = "#0EA5E9";

export default function StartupTech({ data }: { data: ResumeData }) {
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
        background: "#F8FAFC",
        fontFamily: "'Helvetica Neue',Arial,sans-serif",
        color: "#0F172A",
        padding: "36px 40px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          padding: "24px 28px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          marginBottom: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: -0.5 }}>
              {name}
            </div>
          </div>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: sky,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 800,
              color: "#fff",
            }}
          >
            {p.firstName[0]}
            {p.lastName[0]}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            fontSize: 11,
            color: "#64748B",
            marginTop: 12,
          }}
        >
          {[p.email, p.phone, p.address, p.website, p.github]
            .filter(Boolean)
            .map((v) => (
              <span
                key={v}
                style={{
                  background: "#F1F5F9",
                  borderRadius: 6,
                  padding: "2px 8px",
                }}
              >
                {v}
              </span>
            ))}
        </div>
      </div>
      {summary && (
        <Card>
          <SH color={sky}>Summary</SH>
          <p style={{ fontSize: 12, color: "#475569", lineHeight: 1.8 }}>
            {summary}
          </p>
        </Card>
      )}
      <div style={{ display: "flex", gap: 16 }}>
        <div style={{ flex: 1 }}>
          {workExperience.length > 0 && (
            <Card>
              <SH color={sky}>Experience</SH>
              {workExperience.map((w) => (
                <div
                  key={`${w.jobTitle}-${w.company}`}
                  style={{ marginBottom: 16 }}
                >
                  <div style={{ fontWeight: 700, fontSize: 13 }}>
                    {w.jobTitle}
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{ fontSize: 12, color: sky, fontWeight: 600 }}>
                      {w.company} · {w.location}
                    </div>
                    <div style={{ fontSize: 11, color: "#94A3B8" }}>
                      {w.startDate} – {w.endDate}
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: 12,
                      color: "#475569",
                      lineHeight: 1.6,
                      marginTop: 4,
                    }}
                  >
                    {w.description}
                  </p>
                </div>
              ))}
            </Card>
          )}
          {projects.length > 0 && (
            <Card>
              <SH color={sky}>Projects</SH>
              {projects.map((pr) => (
                <div key={pr.name} style={{ marginBottom: 12 }}>
                  <div style={{ fontWeight: 700, fontSize: 12 }}>{pr.name}</div>
                  {pr.technologies.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        gap: 4,
                        flexWrap: "wrap",
                        margin: "4px 0",
                      }}
                    >
                      {pr.technologies.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: 9,
                            background: `${sky}18`,
                            color: sky,
                            borderRadius: 4,
                            padding: "2px 6px",
                            fontWeight: 600,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  <p
                    style={{ fontSize: 11, color: "#64748B", lineHeight: 1.6 }}
                  >
                    {pr.description}
                  </p>
                </div>
              ))}
            </Card>
          )}
        </div>
        <div style={{ width: 210 }}>
          {education.length > 0 && (
            <Card>
              <SH color={sky}>Education</SH>
              {education.map((e) => (
                <div
                  key={`${e.institution}-${e.degree}`}
                  style={{ marginBottom: 10 }}
                >
                  <div style={{ fontWeight: 700, fontSize: 12 }}>
                    {e.degree}
                  </div>
                  <div style={{ fontSize: 11, color: sky }}>
                    {e.fieldOfStudy}
                  </div>
                  <div style={{ fontSize: 11, color: "#64748B" }}>
                    {e.institution}
                  </div>
                  <div style={{ fontSize: 10, color: "#94A3B8" }}>
                    {e.endDate}
                    {e.gpa ? ` · GPA ${e.gpa}` : ""}
                  </div>
                </div>
              ))}
            </Card>
          )}
          {skills.length > 0 && (
            <Card>
              <SH color={sky}>Tech Stack</SH>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                {skills.map((sk) => (
                  <span
                    key={sk.name}
                    style={{
                      fontSize: 10,
                      background: `${sky}18`,
                      color: sky,
                      borderRadius: 6,
                      padding: "3px 8px",
                      fontWeight: 600,
                    }}
                  >
                    {sk.name}
                  </span>
                ))}
              </div>
            </Card>
          )}
          {languages.length > 0 && (
            <Card>
              <SH color={sky}>Languages</SH>
              {languages.map((l) => (
                <div
                  key={l.name}
                  style={{ fontSize: 11, color: "#475569", marginBottom: 4 }}
                >
                  {l.name}{" "}
                  <span style={{ color: "#94A3B8" }}>({l.proficiency})</span>
                </div>
              ))}
            </Card>
          )}
          {certifications.length > 0 && (
            <Card>
              <SH color={sky}>Certifications</SH>
              {certifications.map((c) => (
                <div
                  key={`${c.name}-${c.organization}`}
                  style={{ fontSize: 10, color: "#475569", marginBottom: 6 }}
                >
                  <div style={{ fontWeight: 600 }}>{c.name}</div>
                  <div style={{ color: "#94A3B8" }}>{c.organization}</div>
                </div>
              ))}
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: "18px 20px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        marginBottom: 14,
      }}
    >
      {children}
    </div>
  );
}

function SH({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: 1.5,
        textTransform: "uppercase" as const,
        color,
        marginBottom: 10,
      }}
    >
      {children}
    </div>
  );
}
