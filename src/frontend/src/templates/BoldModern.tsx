import type { ResumeData } from "../types/resume";

const red = "#DC2626";

export default function BoldModern({ data }: { data: ResumeData }) {
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
        color: "#111",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{ padding: "44px 48px 32px", borderBottom: `6px solid ${red}` }}
      >
        <div
          style={{
            fontSize: 52,
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: -2,
            color: "#111",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: red,
            marginTop: 8,
            letterSpacing: 1,
          }}
        >
          SENIOR SOFTWARE ENGINEER
        </div>
        <div
          style={{
            display: "flex",
            gap: 20,
            flexWrap: "wrap",
            fontSize: 12,
            color: "#666",
            marginTop: 10,
          }}
        >
          {p.email && <span>{p.email}</span>}
          {p.phone && <span>{p.phone}</span>}
          {p.address && <span>{p.address}</span>}
          {p.website && <span>{p.website}</span>}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, padding: "28px 32px 28px 48px" }}>
          {summary && (
            <>
              <SH red={red}>Summary</SH>
              <p
                style={{
                  fontSize: 13,
                  color: "#444",
                  lineHeight: 1.8,
                  marginBottom: 24,
                }}
              >
                {summary}
              </p>
            </>
          )}
          {workExperience.length > 0 && (
            <>
              <SH red={red}>Experience</SH>
              {workExperience.map((w) => (
                <div
                  key={`${w.jobTitle}-${w.company}`}
                  style={{ marginBottom: 20 }}
                >
                  <div style={{ fontWeight: 900, fontSize: 16, color: "#111" }}>
                    {w.jobTitle}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 2,
                    }}
                  >
                    <div style={{ fontSize: 13, color: red, fontWeight: 700 }}>
                      {w.company}
                    </div>
                    <div
                      style={{ fontSize: 11, color: "#999", fontWeight: 400 }}
                    >
                      {w.startDate} – {w.endDate}
                    </div>
                  </div>
                  <div style={{ fontSize: 12, color: "#888", marginBottom: 6 }}>
                    {w.location}
                  </div>
                  <p style={{ fontSize: 13, color: "#444", lineHeight: 1.7 }}>
                    {w.description}
                  </p>
                </div>
              ))}
            </>
          )}
          {projects.length > 0 && (
            <>
              <SH red={red}>Projects</SH>
              {projects.map((pr) => (
                <div key={pr.name} style={{ marginBottom: 14 }}>
                  <div style={{ fontWeight: 800, fontSize: 13 }}>{pr.name}</div>
                  <p style={{ fontSize: 12, color: "#555", lineHeight: 1.6 }}>
                    {pr.description}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
        <div
          style={{ width: 220, background: "#F9FAFB", padding: "28px 20px" }}
        >
          {education.length > 0 && (
            <>
              <SH red={red}>Education</SH>
              {education.map((e) => (
                <div
                  key={`${e.institution}-${e.degree}`}
                  style={{ marginBottom: 14 }}
                >
                  <div style={{ fontWeight: 700, fontSize: 13 }}>
                    {e.degree}
                  </div>
                  <div style={{ fontSize: 12, color: "#555" }}>
                    {e.fieldOfStudy}
                  </div>
                  <div style={{ fontSize: 12, color: red, fontWeight: 600 }}>
                    {e.institution}
                  </div>
                  <div style={{ fontSize: 11, color: "#999" }}>
                    {e.startDate} – {e.endDate}
                  </div>
                </div>
              ))}
            </>
          )}
          {skills.length > 0 && (
            <>
              <SH red={red}>Skills</SH>
              {skills.map((sk) => (
                <div key={sk.name} style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>{sk.name}</div>
                  <div
                    style={{
                      height: 4,
                      background: "#E5E7EB",
                      borderRadius: 2,
                    }}
                  >
                    <div
                      style={{
                        height: 4,
                        background: red,
                        borderRadius: 2,
                        width: pw(sk.proficiency),
                      }}
                    />
                  </div>
                </div>
              ))}
            </>
          )}
          {languages.length > 0 && (
            <>
              <SH red={red}>Languages</SH>
              {languages.map((l) => (
                <div key={l.name} style={{ fontSize: 12, marginBottom: 4 }}>
                  {l.name}{" "}
                  <span style={{ color: "#999" }}>({l.proficiency})</span>
                </div>
              ))}
            </>
          )}
          {certifications.length > 0 && (
            <>
              <SH red={red}>Certifications</SH>
              {certifications.map((c) => (
                <div
                  key={`${c.name}-${c.organization}`}
                  style={{ fontSize: 11, marginBottom: 6 }}
                >
                  <div style={{ fontWeight: 600 }}>{c.name}</div>
                  <div style={{ color: "#777" }}>{c.organization}</div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function SH({ red, children }: { red: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 900,
        letterSpacing: 2,
        textTransform: "uppercase" as const,
        color: red,
        marginBottom: 12,
        marginTop: 0,
      }}
    >
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
