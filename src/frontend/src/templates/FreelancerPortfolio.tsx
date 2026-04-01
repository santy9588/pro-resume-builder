import type { ResumeData } from "../types/resume";

const amber = "#D97706";
const bgLight = "#FFFBEB";

export default function FreelancerPortfolio({ data }: { data: ResumeData }) {
  const {
    personalInfo: p,
    summary,
    workExperience,
    education,
    skills,
    languages,
    projects,
  } = data;
  const name = `${p.firstName} ${p.lastName}`;
  return (
    <div
      style={{
        width: 794,
        minHeight: 1123,
        background: bgLight,
        fontFamily: "'Helvetica Neue',Arial,sans-serif",
        color: "#1a1a1a",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: "#1C1A0A",
          color: "#fff",
          padding: "40px 44px 28px",
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
            <div style={{ fontSize: 30, fontWeight: 900, letterSpacing: -0.5 }}>
              {name}
            </div>
            <div
              style={{
                fontSize: 13,
                color: amber,
                fontWeight: 700,
                marginTop: 6,
              }}
            >
              Freelance Developer &amp; Consultant
            </div>
          </div>
          <div
            style={{
              background: amber,
              borderRadius: 8,
              padding: "8px 14px",
              textAlign: "right" as const,
              fontSize: 11,
              color: "#1C1A0A",
              fontWeight: 700,
            }}
          >
            {p.website && <div>🌐 {p.website}</div>}
            {p.github && <div>⌥ {p.github}</div>}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            fontSize: 11,
            color: "rgba(255,255,255,0.7)",
            marginTop: 12,
          }}
        >
          {p.email && <span>{p.email}</span>}
          {p.phone && <span>{p.phone}</span>}
          {p.address && <span>{p.address}</span>}
        </div>
      </div>
      <div style={{ padding: "24px 36px" }}>
        {summary && (
          <>
            <SH color={amber}>About</SH>
            <p
              style={{
                fontSize: 13,
                color: "#4B3700",
                lineHeight: 1.8,
                marginBottom: 20,
              }}
            >
              {summary}
            </p>
          </>
        )}
        {projects.length > 0 && (
          <>
            <SH color={amber}>Portfolio / Featured Projects</SH>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                marginBottom: 20,
              }}
            >
              {projects.map((pr, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    borderRadius: 8,
                    padding: "14px 16px",
                    border: `1px solid ${amber}44`,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    style={{ fontWeight: 800, fontSize: 13, color: "#1C1A0A" }}
                  >
                    {pr.name}
                  </div>
                  {pr.technologies.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        gap: 4,
                        flexWrap: "wrap",
                        margin: "6px 0",
                      }}
                    >
                      {pr.technologies.map((t, j) => (
                        <span
                          key={j}
                          style={{
                            fontSize: 9,
                            background: amber + "22",
                            color: amber,
                            borderRadius: 4,
                            padding: "1px 6px",
                            fontWeight: 600,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  <p
                    style={{ fontSize: 11, color: "#6B4A0A", lineHeight: 1.6 }}
                  >
                    {pr.description}
                  </p>
                  {pr.website && (
                    <div style={{ fontSize: 10, color: amber, marginTop: 4 }}>
                      🌐 {pr.website}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
        <div style={{ display: "flex", gap: 24 }}>
          <div style={{ flex: 1 }}>
            {workExperience.length > 0 && (
              <>
                <SH color={amber}>Experience</SH>
                {workExperience.map((w, i) => (
                  <div key={i} style={{ marginBottom: 14 }}>
                    <div style={{ fontWeight: 700, fontSize: 12 }}>
                      {w.jobTitle} @ {w.company}
                    </div>
                    <div
                      style={{ fontSize: 11, color: amber, marginBottom: 2 }}
                    >
                      {w.startDate} – {w.endDate}
                    </div>
                    <p
                      style={{
                        fontSize: 11,
                        color: "#6B4A0A",
                        lineHeight: 1.6,
                      }}
                    >
                      {w.description}
                    </p>
                  </div>
                ))}
              </>
            )}
          </div>
          <div style={{ width: 210 }}>
            {skills.length > 0 && (
              <>
                <SH color={amber}>Skills</SH>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {skills.map((sk, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: 10,
                        background:
                          i % 3 === 0
                            ? amber
                            : i % 3 === 1
                              ? "#1C1A0A"
                              : "#fff",
                        color:
                          i % 3 === 0
                            ? "#fff"
                            : i % 3 === 1
                              ? amber
                              : "#1C1A0A",
                        border: "1px solid " + amber,
                        borderRadius: 4,
                        padding: "2px 8px",
                      }}
                    >
                      {sk.name}
                    </span>
                  ))}
                </div>
              </>
            )}
            {education.length > 0 && (
              <>
                <SH color={amber} style={{ marginTop: 16 }}>
                  Education
                </SH>
                {education.map((e, i) => (
                  <div key={i} style={{ fontSize: 11, marginBottom: 8 }}>
                    <div style={{ fontWeight: 700 }}>{e.degree}</div>
                    <div style={{ color: amber }}>{e.institution}</div>
                    <div style={{ color: "#9CA3AF" }}>{e.endDate}</div>
                  </div>
                ))}
              </>
            )}
            {languages.length > 0 && (
              <>
                <SH color={amber}>Languages</SH>
                {languages.map((l, i) => (
                  <div
                    key={i}
                    style={{ fontSize: 11, color: "#4B3700", marginBottom: 3 }}
                  >
                    {l.name} – {l.proficiency}
                  </div>
                ))}
              </>
            )}
          </div>
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
        fontWeight: 800,
        textTransform: "uppercase" as const,
        letterSpacing: 1.5,
        color,
        borderBottom: `2px solid ${color}`,
        paddingBottom: 4,
        marginBottom: 10,
        marginTop: 0,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
