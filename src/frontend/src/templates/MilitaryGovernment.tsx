import type { ResumeData } from "../types/resume";

const OLIVE = "#1C4532";
const KHAKI = "#F0FFF4";

export default function MilitaryGovernment({ data }: { data: ResumeData }) {
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
        fontFamily: "'Arial',sans-serif",
        color: "#000",
        padding: "44px 56px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          textAlign: "center",
          borderTop: `4px solid ${OLIVE}`,
          borderBottom: `4px solid ${OLIVE}`,
          padding: "18px 0",
          marginBottom: 24,
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase" as const,
          }}
        >
          {name}
        </div>
        <div
          style={{
            width: 80,
            height: 2,
            background: OLIVE,
            margin: "10px auto",
          }}
        />
        <div
          style={{
            fontSize: 11,
            letterSpacing: 2,
            textTransform: "uppercase" as const,
            color: "#555",
          }}
        >
          {[p.email, p.phone, p.address].filter(Boolean).join("  |  ")}
        </div>
      </div>
      {summary && (
        <>
          <SH>Objective / Summary</SH>
          <p
            style={{
              fontSize: 12,
              lineHeight: 1.8,
              color: "#222",
              marginBottom: 18,
            }}
          >
            {summary}
          </p>
        </>
      )}
      {workExperience.length > 0 && (
        <>
          <SH>Service / Employment History</SH>
          {workExperience.map((w, i) => (
            <div
              key={i}
              style={{
                marginBottom: 16,
                borderLeft: `4px solid ${OLIVE}`,
                paddingLeft: 14,
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  <tr>
                    <td
                      style={{
                        fontWeight: 700,
                        fontSize: 13,
                        paddingBottom: 2,
                      }}
                    >
                      {w.jobTitle}
                    </td>
                    <td
                      style={{
                        textAlign: "right",
                        fontSize: 11,
                        color: "#555",
                        verticalAlign: "top",
                        paddingBottom: 2,
                      }}
                    >
                      {w.startDate} – {w.endDate}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{ fontSize: 12, color: OLIVE, fontWeight: 600 }}
                      colSpan={2}
                    >
                      {w.company} | {w.location}
                    </td>
                  </tr>
                </tbody>
              </table>
              <p
                style={{
                  fontSize: 12,
                  lineHeight: 1.7,
                  color: "#333",
                  marginTop: 6,
                }}
              >
                {w.description}
              </p>
            </div>
          ))}
        </>
      )}
      {education.length > 0 && (
        <>
          <SH>Education &amp; Training</SH>
          {education.map((e, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 10,
                padding: "6px 10px",
                background: KHAKI,
                border: `1px solid ${OLIVE}33`,
              }}
            >
              <div>
                <div style={{ fontWeight: 700, fontSize: 12 }}>
                  {e.degree} in {e.fieldOfStudy}
                </div>
                <div style={{ fontSize: 12, color: OLIVE }}>
                  {e.institution}
                </div>
                {e.honors && (
                  <div style={{ fontSize: 11, color: "#555" }}>{e.honors}</div>
                )}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#555",
                  textAlign: "right" as const,
                }}
              >
                {e.startDate} – {e.endDate}
                {e.gpa ? <div>GPA: {e.gpa}</div> : null}
              </div>
            </div>
          ))}
        </>
      )}
      <div style={{ display: "flex", gap: 28 }}>
        {skills.length > 0 && (
          <div style={{ flex: 1 }}>
            <SH>Qualifications &amp; Skills</SH>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 12,
              }}
            >
              <tbody>
                {skills.map((sk, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #E5E7EB" }}>
                    <td
                      style={{
                        padding: "4px 0",
                        fontWeight: i < 3 ? 600 : 400,
                      }}
                    >
                      {sk.name}
                    </td>
                    <td
                      style={{
                        textAlign: "right" as const,
                        color: OLIVE,
                        fontSize: 11,
                      }}
                    >
                      {sk.proficiency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div style={{ flex: 1 }}>
          {certifications.length > 0 && (
            <>
              <SH>Certifications &amp; Clearances</SH>
              {certifications.map((c, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: 8,
                    padding: "4px 8px",
                    background: KHAKI,
                    borderLeft: `3px solid ${OLIVE}`,
                  }}
                >
                  <div style={{ fontSize: 12, fontWeight: 700 }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: "#555" }}>
                    {c.organization} | {c.date}
                  </div>
                </div>
              ))}
            </>
          )}
          {languages.length > 0 && (
            <>
              <SH>Foreign Language Proficiency</SH>
              {languages.map((l, i) => (
                <div key={i} style={{ fontSize: 12, marginBottom: 4 }}>
                  {l.name}: <strong>{l.proficiency}</strong>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
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
        letterSpacing: 2,
        color: OLIVE,
        borderTop: `2px solid ${OLIVE}`,
        borderBottom: `1px solid ${OLIVE}33`,
        padding: "4px 0",
        marginBottom: 10,
        marginTop: 20,
      }}
    >
      {children}
    </div>
  );
}
