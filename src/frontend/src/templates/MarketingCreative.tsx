import type { ResumeData } from "../types/resume";

const pink = "#EC4899";
const yellow = "#FBBF24";

export default function MarketingCreative({ data }: { data: ResumeData }) {
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
        style={{
          background: pink,
          padding: "0 0 0 44px",
          display: "flex",
          alignItems: "stretch",
        }}
      >
        <div style={{ flex: 1, padding: "40px 0 30px" }}>
          <div
            style={{
              fontSize: 34,
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: 14,
              color: yellow,
              fontWeight: 700,
              marginTop: 6,
              letterSpacing: 1,
            }}
          >
            Marketing & Brand Strategist
          </div>
          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              fontSize: 11,
              color: "rgba(255,255,255,0.85)",
              marginTop: 12,
            }}
          >
            {p.email && <span>{p.email}</span>}
            {p.phone && <span>{p.phone}</span>}
            {p.website && <span>{p.website}</span>}
          </div>
        </div>
        <div
          style={{
            width: 120,
            background: yellow,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 40,
            fontWeight: 900,
            color: pink,
          }}
        >
          {p.firstName[0]}
          {p.lastName[0]}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, padding: "24px 32px" }}>
          {summary && (
            <>
              <SH color={pink}>About Me</SH>
              <p
                style={{
                  fontSize: 13,
                  color: "#444",
                  lineHeight: 1.8,
                  marginBottom: 20,
                }}
              >
                {summary}
              </p>
            </>
          )}
          {workExperience.length > 0 && (
            <>
              <SH color={pink}>Experience</SH>
              {workExperience.map((w) => (
                <div
                  key={`${w.jobTitle}-${w.company}`}
                  style={{ marginBottom: 18 }}
                >
                  <div
                    style={{ display: "flex", alignItems: "baseline", gap: 8 }}
                  >
                    <div style={{ fontWeight: 800, fontSize: 13 }}>
                      {w.jobTitle}
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        background: `${pink}22`,
                        color: pink,
                        borderRadius: 10,
                        padding: "1px 8px",
                      }}
                    >
                      {w.startDate} – {w.endDate}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: pink,
                      fontWeight: 600,
                      marginBottom: 4,
                    }}
                  >
                    {w.company} · {w.location}
                  </div>
                  <p style={{ fontSize: 12, color: "#555", lineHeight: 1.6 }}>
                    {w.description}
                  </p>
                </div>
              ))}
            </>
          )}
          {projects.length > 0 && (
            <>
              <SH color={pink}>Campaigns & Projects</SH>
              {projects.map((pr) => (
                <div
                  key={pr.name}
                  style={{
                    marginBottom: 12,
                    padding: "10px 14px",
                    border: `2px solid ${pink}22`,
                    borderRadius: 8,
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: 12, color: pink }}>
                    {pr.name}
                  </div>
                  <p style={{ fontSize: 11, color: "#555", lineHeight: 1.6 }}>
                    {pr.description}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
        <div
          style={{ width: 210, background: "#FFF0F9", padding: "24px 20px" }}
        >
          {education.length > 0 && (
            <>
              <SH color={pink}>Education</SH>
              {education.map((e) => (
                <div
                  key={`${e.institution}-${e.degree}`}
                  style={{ marginBottom: 12 }}
                >
                  <div style={{ fontSize: 12, fontWeight: 700 }}>
                    {e.degree}
                  </div>
                  <div style={{ fontSize: 11, color: pink }}>
                    {e.fieldOfStudy}
                  </div>
                  <div style={{ fontSize: 11, color: "#666" }}>
                    {e.institution}
                  </div>
                  <div style={{ fontSize: 10, color: "#999" }}>{e.endDate}</div>
                </div>
              ))}
            </>
          )}
          {skills.length > 0 && (
            <>
              <SH color={pink}>Skills</SH>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                {skills.map((sk, i) => (
                  <span
                    key={sk.name}
                    style={{
                      fontSize: 10,
                      background: i % 2 === 0 ? pink : yellow,
                      color: i % 2 === 0 ? "#fff" : "#111",
                      borderRadius: 3,
                      padding: "2px 8px",
                    }}
                  >
                    {sk.name}
                  </span>
                ))}
              </div>
            </>
          )}
          {certifications.length > 0 && (
            <>
              <SH color={pink} style={{ marginTop: 16 }}>
                Certifications
              </SH>
              {certifications.map((c) => (
                <div
                  key={`${c.name}-${c.organization}`}
                  style={{ fontSize: 10, color: "#555", marginBottom: 6 }}
                >
                  <div style={{ fontWeight: 600, color: "#333" }}>{c.name}</div>
                  <div>{c.organization}</div>
                </div>
              ))}
            </>
          )}
          {languages.length > 0 && (
            <>
              <SH color={pink}>Languages</SH>
              {languages.map((l) => (
                <div
                  key={l.name}
                  style={{ fontSize: 11, color: "#555", marginBottom: 4 }}
                >
                  {l.name} — {l.proficiency}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function SH({
  color,
  children,
  style,
}: { color: string; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 1.5,
        textTransform: "uppercase" as const,
        color,
        marginBottom: 10,
        marginTop: 20,
        borderBottom: `3px solid ${color}`,
        paddingBottom: 4,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
