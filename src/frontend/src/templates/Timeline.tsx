import type { ResumeData } from "../types/resume";

const purple = "#7C3AED";

export default function Timeline({ data }: { data: ResumeData }) {
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
        fontFamily: "'Helvetica Neue',Arial,sans-serif",
        padding: "44px 52px",
        boxSizing: "border-box",
        color: "#1e293b",
      }}
    >
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 30, fontWeight: 700, color: "#111827" }}>
          {name}
        </div>
        <div
          style={{ fontSize: 13, color: purple, fontWeight: 600, marginTop: 4 }}
        >
          Senior Software Engineer
        </div>
        <div
          style={{
            display: "flex",
            gap: 18,
            flexWrap: "wrap",
            fontSize: 12,
            color: "#6B7280",
            marginTop: 8,
          }}
        >
          {p.email && <span>{p.email}</span>}
          {p.phone && <span>{p.phone}</span>}
          {p.address && <span>{p.address}</span>}
          {p.website && <span>{p.website}</span>}
        </div>
      </div>
      {summary && (
        <div
          style={{
            fontSize: 13,
            color: "#4B5563",
            lineHeight: 1.8,
            marginBottom: 28,
            padding: "14px 18px",
            background: "#FAF5FF",
            borderLeft: `3px solid ${purple}`,
            borderRadius: "0 6px 6px 0",
          }}
        >
          {summary}
        </div>
      )}
      <div style={{ display: "flex", gap: 40 }}>
        <div style={{ flex: 1 }}>
          {workExperience.length > 0 && (
            <>
              <SH color={purple}>Experience</SH>
              {workExperience.map((w, i) => (
                <TLItem
                  key={i}
                  color={purple}
                  date={`${w.startDate} – ${w.endDate}`}
                >
                  <div style={{ fontWeight: 700, fontSize: 13 }}>
                    {w.jobTitle}
                  </div>
                  <div style={{ fontSize: 12, color: purple, fontWeight: 600 }}>
                    {w.company} · {w.location}
                  </div>
                  <p
                    style={{
                      fontSize: 12,
                      color: "#6B7280",
                      lineHeight: 1.6,
                      marginTop: 4,
                    }}
                  >
                    {w.description}
                  </p>
                </TLItem>
              ))}
            </>
          )}
          {education.length > 0 && (
            <>
              <SH color={purple}>Education</SH>
              {education.map((e, i) => (
                <TLItem
                  key={i}
                  color={purple}
                  date={`${e.startDate} – ${e.endDate}`}
                >
                  <div style={{ fontWeight: 700, fontSize: 13 }}>
                    {e.degree} in {e.fieldOfStudy}
                  </div>
                  <div style={{ fontSize: 12, color: purple }}>
                    {e.institution}
                  </div>
                  {e.gpa && (
                    <div style={{ fontSize: 11, color: "#9CA3AF" }}>
                      GPA: {e.gpa} {e.honors ? `· ${e.honors}` : ""}
                    </div>
                  )}
                </TLItem>
              ))}
            </>
          )}
        </div>
        <div style={{ width: 200 }}>
          {skills.length > 0 && (
            <>
              <SH color={purple}>Skills</SH>
              {skills.map((sk, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>{sk.name}</div>
                  <div
                    style={{
                      height: 4,
                      background: "#EDE9FE",
                      borderRadius: 2,
                    }}
                  >
                    <div
                      style={{
                        height: 4,
                        background: purple,
                        borderRadius: 2,
                        width: pw(sk.proficiency),
                      }}
                    />
                  </div>
                </div>
              ))}
            </>
          )}
          {languages.length > 0 && (
            <>
              <SH color={purple}>Languages</SH>
              {languages.map((l, i) => (
                <div
                  key={i}
                  style={{ fontSize: 12, color: "#4B5563", marginBottom: 4 }}
                >
                  {l.name} – <em>{l.proficiency}</em>
                </div>
              ))}
            </>
          )}
          {certifications.length > 0 && (
            <>
              <SH color={purple}>Certifications</SH>
              {certifications.map((c, i) => (
                <div
                  key={i}
                  style={{ fontSize: 11, color: "#4B5563", marginBottom: 6 }}
                >
                  <div style={{ fontWeight: 600 }}>{c.name}</div>
                  <div style={{ color: "#9CA3AF" }}>{c.organization}</div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function SH({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 12,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 1.5,
        color,
        borderBottom: `2px solid ${color}22`,
        paddingBottom: 4,
        marginBottom: 14,
        marginTop: 20,
      }}
    >
      {children}
    </div>
  );
}

function TLItem({
  date,
  color,
  children,
}: { date: string; color: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 0, marginBottom: 18 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: 14,
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: color,
            flexShrink: 0,
            marginTop: 4,
          }}
        />
        <div
          style={{ flex: 1, width: 2, background: `${color}33`, marginTop: 4 }}
        />
      </div>
      <div style={{ flex: 1, paddingBottom: 4 }}>
        <div style={{ fontSize: 10, color: "#9CA3AF", marginBottom: 4 }}>
          {date}
        </div>
        {children}
      </div>
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
