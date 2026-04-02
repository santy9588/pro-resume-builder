import type { ResumeData } from "../types/resume";

const cyan = "#22D3EE";
const dark = "#111827";
const darker = "#0F172A";

export default function TechnicalDev({ data }: { data: ResumeData }) {
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
        background: darker,
        color: "#D1D5DB",
        fontFamily: "'JetBrains Mono','Courier New',monospace",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: dark,
          borderBottom: `1px solid ${cyan}33`,
          padding: "32px 36px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#F9FAFB",
            letterSpacing: -0.5,
          }}
        >
          {name}
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            fontSize: 11,
            color: cyan,
            marginTop: 8,
          }}
        >
          {p.email && (
            <span style={{ color: "#9CA3AF" }}>
              email: <span style={{ color: cyan }}>'{p.email}'</span>
            </span>
          )}
          {p.phone && (
            <span style={{ color: "#9CA3AF" }}>
              tel: <span style={{ color: cyan }}>'{p.phone}'</span>
            </span>
          )}
          {p.github && (
            <span style={{ color: "#9CA3AF" }}>
              github: <span style={{ color: "#86EFAC" }}>'{p.github}'</span>
            </span>
          )}
          {p.website && (
            <span style={{ color: "#9CA3AF" }}>
              web: <span style={{ color: "#FDE68A" }}>'{p.website}'</span>
            </span>
          )}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, padding: "24px 28px 24px 36px" }}>
          {summary && (
            <>
              <SH color={cyan}>&gt; about()</SH>
              <div
                style={{
                  background: dark,
                  borderRadius: 6,
                  padding: "12px 16px",
                  marginBottom: 20,
                }}
              >
                <p style={{ fontSize: 11, lineHeight: 1.8, color: "#9CA3AF" }}>
                  {summary}
                </p>
              </div>
            </>
          )}
          {workExperience.length > 0 && (
            <>
              <SH color={cyan}>&gt; experience()</SH>
              {workExperience.map((w) => (
                <div
                  key={`${w.jobTitle}-${w.company}`}
                  style={{
                    marginBottom: 16,
                    background: dark,
                    borderRadius: 6,
                    padding: "12px 16px",
                  }}
                >
                  <div
                    style={{ color: "#86EFAC", fontWeight: 700, fontSize: 12 }}
                  >
                    {w.jobTitle}
                  </div>
                  <div style={{ fontSize: 11, color: cyan, marginBottom: 2 }}>
                    {w.company} {" // "} {w.location}
                  </div>
                  <div
                    style={{ fontSize: 10, color: "#6B7280", marginBottom: 6 }}
                  >
                    {"/* "}
                    {w.startDate} - {w.endDate}
                    {" */"}
                  </div>
                  <p
                    style={{ fontSize: 11, color: "#9CA3AF", lineHeight: 1.7 }}
                  >
                    {w.description}
                  </p>
                </div>
              ))}
            </>
          )}
          {projects.length > 0 && (
            <>
              <SH color={cyan}>&gt; projects()</SH>
              {projects.map((pr) => (
                <div
                  key={pr.name}
                  style={{
                    marginBottom: 14,
                    background: dark,
                    borderRadius: 6,
                    padding: "12px 16px",
                  }}
                >
                  <div
                    style={{ color: "#FDE68A", fontWeight: 700, fontSize: 12 }}
                  >
                    const {pr.name.replace(/ /g, "_").toLowerCase()} = {"{}"}
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
                      {pr.technologies.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: 9,
                            background: `${cyan}22`,
                            color: cyan,
                            padding: "1px 6px",
                            borderRadius: 3,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  <p
                    style={{ fontSize: 11, color: "#9CA3AF", lineHeight: 1.6 }}
                  >
                    {pr.description}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
        <div style={{ width: 210, padding: "24px 20px 24px 0" }}>
          {skills.length > 0 && (
            <>
              <SH color={"#86EFAC"}>skills[]</SH>
              {skills.map((sk) => (
                <div key={sk.name} style={{ marginBottom: 8 }}>
                  <div
                    style={{ fontSize: 10, color: "#D1D5DB", marginBottom: 2 }}
                  >
                    {sk.name}
                  </div>
                  <div
                    style={{
                      height: 3,
                      background: "#1F2937",
                      borderRadius: 2,
                    }}
                  >
                    <div
                      style={{
                        height: 3,
                        background: `linear-gradient(90deg,${cyan},#86EFAC)`,
                        borderRadius: 2,
                        width: pw(sk.proficiency),
                      }}
                    />
                  </div>
                </div>
              ))}
            </>
          )}
          {education.length > 0 && (
            <>
              <SH color={"#FDE68A"}>edu()</SH>
              {education.map((e) => (
                <div
                  key={`${e.institution}-${e.degree}`}
                  style={{
                    marginBottom: 10,
                    background: dark,
                    borderRadius: 4,
                    padding: "8px 10px",
                  }}
                >
                  <div
                    style={{ fontSize: 10, color: "#F9FAFB", fontWeight: 600 }}
                  >
                    {e.degree}
                  </div>
                  <div style={{ fontSize: 10, color: cyan }}>
                    {e.institution}
                  </div>
                  <div style={{ fontSize: 9, color: "#6B7280" }}>
                    {e.startDate} – {e.endDate}
                  </div>
                </div>
              ))}
            </>
          )}
          {languages.length > 0 && (
            <>
              <SH color={"#C084FC"}>lang[]</SH>
              {languages.map((l) => (
                <div
                  key={l.name}
                  style={{ fontSize: 10, color: "#9CA3AF", marginBottom: 4 }}
                >
                  '{l.name}': '{l.proficiency}'
                </div>
              ))}
            </>
          )}
          {certifications.length > 0 && (
            <>
              <SH color={"#FCA5A5"}>certs[]</SH>
              {certifications.map((c) => (
                <div
                  key={`${c.name}-${c.organization}`}
                  style={{ fontSize: 10, color: "#9CA3AF", marginBottom: 6 }}
                >
                  <div style={{ color: "#F9FAFB" }}>{c.name}</div>
                  <div>{c.organization}</div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function SH({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 700,
        color,
        marginBottom: 10,
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
