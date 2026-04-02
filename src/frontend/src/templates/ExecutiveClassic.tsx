import type { ResumeData } from "../types/resume";

const gold = "#B8860B";

export default function ExecutiveClassic({ data }: { data: ResumeData }) {
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
        background: "#FEFCF8",
        fontFamily: "'Georgia',serif",
        color: "#1a1a1a",
        padding: "52px 64px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          textAlign: "center" as const,
          borderTop: `3px double ${gold}`,
          borderBottom: `3px double ${gold}`,
          padding: "20px 0",
          marginBottom: 32,
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase" as const,
            color: "#1a1a1a",
          }}
        >
          {name}
        </div>
        <div
          style={{
            width: 60,
            height: 1,
            background: gold,
            margin: "10px auto",
          }}
        />
        <div style={{ fontSize: 12, color: "#666", letterSpacing: 1 }}>
          {[p.email, p.phone, p.address].filter(Boolean).join(" · ")}
        </div>
        {(p.website || p.linkedIn) && (
          <div style={{ fontSize: 11, color: "#888", marginTop: 4 }}>
            {[p.website, p.linkedIn].filter(Boolean).join(" · ")}
          </div>
        )}
      </div>
      {summary && (
        <>
          <SH>Executive Summary</SH>
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.9,
              color: "#333",
              fontStyle: "italic",
              marginBottom: 28,
            }}
          >
            {summary}
          </p>
        </>
      )}
      {workExperience.length > 0 && (
        <>
          <SH>Professional Experience</SH>
          {workExperience.map((w) => (
            <div
              key={`${w.jobTitle}-${w.company}`}
              style={{ marginBottom: 22 }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <div style={{ fontWeight: 700, fontSize: 14 }}>
                  {w.jobTitle}
                </div>
                <div style={{ fontSize: 11, color: gold, fontStyle: "italic" }}>
                  {w.startDate} – {w.endDate}
                </div>
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: gold,
                  fontWeight: 600,
                  marginBottom: 6,
                }}
              >
                {w.company} | {w.location}
              </div>
              <p style={{ fontSize: 12, lineHeight: 1.8, color: "#444" }}>
                {w.description}
              </p>
            </div>
          ))}
        </>
      )}
      {education.length > 0 && (
        <>
          <SH>Education</SH>
          {education.map((e) => (
            <div
              key={`${e.institution}-${e.degree}`}
              style={{ marginBottom: 14 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ fontWeight: 700, fontSize: 13 }}>
                  {e.degree} in {e.fieldOfStudy}
                </div>
                <div style={{ fontSize: 11, color: gold, fontStyle: "italic" }}>
                  {e.startDate} – {e.endDate}
                </div>
              </div>
              <div style={{ fontSize: 12, color: "#555" }}>
                {e.institution}
                {e.honors ? ` · ${e.honors}` : ""}
              </div>
            </div>
          ))}
        </>
      )}
      <div style={{ display: "flex", gap: 32 }}>
        {skills.length > 0 && (
          <div style={{ flex: 1 }}>
            <SH>Core Competencies</SH>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {skills.map((sk) => (
                <span
                  key={sk.name}
                  style={{
                    fontSize: 11,
                    border: `1px solid ${gold}`,
                    color: "#444",
                    borderRadius: 2,
                    padding: "2px 8px",
                  }}
                >
                  {sk.name}
                </span>
              ))}
            </div>
          </div>
        )}
        {languages.length > 0 && (
          <div style={{ flex: 1 }}>
            <SH>Languages</SH>
            {languages.map((l) => (
              <div
                key={l.name}
                style={{ fontSize: 12, color: "#555", marginBottom: 4 }}
              >
                {l.name} — <em>{l.proficiency}</em>
              </div>
            ))}
          </div>
        )}
      </div>
      {certifications.length > 0 && (
        <>
          <SH>Certifications &amp; Credentials</SH>
          {certifications.map((c) => (
            <div
              key={`${c.name}-${c.organization}`}
              style={{ fontSize: 12, color: "#444", marginBottom: 6 }}
            >
              <strong>{c.name}</strong> · {c.organization} · {c.date}
            </div>
          ))}
        </>
      )}
      {projects.length > 0 && (
        <>
          <SH>Notable Projects</SH>
          {projects.map((pr) => (
            <div key={pr.name} style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 700, fontSize: 13 }}>{pr.name}</div>
              <p style={{ fontSize: 12, color: "#555", lineHeight: 1.7 }}>
                {pr.description}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

function SH({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontWeight: 700,
        fontSize: 12,
        letterSpacing: 2,
        textTransform: "uppercase" as const,
        color: gold,
        borderBottom: "1px solid #e8d9a0",
        paddingBottom: 4,
        marginBottom: 12,
        marginTop: 24,
      }}
    >
      {children}
    </div>
  );
}
