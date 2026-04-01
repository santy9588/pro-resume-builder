import type { ResumeData } from "../types/resume";

const blue = "#2F6FDB";

export default function ModernBlue({ data }: { data: ResumeData }) {
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
        fontFamily: "'Helvetica Neue',Arial,sans-serif",
        color: "#222",
        boxSizing: "border-box",
      }}
    >
      {/* Blue header */}
      <div
        style={{ background: blue, color: "#fff", padding: "36px 40px 28px" }}
      >
        <div style={{ fontSize: 30, fontWeight: 700, marginBottom: 4 }}>
          {name}
        </div>
        <div style={{ fontSize: 14, opacity: 0.85, marginBottom: 12 }}>
          {p.address}
        </div>
        <div
          style={{
            display: "flex",
            gap: 20,
            flexWrap: "wrap",
            fontSize: 12,
            opacity: 0.9,
          }}
        >
          {p.email && <span>✉ {p.email}</span>}
          {p.phone && <span>✆ {p.phone}</span>}
          {p.website && <span>🌐 {p.website}</span>}
          {p.linkedIn && <span>in {p.linkedIn}</span>}
          {p.github && <span>⌥ {p.github}</span>}
        </div>
      </div>
      {/* Two column body */}
      <div style={{ display: "flex" }}>
        {/* Left sidebar */}
        <div
          style={{
            width: 220,
            background: "#F0F4FB",
            padding: "24px 20px",
            minHeight: 900,
          }}
        >
          {skills.length > 0 && (
            <Section title="Skills" color={blue}>
              {skills.map((sk, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#444",
                      marginBottom: 2,
                    }}
                  >
                    {sk.name}
                  </div>
                  <div
                    style={{ height: 4, background: "#ddd", borderRadius: 2 }}
                  >
                    <div
                      style={{
                        height: 4,
                        background: blue,
                        borderRadius: 2,
                        width: profW(sk.proficiency),
                      }}
                    />
                  </div>
                </div>
              ))}
            </Section>
          )}
          {languages.length > 0 && (
            <Section title="Languages" color={blue}>
              {languages.map((l, i) => (
                <div
                  key={i}
                  style={{ fontSize: 12, color: "#555", marginBottom: 4 }}
                >
                  {l.name}{" "}
                  <span style={{ color: "#888" }}>({l.proficiency})</span>
                </div>
              ))}
            </Section>
          )}
          {certifications.length > 0 && (
            <Section title="Certifications" color={blue}>
              {certifications.map((c, i) => (
                <div
                  key={i}
                  style={{ fontSize: 11, color: "#555", marginBottom: 8 }}
                >
                  <div style={{ fontWeight: 600, color: "#333" }}>{c.name}</div>
                  <div style={{ color: "#888" }}>{c.organization}</div>
                  <div style={{ color: "#aaa" }}>{c.date}</div>
                </div>
              ))}
            </Section>
          )}
        </div>
        {/* Main content */}
        <div style={{ flex: 1, padding: "24px 30px" }}>
          {summary && (
            <Section title="Summary" color={blue}>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "#444" }}>
                {summary}
              </p>
            </Section>
          )}
          {workExperience.length > 0 && (
            <Section title="Experience" color={blue}>
              {workExperience.map((w, i) => (
                <div key={i} style={{ marginBottom: 16 }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{ fontWeight: 700, fontSize: 13 }}>
                      {w.jobTitle}
                    </div>
                    <div style={{ fontSize: 11, color: "#888" }}>
                      {w.startDate} – {w.endDate}
                    </div>
                  </div>
                  <div style={{ fontSize: 12, color: blue, marginBottom: 4 }}>
                    {w.company} · {w.location}
                  </div>
                  <p style={{ fontSize: 12, color: "#555", lineHeight: 1.6 }}>
                    {w.description}
                  </p>
                </div>
              ))}
            </Section>
          )}
          {education.length > 0 && (
            <Section title="Education" color={blue}>
              {education.map((e, i) => (
                <div key={i} style={{ marginBottom: 12 }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{ fontWeight: 700, fontSize: 13 }}>
                      {e.degree} in {e.fieldOfStudy}
                    </div>
                    <div style={{ fontSize: 11, color: "#888" }}>
                      {e.startDate} – {e.endDate}
                    </div>
                  </div>
                  <div style={{ fontSize: 12, color: "#555" }}>
                    {e.institution}
                    {e.gpa ? ` · GPA: ${e.gpa}` : ""}
                  </div>
                </div>
              ))}
            </Section>
          )}
          {projects.length > 0 && (
            <Section title="Projects" color={blue}>
              {projects.map((pr, i) => (
                <div key={i} style={{ marginBottom: 12 }}>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{pr.name}</div>
                  {pr.technologies.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        gap: 6,
                        flexWrap: "wrap",
                        margin: "4px 0",
                      }}
                    >
                      {pr.technologies.map((t, j) => (
                        <span
                          key={j}
                          style={{
                            fontSize: 10,
                            background: blue + "18",
                            color: blue,
                            borderRadius: 3,
                            padding: "1px 6px",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  <p style={{ fontSize: 12, color: "#555", lineHeight: 1.6 }}>
                    {pr.description}
                  </p>
                </div>
              ))}
            </Section>
          )}
        </div>
      </div>
    </div>
  );
}

function Section({
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

function profW(p: string) {
  return (
    (
      {
        Expert: "100%",
        Advanced: "80%",
        Intermediate: "60%",
        Beginner: "35%",
      } as Record<string, string>
    )[p] ?? "50%"
  );
}
