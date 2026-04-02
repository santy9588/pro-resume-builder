import type { ResumeData } from "../types/resume";

export default function SimpleClean({ data }: { data: ResumeData }) {
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
        fontFamily: "Arial,Helvetica,sans-serif",
        color: "#000",
        padding: "50px 60px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontSize: 28, fontWeight: 700 }}>{name}</div>
        <div style={{ fontSize: 12, color: "#555", marginTop: 4 }}>
          {[p.email, p.phone, p.address].filter(Boolean).join(" · ")}
        </div>
        {(p.website || p.linkedIn) && (
          <div style={{ fontSize: 11, color: "#777", marginTop: 2 }}>
            {[p.website, p.linkedIn, p.github].filter(Boolean).join(" · ")}
          </div>
        )}
      </div>
      <hr
        style={{
          border: "none",
          borderTop: "2px solid #000",
          marginBottom: 16,
        }}
      />
      {summary && (
        <>
          <SH>Summary</SH>
          <p
            style={{
              fontSize: 12,
              lineHeight: 1.7,
              color: "#333",
              marginBottom: 16,
            }}
          >
            {summary}
          </p>
        </>
      )}
      {workExperience.length > 0 && (
        <>
          <SH>Experience</SH>
          {workExperience.map((w) => (
            <div
              key={`${w.jobTitle}-${w.company}`}
              style={{ marginBottom: 14 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ fontWeight: 700, fontSize: 13 }}>
                  {w.jobTitle} — {w.company}
                </div>
                <div style={{ fontSize: 11, color: "#666" }}>
                  {w.startDate} – {w.endDate}
                </div>
              </div>
              <div style={{ fontSize: 12, color: "#555", marginBottom: 3 }}>
                {w.location}
              </div>
              <p style={{ fontSize: 12, color: "#333", lineHeight: 1.7 }}>
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
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <div>
                <div style={{ fontWeight: 700, fontSize: 13 }}>
                  {e.degree} in {e.fieldOfStudy}
                </div>
                <div style={{ fontSize: 12, color: "#555" }}>
                  {e.institution}
                  {e.gpa ? ` · GPA ${e.gpa}` : ""}
                </div>
              </div>
              <div style={{ fontSize: 11, color: "#666" }}>
                {e.startDate} – {e.endDate}
              </div>
            </div>
          ))}
        </>
      )}
      {skills.length > 0 && (
        <>
          <SH>Skills</SH>
          <p style={{ fontSize: 12, color: "#333", lineHeight: 2 }}>
            {skills.map((sk) => sk.name).join(" · ")}
          </p>
        </>
      )}
      {projects.length > 0 && (
        <>
          <SH>Projects</SH>
          {projects.map((pr) => (
            <div key={pr.name} style={{ marginBottom: 10 }}>
              <div style={{ fontWeight: 700, fontSize: 12 }}>{pr.name}</div>
              <p style={{ fontSize: 12, color: "#333", lineHeight: 1.7 }}>
                {pr.description}
              </p>
            </div>
          ))}
        </>
      )}
      {certifications.length > 0 && (
        <>
          <SH>Certifications</SH>
          {certifications.map((c) => (
            <div
              key={`${c.name}-${c.organization}`}
              style={{ fontSize: 12, marginBottom: 4 }}
            >
              {c.name} — {c.organization}, {c.date}
            </div>
          ))}
        </>
      )}
      {languages.length > 0 && (
        <>
          <SH>Languages</SH>
          <p style={{ fontSize: 12 }}>
            {languages.map((l) => `${l.name} (${l.proficiency})`).join(" · ")}
          </p>
        </>
      )}
    </div>
  );
}

function SH({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 700,
        textTransform: "uppercase" as const,
        letterSpacing: 1.5,
        borderBottom: "1px solid #ccc",
        paddingBottom: 3,
        marginBottom: 8,
        marginTop: 16,
      }}
    >
      {children}
    </div>
  );
}
