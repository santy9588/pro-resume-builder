import type { ResumeData } from "../types/resume";

const orange = "#F97316";
const amber = "#FEF3C7";

export default function Infographic({ data }: { data: ResumeData }) {
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
  const pct = (s: string) =>
    (
      ({ Expert: 95, Advanced: 78, Intermediate: 58, Beginner: 32 }) as Record<
        string,
        number
      >
    )[s] ?? 50;
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
          background: `linear-gradient(135deg,${orange},#FBBF24)`,
          padding: "36px 40px 28px",
          color: "#fff",
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
            <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: -0.5 }}>
              {name}
            </div>
            <div style={{ fontSize: 13, opacity: 0.9, marginTop: 4 }}>
              {p.address}
            </div>
          </div>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {p.firstName[0]}
            {p.lastName[0]}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            fontSize: 11,
            marginTop: 12,
            opacity: 0.9,
          }}
        >
          {p.email && <span>✉ {p.email}</span>}
          {p.phone && <span>✆ {p.phone}</span>}
          {p.website && <span>🌐 {p.website}</span>}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: 240, background: amber, padding: "24px 20px" }}>
          {skills.length > 0 && (
            <>
              <IV title="Skills" color={orange} />
              {skills.map((sk) => (
                <div key={sk.name} style={{ marginBottom: 10 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 11,
                      marginBottom: 3,
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{sk.name}</span>
                    <span style={{ color: orange }}>
                      {pct(sk.proficiency)}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: 6,
                      background: "#fff",
                      borderRadius: 3,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: 6,
                        background: orange,
                        borderRadius: 3,
                        width: `${pct(sk.proficiency)}%`,
                        transition: "width 0.3s",
                      }}
                    />
                  </div>
                </div>
              ))}
            </>
          )}
          {languages.length > 0 && (
            <>
              <IV title="Languages" color={orange} />
              {languages.map((l) => (
                <div
                  key={l.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 11,
                    marginBottom: 5,
                  }}
                >
                  <span style={{ fontWeight: 600 }}>{l.name}</span>
                  <span style={{ color: orange, fontSize: 10 }}>
                    {l.proficiency}
                  </span>
                </div>
              ))}
            </>
          )}
          {certifications.length > 0 && (
            <>
              <IV title="Certifications" color={orange} />
              {certifications.map((c) => (
                <div
                  key={`${c.name}-${c.organization}`}
                  style={{ marginBottom: 8 }}
                >
                  <div style={{ fontSize: 11, fontWeight: 600 }}>{c.name}</div>
                  <div style={{ fontSize: 10, color: "#78716C" }}>
                    {c.organization} · {c.date}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div style={{ flex: 1, padding: "24px 28px" }}>
          {summary && (
            <>
              <IV title="Profile" color={orange} />
              <p
                style={{
                  fontSize: 12,
                  color: "#555",
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
              <IV title="Experience" color={orange} />
              {workExperience.map((w) => (
                <div
                  key={`${w.jobTitle}-${w.company}`}
                  style={{ marginBottom: 16, display: "flex", gap: 12 }}
                >
                  <div
                    style={{
                      width: 4,
                      background: `linear-gradient(${orange},#FBBF24)`,
                      borderRadius: 2,
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13 }}>
                      {w.jobTitle}
                    </div>
                    <div
                      style={{ fontSize: 12, color: orange, fontWeight: 600 }}
                    >
                      {w.company}
                    </div>
                    <div style={{ fontSize: 11, color: "#9CA3AF" }}>
                      {w.startDate} – {w.endDate}
                    </div>
                    <p
                      style={{
                        fontSize: 12,
                        color: "#555",
                        lineHeight: 1.6,
                        marginTop: 4,
                      }}
                    >
                      {w.description}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
          {education.length > 0 && (
            <>
              <IV title="Education" color={orange} />
              {education.map((e) => (
                <div
                  key={`${e.institution}-${e.degree}`}
                  style={{
                    marginBottom: 10,
                    background: "#FFF7ED",
                    borderRadius: 6,
                    padding: "8px 12px",
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: 12 }}>
                    {e.degree} in {e.fieldOfStudy}
                  </div>
                  <div style={{ fontSize: 11, color: orange }}>
                    {e.institution}
                  </div>
                  <div style={{ fontSize: 10, color: "#9CA3AF" }}>
                    {e.startDate} – {e.endDate}
                  </div>
                </div>
              ))}
            </>
          )}
          {projects.length > 0 && (
            <>
              <IV title="Projects" color={orange} />
              {projects.map((pr) => (
                <div key={pr.name} style={{ marginBottom: 10 }}>
                  <div style={{ fontWeight: 700, fontSize: 12, color: orange }}>
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
      </div>
    </div>
  );
}

function IV({ title, color }: { title: string; color: string }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 1.5,
        color,
        marginBottom: 8,
        marginTop: 16,
      }}
    >
      {title}
    </div>
  );
}
