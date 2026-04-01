import type { ResumeData } from "../types/resume";

const navy = "#0F172A";
const neon = "#00FF88";
const teal = "#22D3EE";
const dim = "#94A3B8";

export default function DarkTheme({ data }: { data: ResumeData }) {
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
        background: navy,
        color: "#E2E8F0",
        fontFamily: "'Helvetica Neue',Arial,sans-serif",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          borderBottom: `2px solid ${neon}22`,
          padding: "40px 40px 28px",
        }}
      >
        <div style={{ fontSize: 32, fontWeight: 700, color: "#F1F5F9" }}>
          {name}
        </div>
        <div
          style={{
            fontSize: 13,
            color: neon,
            fontWeight: 600,
            marginTop: 4,
            letterSpacing: 1,
          }}
        >
          Senior Software Engineer
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            fontSize: 11,
            color: dim,
            marginTop: 10,
          }}
        >
          {p.email && (
            <span
              style={{
                background: "#1E293B",
                padding: "3px 10px",
                borderRadius: 4,
              }}
            >
              {p.email}
            </span>
          )}
          {p.phone && (
            <span
              style={{
                background: "#1E293B",
                padding: "3px 10px",
                borderRadius: 4,
              }}
            >
              {p.phone}
            </span>
          )}
          {p.website && (
            <span
              style={{
                background: "#1E293B",
                padding: "3px 10px",
                borderRadius: 4,
              }}
            >
              {p.website}
            </span>
          )}
          {p.github && (
            <span
              style={{
                background: "#1E293B",
                padding: "3px 10px",
                borderRadius: 4,
              }}
            >
              {p.github}
            </span>
          )}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, padding: "28px 32px 28px 40px" }}>
          {summary && (
            <Sec title="About" accent={neon}>
              <p style={{ fontSize: 12, lineHeight: 1.8, color: dim }}>
                {summary}
              </p>
            </Sec>
          )}
          {workExperience.length > 0 && (
            <Sec title="Experience" accent={neon}>
              {workExperience.map((w, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: 18,
                    paddingLeft: 14,
                    borderLeft: `2px solid ${neon}44`,
                  }}
                >
                  <div
                    style={{ fontWeight: 700, fontSize: 13, color: "#F1F5F9" }}
                  >
                    {w.jobTitle}
                  </div>
                  <div style={{ fontSize: 12, color: teal, marginBottom: 2 }}>
                    {w.company}
                  </div>
                  <div style={{ fontSize: 11, color: dim, marginBottom: 6 }}>
                    {w.startDate} – {w.endDate} · {w.location}
                  </div>
                  <p
                    style={{ fontSize: 12, color: "#94A3B8", lineHeight: 1.7 }}
                  >
                    {w.description}
                  </p>
                </div>
              ))}
            </Sec>
          )}
          {projects.length > 0 && (
            <Sec title="Projects" accent={neon}>
              {projects.map((pr, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: 14,
                    background: "#1E293B",
                    borderRadius: 6,
                    padding: "12px 14px",
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: 12, color: neon }}>
                    {pr.name}
                  </div>
                  {pr.technologies.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        gap: 4,
                        flexWrap: "wrap",
                        margin: "4px 0",
                      }}
                    >
                      {pr.technologies.map((t, j) => (
                        <span
                          key={j}
                          style={{
                            fontSize: 9,
                            background: teal + "22",
                            color: teal,
                            borderRadius: 3,
                            padding: "1px 6px",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  <p style={{ fontSize: 11, color: dim, lineHeight: 1.6 }}>
                    {pr.description}
                  </p>
                </div>
              ))}
            </Sec>
          )}
        </div>
        <div style={{ width: 200, padding: "28px 24px 28px 0" }}>
          {education.length > 0 && (
            <Sec title="Education" accent={teal}>
              {education.map((e, i) => (
                <div key={i} style={{ marginBottom: 12 }}>
                  <div
                    style={{ fontSize: 11, fontWeight: 700, color: "#E2E8F0" }}
                  >
                    {e.degree}
                  </div>
                  <div style={{ fontSize: 11, color: dim }}>
                    {e.institution}
                  </div>
                  <div style={{ fontSize: 10, color: "#64748B" }}>
                    {e.startDate} – {e.endDate}
                  </div>
                </div>
              ))}
            </Sec>
          )}
          {skills.length > 0 && (
            <Sec title="Skills" accent={teal}>
              {skills.map((sk, i) => (
                <div key={i} style={{ marginBottom: 7 }}>
                  <div
                    style={{ fontSize: 10, color: "#CBD5E1", marginBottom: 2 }}
                  >
                    {sk.name}
                  </div>
                  <div
                    style={{
                      height: 3,
                      background: "#1E293B",
                      borderRadius: 2,
                    }}
                  >
                    <div
                      style={{
                        height: 3,
                        borderRadius: 2,
                        background: `linear-gradient(90deg,${neon},${teal})`,
                        width: pw(sk.proficiency),
                      }}
                    />
                  </div>
                </div>
              ))}
            </Sec>
          )}
          {languages.length > 0 && (
            <Sec title="Languages" accent={teal}>
              {languages.map((l, i) => (
                <div
                  key={i}
                  style={{ fontSize: 11, color: dim, marginBottom: 4 }}
                >
                  {l.name} <span style={{ color: neon }}>·</span>{" "}
                  {l.proficiency}
                </div>
              ))}
            </Sec>
          )}
          {certifications.length > 0 && (
            <Sec title="Certs" accent={teal}>
              {certifications.map((c, i) => (
                <div
                  key={i}
                  style={{ fontSize: 10, color: dim, marginBottom: 6 }}
                >
                  <div style={{ color: "#CBD5E1", fontWeight: 600 }}>
                    {c.name}
                  </div>
                  <div>{c.organization}</div>
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
  accent,
  children,
}: { title: string; accent: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: accent,
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
