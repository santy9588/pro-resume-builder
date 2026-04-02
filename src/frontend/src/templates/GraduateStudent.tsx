import type { ResumeData } from "../types/resume";

const violet = "#7C3AED";
const light = "#FAF5FF";

export default function GraduateStudent({ data }: { data: ResumeData }) {
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
        fontFamily: "'Times New Roman',Georgia,serif",
        color: "#1a1a1a",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: light,
          borderBottom: `3px solid ${violet}`,
          padding: "36px 52px 24px",
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 700, color: "#111" }}>
          {name}
        </div>
        <div
          style={{ fontSize: 13, color: violet, fontWeight: 600, marginTop: 4 }}
        >
          Graduate Researcher · PhD Candidate
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            fontSize: 11,
            color: "#6B7280",
            marginTop: 8,
          }}
        >
          {[p.email, p.phone, p.address, p.website].filter(Boolean).map((v) => (
            <span key={v}>{v}</span>
          ))}
        </div>
      </div>
      <div style={{ padding: "28px 52px" }}>
        {summary && (
          <>
            <Sec color={violet}>Research Summary</Sec>
            <p
              style={{
                fontSize: 12,
                lineHeight: 1.9,
                color: "#374151",
                fontStyle: "italic",
                marginBottom: 20,
              }}
            >
              {summary}
            </p>
          </>
        )}
        {education.length > 0 && (
          <>
            <Sec color={violet}>Education</Sec>
            {education.map((e) => (
              <div
                key={`${e.institution}-${e.degree}`}
                style={{
                  marginBottom: 14,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>
                    {e.degree} in {e.fieldOfStudy}
                  </div>
                  <div style={{ fontSize: 12, color: violet }}>
                    {e.institution}
                  </div>
                  {(e.gpa || e.honors) && (
                    <div style={{ fontSize: 11, color: "#9CA3AF" }}>
                      {[e.gpa && `GPA: ${e.gpa}`, e.honors]
                        .filter(Boolean)
                        .join(" · ")}
                    </div>
                  )}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#9CA3AF",
                    textAlign: "right",
                    minWidth: 100,
                  }}
                >
                  {e.startDate} – {e.endDate}
                </div>
              </div>
            ))}
          </>
        )}
        {projects.length > 0 && (
          <>
            <Sec color={violet}>Research & Publications</Sec>
            {projects.map((pr) => (
              <div
                key={pr.name}
                style={{
                  marginBottom: 16,
                  paddingLeft: 16,
                  borderLeft: `3px solid ${violet}33`,
                }}
              >
                <div style={{ fontWeight: 700, fontSize: 13 }}>{pr.name}</div>
                {pr.technologies.length > 0 && (
                  <div
                    style={{
                      fontSize: 11,
                      color: "#9CA3AF",
                      fontStyle: "italic",
                    }}
                  >
                    Keywords: {pr.technologies.join(", ")}
                  </div>
                )}
                <p style={{ fontSize: 12, color: "#374151", lineHeight: 1.8 }}>
                  {pr.description}
                </p>
                {pr.website && (
                  <div style={{ fontSize: 11, color: violet }}>
                    {pr.website}
                  </div>
                )}
              </div>
            ))}
          </>
        )}
        {workExperience.length > 0 && (
          <>
            <Sec color={violet}>Teaching & Research Positions</Sec>
            {workExperience.map((w) => (
              <div
                key={`${w.jobTitle}-${w.company}`}
                style={{ marginBottom: 14 }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ fontWeight: 700, fontSize: 13 }}>
                    {w.jobTitle} — {w.company}
                  </div>
                  <div style={{ fontSize: 11, color: "#9CA3AF" }}>
                    {w.startDate} – {w.endDate}
                  </div>
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: "#374151",
                    lineHeight: 1.7,
                    marginTop: 4,
                  }}
                >
                  {w.description}
                </p>
              </div>
            ))}
          </>
        )}
        <div style={{ display: "flex", gap: 32 }}>
          {skills.length > 0 && (
            <div style={{ flex: 1 }}>
              <Sec color={violet}>Research Skills & Tools</Sec>
              <div style={{ fontSize: 12, color: "#374151", lineHeight: 2 }}>
                {skills.map((sk) => sk.name).join(" · ")}
              </div>
            </div>
          )}
          <div style={{ flex: 1 }}>
            {certifications.length > 0 && (
              <>
                <Sec color={violet}>Awards & Honors</Sec>
                {certifications.map((c) => (
                  <div
                    key={`${c.name}-${c.organization}`}
                    style={{ fontSize: 12, color: "#374151", marginBottom: 6 }}
                  >
                    {c.name} — {c.organization}, {c.date}
                  </div>
                ))}
              </>
            )}
            {languages.length > 0 && (
              <>
                <Sec color={violet}>Languages</Sec>
                <div style={{ fontSize: 12, color: "#374151" }}>
                  {languages
                    .map((l) => `${l.name} (${l.proficiency})`)
                    .join(" · ")}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Sec({
  color,
  children,
}: { color: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 12,
        fontWeight: 700,
        textTransform: "uppercase" as const,
        letterSpacing: 1.5,
        color,
        borderBottom: `1px solid ${color}44`,
        paddingBottom: 4,
        marginBottom: 10,
        marginTop: 20,
      }}
    >
      {children}
    </div>
  );
}
