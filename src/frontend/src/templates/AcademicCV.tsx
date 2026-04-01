import type { ResumeData } from "../types/resume";

const navy = "#1E3A5F";

export default function AcademicCV({ data }: { data: ResumeData }) {
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
        fontFamily: "'Times New Roman',serif",
        color: "#111",
        padding: "48px 64px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: 0.5 }}>
          {name}
        </div>
        <div style={{ fontSize: 12, color: "#444", marginTop: 6 }}>
          {[p.address, p.email, p.phone].filter(Boolean).join(" | ")}
        </div>
        {(p.website || p.linkedIn) && (
          <div style={{ fontSize: 12, color: navy, marginTop: 3 }}>
            {[p.website, p.linkedIn].filter(Boolean).join(" | ")}
          </div>
        )}
      </div>
      <div
        style={{
          borderTop: `2px solid ${navy}`,
          borderBottom: `1px solid ${navy}`,
          padding: "6px 0",
          textAlign: "center",
          marginBottom: 24,
          fontSize: 11,
          color: navy,
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        Curriculum Vitae
      </div>
      {summary && (
        <>
          <AH>Research Interests & Overview</AH>
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.9,
              color: "#333",
              marginBottom: 20,
            }}
          >
            {summary}
          </p>
        </>
      )}
      {education.length > 0 && (
        <>
          <AH>Education</AH>
          {education.map((e, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ fontWeight: 700, fontSize: 13 }}>
                  {e.degree} in {e.fieldOfStudy}
                </div>
                <div style={{ fontSize: 12, color: "#666" }}>
                  {e.startDate} – {e.endDate}
                </div>
              </div>
              <div style={{ fontSize: 13, color: navy }}>{e.institution}</div>
              {(e.gpa || e.honors) && (
                <div style={{ fontSize: 12, color: "#666" }}>
                  {[e.gpa && `GPA: ${e.gpa}`, e.honors]
                    .filter(Boolean)
                    .join(" · ")}
                </div>
              )}
            </div>
          ))}
        </>
      )}
      {workExperience.length > 0 && (
        <>
          <AH>Academic & Professional Experience</AH>
          {workExperience.map((w, i) => (
            <div key={i} style={{ marginBottom: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ fontWeight: 700, fontSize: 13 }}>
                  {w.jobTitle}
                </div>
                <div style={{ fontSize: 12, color: "#666" }}>
                  {w.startDate} – {w.endDate}
                </div>
              </div>
              <div style={{ fontSize: 13, color: navy }}>
                {w.company}, {w.location}
              </div>
              <p
                style={{
                  fontSize: 12,
                  lineHeight: 1.8,
                  color: "#333",
                  marginTop: 4,
                }}
              >
                {w.description}
              </p>
            </div>
          ))}
        </>
      )}
      {projects.length > 0 && (
        <>
          <AH>Research Projects & Publications</AH>
          {projects.map((pr, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <div style={{ fontWeight: 700, fontSize: 13 }}>{pr.name}</div>
              {pr.technologies.length > 0 && (
                <div
                  style={{ fontSize: 12, color: "#666", fontStyle: "italic" }}
                >
                  Keywords: {pr.technologies.join(", ")}
                </div>
              )}
              <p style={{ fontSize: 12, lineHeight: 1.8, color: "#333" }}>
                {pr.description}
              </p>
              {pr.website && (
                <div style={{ fontSize: 11, color: navy }}>{pr.website}</div>
              )}
            </div>
          ))}
        </>
      )}
      {certifications.length > 0 && (
        <>
          <AH>Awards & Honors</AH>
          {certifications.map((c, i) => (
            <div
              key={i}
              style={{ fontSize: 12, color: "#333", marginBottom: 6 }}
            >
              <strong>{c.name}</strong>, {c.organization}, {c.date}
            </div>
          ))}
        </>
      )}
      <div style={{ display: "flex", gap: 32, marginTop: 4 }}>
        {skills.length > 0 && (
          <div style={{ flex: 1 }}>
            <AH>Research Skills & Methods</AH>
            <div style={{ fontSize: 12, color: "#333", lineHeight: 2 }}>
              {skills.map((sk) => sk.name).join(" · ")}
            </div>
          </div>
        )}
        {languages.length > 0 && (
          <div style={{ flex: 1 }}>
            <AH>Languages</AH>
            {languages.map((l, i) => (
              <div key={i} style={{ fontSize: 12, color: "#333" }}>
                {l.name}: {l.proficiency}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function AH({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 13,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 1.5,
        color: navy,
        borderBottom: `1px solid ${navy}`,
        paddingBottom: 3,
        marginBottom: 10,
        marginTop: 20,
      }}
    >
      {children}
    </div>
  );
}
