import type { ResumeData } from "../types/resume";

const green = "#059669";
const light = "#F0FFF4";

export default function InternationalGlobal({ data }: { data: ResumeData }) {
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
        style={{ background: green, color: "#fff", padding: "36px 44px 24px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{name}</div>
            <div style={{ fontSize: 13, opacity: 0.85, marginTop: 4 }}>
              🌐 Global Professional · {p.address}
            </div>
          </div>
          <div style={{ fontSize: 36 }}>🌍</div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            fontSize: 11,
            marginTop: 12,
            opacity: 0.9,
          }}
        >
          {p.email && <span>✉ {p.email}</span>}
          {p.phone && <span>✆ {p.phone}</span>}
          {p.website && <span>🌐 {p.website}</span>}
          {p.linkedIn && <span>in {p.linkedIn}</span>}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, padding: "24px 28px 24px 36px" }}>
          {summary && (
            <Sec title="Professional Profile" color={green}>
              <p style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.8 }}>
                {summary}
              </p>
            </Sec>
          )}
          {workExperience.length > 0 && (
            <Sec title="International Experience" color={green}>
              {workExperience.map((w) => (
                <div
                  key={`${w.jobTitle}-${w.company}`}
                  style={{ marginBottom: 16 }}
                >
                  <div style={{ fontWeight: 700, fontSize: 13 }}>
                    {w.jobTitle}
                  </div>
                  <div style={{ fontSize: 12, color: green, fontWeight: 600 }}>
                    {w.company} · {w.location}
                  </div>
                  <div
                    style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 4 }}
                  >
                    {w.startDate} – {w.endDate}
                  </div>
                  <p
                    style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.6 }}
                  >
                    {w.description}
                  </p>
                </div>
              ))}
            </Sec>
          )}
          {projects.length > 0 && (
            <Sec title="Global Projects" color={green}>
              {projects.map((pr) => (
                <div key={pr.name} style={{ marginBottom: 10 }}>
                  <div style={{ fontWeight: 700, fontSize: 12 }}>{pr.name}</div>
                  <p
                    style={{ fontSize: 11, color: "#4B5563", lineHeight: 1.6 }}
                  >
                    {pr.description}
                  </p>
                </div>
              ))}
            </Sec>
          )}
        </div>
        <div style={{ width: 220, background: light, padding: "24px 20px" }}>
          {languages.length > 0 && (
            <Sec title="🗣 Languages" color={green}>
              {languages.map((l) => (
                <div
                  key={l.name}
                  style={{
                    marginBottom: 10,
                    padding: "6px 10px",
                    background: "#fff",
                    borderRadius: 6,
                    border: `1px solid ${green}33`,
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 700 }}>
                    🌐 {l.name}
                  </div>
                  <div style={{ fontSize: 11, color: green, fontWeight: 600 }}>
                    {l.proficiency}
                  </div>
                </div>
              ))}
            </Sec>
          )}
          {education.length > 0 && (
            <Sec title="Education" color={green}>
              {education.map((e) => (
                <div
                  key={`${e.institution}-${e.degree}`}
                  style={{ marginBottom: 10 }}
                >
                  <div style={{ fontSize: 12, fontWeight: 700 }}>
                    {e.degree}
                  </div>
                  <div style={{ fontSize: 11, color: green }}>
                    {e.institution}
                  </div>
                  <div style={{ fontSize: 10, color: "#9CA3AF" }}>
                    {e.startDate} – {e.endDate}
                  </div>
                </div>
              ))}
            </Sec>
          )}
          {skills.length > 0 && (
            <Sec title="Skills" color={green}>
              {skills.map((sk) => (
                <div
                  key={sk.name}
                  style={{
                    fontSize: 11,
                    marginBottom: 5,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{sk.name}</span>
                  <span style={{ color: green, fontWeight: 600, fontSize: 10 }}>
                    {sk.proficiency}
                  </span>
                </div>
              ))}
            </Sec>
          )}
          {certifications.length > 0 && (
            <Sec title="Certifications" color={green}>
              {certifications.map((c) => (
                <div
                  key={`${c.name}-${c.organization}`}
                  style={{ fontSize: 10, color: "#4B5563", marginBottom: 6 }}
                >
                  <div style={{ fontWeight: 600 }}>{c.name}</div>
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
          textTransform: "uppercase" as const,
          color,
          borderBottom: `2px solid ${color}33`,
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
