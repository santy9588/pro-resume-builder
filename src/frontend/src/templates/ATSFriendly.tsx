import type { ResumeData } from "../types/resume";

export default function ATSFriendly({ data }: { data: ResumeData }) {
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
        fontFamily: "'Courier New',Courier,monospace",
        color: "#000",
        padding: "48px 56px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 22, fontWeight: 700 }}>{name}</div>
        <div style={{ fontSize: 12, marginTop: 4 }}>
          {[p.email, p.phone, p.address].filter(Boolean).join(" | ")}
        </div>
        {(p.website || p.linkedIn || p.github) && (
          <div style={{ fontSize: 12, marginTop: 2 }}>
            {[p.website, p.linkedIn, p.github].filter(Boolean).join(" | ")}
          </div>
        )}
      </div>
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #000",
          marginBottom: 14,
        }}
      />
      {summary && (
        <>
          <SH>SUMMARY</SH>
          <p style={{ fontSize: 12, lineHeight: 1.7, marginBottom: 16 }}>
            {summary}
          </p>
        </>
      )}
      {workExperience.length > 0 && (
        <>
          <SH>WORK EXPERIENCE</SH>
          {workExperience.map((w, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>
                {w.jobTitle} — {w.company}
              </div>
              <div style={{ fontSize: 11, marginBottom: 4 }}>
                {w.location} | {w.startDate} – {w.endDate}
              </div>
              <p style={{ fontSize: 12, lineHeight: 1.7, paddingLeft: 8 }}>
                {w.description}
              </p>
            </div>
          ))}
        </>
      )}
      {education.length > 0 && (
        <>
          <SH>EDUCATION</SH>
          {education.map((e, i) => (
            <div key={i} style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>
                {e.degree} in {e.fieldOfStudy}
              </div>
              <div style={{ fontSize: 12 }}>
                {e.institution} | {e.startDate} – {e.endDate}
                {e.gpa ? ` | GPA: ${e.gpa}` : ""}
              </div>
              {e.honors && <div style={{ fontSize: 11 }}>{e.honors}</div>}
            </div>
          ))}
        </>
      )}
      {skills.length > 0 && (
        <>
          <SH>SKILLS</SH>
          <div style={{ fontSize: 12, lineHeight: 1.8 }}>
            {skills.map((sk) => `${sk.name} (${sk.proficiency})`).join(" • ")}
          </div>
        </>
      )}
      {certifications.length > 0 && (
        <>
          <SH>CERTIFICATIONS</SH>
          {certifications.map((c, i) => (
            <div key={i} style={{ fontSize: 12, marginBottom: 4 }}>
              {c.name} | {c.organization} | {c.date}
            </div>
          ))}
        </>
      )}
      {projects.length > 0 && (
        <>
          <SH>PROJECTS</SH>
          {projects.map((pr, i) => (
            <div key={i} style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>{pr.name}</div>
              {pr.technologies.length > 0 && (
                <div style={{ fontSize: 11, marginBottom: 2 }}>
                  Technologies: {pr.technologies.join(", ")}
                </div>
              )}
              <p style={{ fontSize: 12, lineHeight: 1.7 }}>{pr.description}</p>
            </div>
          ))}
        </>
      )}
      {languages.length > 0 && (
        <>
          <SH>LANGUAGES</SH>
          <div style={{ fontSize: 12 }}>
            {languages.map((l) => `${l.name}: ${l.proficiency}`).join(" | ")}
          </div>
        </>
      )}
    </div>
  );
}

function SH({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 12,
        fontWeight: 700,
        textTransform: "uppercase" as const,
        letterSpacing: 1,
        borderBottom: "1px solid #000",
        paddingBottom: 2,
        marginBottom: 8,
        marginTop: 14,
      }}
    >
      {children}
    </div>
  );
}
