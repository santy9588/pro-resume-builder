import type { ResumeData } from "../types/resume";

const teal = "#2E86AB";
const light = "#F0F9FF";

export default function Healthcare({ data }: { data: ResumeData }) {
  const {
    personalInfo: p,
    summary,
    workExperience,
    education,
    skills,
    certifications,
    languages,
  } = data;
  const name = `${p.firstName} ${p.lastName}`;
  return (
    <div
      style={{
        width: 794,
        minHeight: 1123,
        background: "#fff",
        fontFamily: "Arial,sans-serif",
        color: "#1a2e3b",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: `linear-gradient(135deg,${teal},#0E6B8A)`,
          color: "#fff",
          padding: "36px 44px 28px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            +
          </div>
          <div>
            <div style={{ fontSize: 26, fontWeight: 700 }}>{name}</div>
            <div style={{ fontSize: 13, opacity: 0.85, marginTop: 4 }}>
              Healthcare Professional
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 20,
            flexWrap: "wrap",
            fontSize: 11,
            marginTop: 14,
            opacity: 0.9,
          }}
        >
          {p.email && <span>✉ {p.email}</span>}
          {p.phone && <span>✆ {p.phone}</span>}
          {p.address && <span>📍 {p.address}</span>}
          {p.linkedIn && <span>in {p.linkedIn}</span>}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, padding: "24px 28px 24px 36px" }}>
          {summary && (
            <Sec title="Professional Summary" color={teal}>
              <p style={{ fontSize: 12, color: "#4B5563", lineHeight: 1.8 }}>
                {summary}
              </p>
            </Sec>
          )}
          {workExperience.length > 0 && (
            <Sec title="Clinical Experience" color={teal}>
              {workExperience.map((w, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: 16,
                    paddingLeft: 12,
                    borderLeft: `3px solid ${teal}33`,
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: 13 }}>
                    {w.jobTitle}
                  </div>
                  <div style={{ fontSize: 12, color: teal, fontWeight: 600 }}>
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
          {certifications.length > 0 && (
            <Sec title="Licenses & Certifications" color={teal}>
              {certifications.map((c, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 8,
                    padding: "6px 10px",
                    background: light,
                    borderRadius: 4,
                  }}
                >
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600 }}>
                      {c.name}
                    </div>
                    <div style={{ fontSize: 11, color: "#6B7280" }}>
                      {c.organization}
                    </div>
                  </div>
                  <div
                    style={{ fontSize: 11, color: teal, alignSelf: "center" }}
                  >
                    {c.date}
                  </div>
                </div>
              ))}
            </Sec>
          )}
        </div>
        <div style={{ width: 220, background: light, padding: "24px 20px" }}>
          {education.length > 0 && (
            <Sec title="Education" color={teal}>
              {education.map((e, i) => (
                <div key={i} style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>
                    {e.degree}
                  </div>
                  <div style={{ fontSize: 11, color: teal }}>
                    {e.fieldOfStudy}
                  </div>
                  <div style={{ fontSize: 11, color: "#6B7280" }}>
                    {e.institution}
                  </div>
                  <div style={{ fontSize: 10, color: "#9CA3AF" }}>
                    {e.endDate}
                  </div>
                </div>
              ))}
            </Sec>
          )}
          {skills.length > 0 && (
            <Sec title="Clinical Skills" color={teal}>
              {skills.map((sk, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 11,
                    marginBottom: 5,
                    padding: "3px 0",
                    borderBottom: "1px solid #E0F2FE",
                  }}
                >
                  <span>{sk.name}</span>
                  <span style={{ color: teal, fontSize: 10 }}>
                    {sk.proficiency}
                  </span>
                </div>
              ))}
            </Sec>
          )}
          {languages.length > 0 && (
            <Sec title="Languages" color={teal}>
              {languages.map((l, i) => (
                <div
                  key={i}
                  style={{ fontSize: 11, color: "#4B5563", marginBottom: 4 }}
                >
                  {l.name}{" "}
                  <span style={{ color: "#9CA3AF" }}>({l.proficiency})</span>
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
          textTransform: "uppercase",
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
