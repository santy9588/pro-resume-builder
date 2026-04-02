import type { ResumeData } from "../types/resume";

export default function AIMLSpecialist({ data }: { data: ResumeData }) {
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
        color: "#1a1a1a",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg,#667EEA 0%,#764BA2 100%)",
          color: "#fff",
          padding: "40px 44px 30px",
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
            <div style={{ fontSize: 30, fontWeight: 800 }}>{name}</div>
            <div style={{ fontSize: 13, opacity: 0.85, marginTop: 6 }}>
              AI / Machine Learning Engineer
            </div>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              borderRadius: 8,
              padding: "8px 16px",
              fontSize: 11,
              textAlign: "right",
            }}
          >
            {p.email && <div>{p.email}</div>}
            {p.phone && <div>{p.phone}</div>}
            {p.linkedIn && <div>{p.linkedIn}</div>}
          </div>
        </div>
        <div
          style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}
        >
          {[p.website, p.linkedIn, p.github, p.address]
            .filter(Boolean)
            .map((v) => (
              <span
                key={v ?? ""}
                style={{
                  fontSize: 11,
                  background: "rgba(255,255,255,0.18)",
                  borderRadius: 12,
                  padding: "2px 10px",
                }}
              >
                {v}
              </span>
            ))}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, padding: "24px 32px" }}>
          {summary && (
            <Sec title="Summary" color="#764BA2">
              <p style={{ fontSize: 12, color: "#555", lineHeight: 1.8 }}>
                {summary}
              </p>
            </Sec>
          )}
          {workExperience.length > 0 && (
            <Sec title="Experience" color="#764BA2">
              {workExperience.map((w) => (
                <div
                  key={`${w.jobTitle}-${w.company}`}
                  style={{
                    marginBottom: 16,
                    padding: "12px 16px",
                    background: "#F5F3FF",
                    borderRadius: 8,
                    borderLeft: "3px solid #764BA2",
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: 13 }}>
                    {w.jobTitle}
                  </div>
                  <div
                    style={{ fontSize: 12, color: "#667EEA", fontWeight: 600 }}
                  >
                    {w.company} · {w.location}
                  </div>
                  <div
                    style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 4 }}
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
            <Sec title="ML Projects" color="#764BA2">
              {projects.map((pr) => (
                <div
                  key={pr.name}
                  style={{
                    marginBottom: 12,
                    padding: "10px 14px",
                    border: "1px solid #EDE9FE",
                    borderRadius: 8,
                  }}
                >
                  <div
                    style={{ fontWeight: 700, fontSize: 12, color: "#764BA2" }}
                  >
                    {pr.name}
                  </div>
                  <p style={{ fontSize: 11, color: "#555", lineHeight: 1.6 }}>
                    {pr.description}
                  </p>
                  {pr.technologies.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        gap: 4,
                        flexWrap: "wrap",
                        marginTop: 6,
                      }}
                    >
                      {pr.technologies.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: 9,
                            background: "#EDE9FE",
                            color: "#764BA2",
                            borderRadius: 12,
                            padding: "1px 8px",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </Sec>
          )}
        </div>
        <div style={{ width: 210, padding: "24px 24px 24px 0" }}>
          {education.length > 0 && (
            <Sec title="Education" color="#667EEA">
              {education.map((e) => (
                <div
                  key={`${e.institution}-${e.degree}`}
                  style={{ marginBottom: 10 }}
                >
                  <div style={{ fontSize: 12, fontWeight: 700 }}>
                    {e.degree}
                  </div>
                  <div style={{ fontSize: 11, color: "#667EEA" }}>
                    {e.fieldOfStudy}
                  </div>
                  <div style={{ fontSize: 11, color: "#6B7280" }}>
                    {e.institution}
                  </div>
                  <div style={{ fontSize: 10, color: "#9CA3AF" }}>
                    {e.endDate}
                  </div>
                </div>
              ))}
            </Sec>
          )}
          {skills.length > 0 && (
            <Sec title="Tech Stack" color="#667EEA">
              {skills.map((sk) => (
                <div key={sk.name} style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 11, fontWeight: 600 }}>{sk.name}</div>
                  <div
                    style={{
                      height: 5,
                      background: "#EDE9FE",
                      borderRadius: 3,
                    }}
                  >
                    <div
                      style={{
                        height: 5,
                        borderRadius: 3,
                        background: "linear-gradient(90deg,#667EEA,#764BA2)",
                        width: pw(sk.proficiency),
                      }}
                    />
                  </div>
                </div>
              ))}
            </Sec>
          )}
          {certifications.length > 0 && (
            <Sec title="Certifications" color="#667EEA">
              {certifications.map((c) => (
                <div
                  key={`${c.name}-${c.organization}`}
                  style={{ fontSize: 10, color: "#555", marginBottom: 6 }}
                >
                  <div style={{ fontWeight: 600, color: "#333" }}>{c.name}</div>
                  <div>{c.organization}</div>
                  <div style={{ color: "#9CA3AF" }}>{c.date}</div>
                </div>
              ))}
            </Sec>
          )}
          {languages.length > 0 && (
            <Sec title="Languages" color="#667EEA">
              {languages.map((l) => (
                <div
                  key={l.name}
                  style={{ fontSize: 11, color: "#555", marginBottom: 4 }}
                >
                  {l.name}{" "}
                  <span style={{ color: "#9CA3AF" }}>({l.proficiency})</span>
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
        Expert: "100%",
        Advanced: "80%",
        Intermediate: "60%",
        Beginner: "35%",
      } as Record<string, string>
    )[p] ?? "50%"
  );
}
