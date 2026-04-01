import type { ResumeData } from "../types/resume";

const rose = "#B76E79";
const cream = "#FFF8F8";
const gold = "#C9A96E";

export default function ElegantPremium({ data }: { data: ResumeData }) {
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
        background: cream,
        fontFamily: "'Georgia',serif",
        color: "#2C1810",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: rose,
          color: "#fff",
          padding: "44px 52px 32px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 200,
            height: "100%",
            background: `linear-gradient(135deg,transparent,${gold}44)`,
          }}
        />
        <div
          style={{
            fontSize: 34,
            fontWeight: 400,
            letterSpacing: 3,
            fontStyle: "italic",
          }}
        >
          {name}
        </div>
        <div
          style={{
            width: 60,
            height: 1,
            background: "rgba(255,255,255,0.6)",
            margin: "12px 0",
          }}
        />
        <div style={{ fontSize: 12, opacity: 0.85, letterSpacing: 1 }}>
          {[p.email, p.phone, p.address].filter(Boolean).join("  ·  ")}
        </div>
        {(p.website || p.linkedIn) && (
          <div style={{ fontSize: 11, opacity: 0.7, marginTop: 4 }}>
            {[p.website, p.linkedIn].filter(Boolean).join("  ·  ")}
          </div>
        )}
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, padding: "32px 36px" }}>
          {summary && (
            <>
              <ESH color={rose}>Profile</ESH>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.9,
                  color: "#5C3D35",
                  fontStyle: "italic",
                  marginBottom: 24,
                }}
              >
                {summary}
              </p>
            </>
          )}
          {workExperience.length > 0 && (
            <>
              <ESH color={rose}>Professional Experience</ESH>
              {workExperience.map((w, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: 20,
                    paddingLeft: 16,
                    borderLeft: `2px solid ${rose}44`,
                  }}
                >
                  <div
                    style={{ fontWeight: 700, fontSize: 13, color: "#2C1810" }}
                  >
                    {w.jobTitle}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: rose,
                      fontStyle: "italic",
                      marginBottom: 2,
                    }}
                  >
                    {w.company}, {w.location}
                  </div>
                  <div style={{ fontSize: 11, color: gold, marginBottom: 6 }}>
                    {w.startDate} – {w.endDate}
                  </div>
                  <p
                    style={{ fontSize: 12, color: "#5C3D35", lineHeight: 1.8 }}
                  >
                    {w.description}
                  </p>
                </div>
              ))}
            </>
          )}
          {projects.length > 0 && (
            <>
              <ESH color={rose}>Featured Projects</ESH>
              {projects.map((pr, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: 14,
                    padding: "12px 16px",
                    background: "#FFF0F0",
                    borderRadius: 8,
                    border: `1px solid ${rose}22`,
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: 13, color: rose }}>
                    {pr.name}
                  </div>
                  <p
                    style={{ fontSize: 12, color: "#5C3D35", lineHeight: 1.7 }}
                  >
                    {pr.description}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
        <div
          style={{ width: 220, background: "#FFF0F0", padding: "32px 22px" }}
        >
          {education.length > 0 && (
            <>
              <ESH color={rose}>Education</ESH>
              {education.map((e, i) => (
                <div key={i} style={{ marginBottom: 14 }}>
                  <div
                    style={{ fontSize: 13, fontWeight: 700, color: "#2C1810" }}
                  >
                    {e.degree}
                  </div>
                  <div
                    style={{ fontSize: 12, color: rose, fontStyle: "italic" }}
                  >
                    {e.fieldOfStudy}
                  </div>
                  <div style={{ fontSize: 11, color: "#7C4D45" }}>
                    {e.institution}
                  </div>
                  <div style={{ fontSize: 10, color: gold }}>
                    {e.startDate} – {e.endDate}
                  </div>
                </div>
              ))}
            </>
          )}
          {skills.length > 0 && (
            <>
              <ESH color={rose}>Expertise</ESH>
              {skills.map((sk, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <div
                    style={{ fontSize: 11, color: "#5C3D35", marginBottom: 2 }}
                  >
                    {sk.name}
                  </div>
                  <div
                    style={{
                      height: 3,
                      background: "#F9D7D7",
                      borderRadius: 2,
                    }}
                  >
                    <div
                      style={{
                        height: 3,
                        background: `linear-gradient(90deg,${rose},${gold})`,
                        borderRadius: 2,
                        width: pw(sk.proficiency),
                      }}
                    />
                  </div>
                </div>
              ))}
            </>
          )}
          {certifications.length > 0 && (
            <>
              <ESH color={rose}>Certifications</ESH>
              {certifications.map((c, i) => (
                <div
                  key={i}
                  style={{ fontSize: 11, color: "#5C3D35", marginBottom: 6 }}
                >
                  <div style={{ fontWeight: 600, color: "#2C1810" }}>
                    {c.name}
                  </div>
                  <div style={{ fontStyle: "italic" }}>{c.organization}</div>
                </div>
              ))}
            </>
          )}
          {languages.length > 0 && (
            <>
              <ESH color={rose}>Languages</ESH>
              {languages.map((l, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: 11,
                    color: "#5C3D35",
                    marginBottom: 4,
                    fontStyle: "italic",
                  }}
                >
                  {l.name} — {l.proficiency}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ESH({
  color,
  children,
}: { color: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 2.5,
        textTransform: "uppercase" as const,
        color,
        borderBottom: `1px solid ${color}55`,
        paddingBottom: 5,
        marginBottom: 12,
        marginTop: 20,
      }}
    >
      {children}
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
