import type { ResumeData } from "../types/resume";

const purple = "#6B21A8";
const lavender = "#EDE9FE";

export default function CreativeDesigner({ data }: { data: ResumeData }) {
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
        display: "flex",
        fontFamily: "'Helvetica Neue',Arial,sans-serif",
        background: "#fff",
      }}
    >
      {/* Purple sidebar */}
      <div
        style={{
          width: 260,
          background: purple,
          color: "#fff",
          padding: "40px 24px",
        }}
      >
        <div
          style={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            background: lavender,
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            fontWeight: 700,
            color: purple,
          }}
        >
          {p.firstName[0]}
          {p.lastName[0]}
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: 6,
          }}
        >
          {name}
        </div>
        <div style={{ fontSize: 12, opacity: 0.75, marginBottom: 24 }}>
          {p.address}
        </div>
        <Sec title="Contact" light>
          {p.email && <CI icon="✉" val={p.email} />}
          {p.phone && <CI icon="✆" val={p.phone} />}
          {p.website && <CI icon="🌐" val={p.website} />}
          {p.linkedIn && <CI icon="in" val={p.linkedIn} />}
          {p.github && <CI icon="⌥" val={p.github} />}
        </Sec>
        {skills.length > 0 && (
          <Sec title="Skills" light>
            {skills.map((sk) => (
              <div key={sk.name} style={{ marginBottom: 8 }}>
                <div style={{ fontSize: 11, opacity: 0.9, marginBottom: 3 }}>
                  {sk.name}
                </div>
                <div
                  style={{
                    height: 3,
                    background: "rgba(255,255,255,0.25)",
                    borderRadius: 2,
                  }}
                >
                  <div
                    style={{
                      height: 3,
                      background: "#C4B5FD",
                      borderRadius: 2,
                      width: pw(sk.proficiency),
                    }}
                  />
                </div>
              </div>
            ))}
          </Sec>
        )}
        {languages.length > 0 && (
          <Sec title="Languages" light>
            {languages.map((l) => (
              <div
                key={l.name}
                style={{ fontSize: 11, opacity: 0.85, marginBottom: 4 }}
              >
                {l.name} <span style={{ opacity: 0.6 }}>• {l.proficiency}</span>
              </div>
            ))}
          </Sec>
        )}
      </div>
      {/* Main content */}
      <div style={{ flex: 1, padding: "40px 32px", background: "#fff" }}>
        {summary && (
          <Sec title="About Me" color={purple}>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.8 }}>
              {summary}
            </p>
          </Sec>
        )}
        {workExperience.length > 0 && (
          <Sec title="Work Experience" color={purple}>
            {workExperience.map((w) => (
              <div
                key={`${w.jobTitle}-${w.company}`}
                style={{
                  marginBottom: 18,
                  paddingLeft: 14,
                  borderLeft: `3px solid ${lavender}`,
                }}
              >
                <div style={{ fontWeight: 700, fontSize: 13, color: "#222" }}>
                  {w.jobTitle}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: purple,
                    fontWeight: 600,
                    marginBottom: 2,
                  }}
                >
                  {w.company}
                </div>
                <div style={{ fontSize: 11, color: "#aaa", marginBottom: 4 }}>
                  {w.startDate} – {w.endDate} · {w.location}
                </div>
                <p style={{ fontSize: 12, color: "#555", lineHeight: 1.6 }}>
                  {w.description}
                </p>
              </div>
            ))}
          </Sec>
        )}
        {education.length > 0 && (
          <Sec title="Education" color={purple}>
            {education.map((e) => (
              <div
                key={`${e.institution}-${e.degree}`}
                style={{ marginBottom: 12 }}
              >
                <div style={{ fontWeight: 700, fontSize: 13 }}>{e.degree}</div>
                <div style={{ fontSize: 12, color: purple }}>
                  {e.institution}
                </div>
                <div style={{ fontSize: 11, color: "#aaa" }}>
                  {e.startDate} – {e.endDate}
                  {e.gpa ? ` · GPA: ${e.gpa}` : ""}
                </div>
              </div>
            ))}
          </Sec>
        )}
        {projects.length > 0 && (
          <Sec title="Projects" color={purple}>
            {projects.map((pr) => (
              <div
                key={pr.name}
                style={{
                  marginBottom: 12,
                  padding: "10px 14px",
                  background: lavender,
                  borderRadius: 8,
                }}
              >
                <div style={{ fontWeight: 700, fontSize: 13, color: purple }}>
                  {pr.name}
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: "#555",
                    lineHeight: 1.6,
                    marginTop: 4,
                  }}
                >
                  {pr.description}
                </p>
                {pr.technologies.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      gap: 6,
                      flexWrap: "wrap",
                      marginTop: 6,
                    }}
                  >
                    {pr.technologies.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 10,
                          background: purple,
                          color: "#fff",
                          borderRadius: 3,
                          padding: "2px 6px",
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
        {certifications.length > 0 && (
          <Sec title="Certifications" color={purple}>
            {certifications.map((c) => (
              <div
                key={`${c.name}-${c.organization}`}
                style={{ fontSize: 12, color: "#555", marginBottom: 6 }}
              >
                <strong style={{ color: "#222" }}>{c.name}</strong> —{" "}
                {c.organization}, {c.date}
              </div>
            ))}
          </Sec>
        )}
      </div>
    </div>
  );
}

function Sec({
  title,
  color,
  light,
  children,
}: {
  title: string;
  color?: string;
  light?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 22 }}>
      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: light ? "rgba(255,255,255,0.6)" : color,
          borderBottom: `1px solid ${light ? "rgba(255,255,255,0.2)" : `${color}44`}`,
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

function CI({ icon, val }: { icon: string; val: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 8,
        fontSize: 11,
        opacity: 0.85,
        marginBottom: 6,
      }}
    >
      <span style={{ minWidth: 14 }}>{icon}</span>
      <span style={{ wordBreak: "break-all" }}>{val}</span>
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
