import type { ResumeData } from "../types/resume";

export default function Minimalist({ data }: { data: ResumeData }) {
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
  const s: Record<string, string> = {
    page: "background:#fff;color:#1a1a1a;font-family:'Georgia',serif;padding:60px 70px;width:794px;min-height:1123px;box-sizing:border-box",
    name: "font-size:32px;font-weight:300;letter-spacing:4px;text-transform:uppercase;margin-bottom:4px",
    title:
      "font-size:13px;color:#888;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px",
    contact:
      "font-size:11px;color:#666;display:flex;gap:20px;flex-wrap:wrap;margin-bottom:36px",
    sectionTitle:
      "font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#999;margin-bottom:8px;margin-top:28px",
    divider: "border:none;border-top:1px solid #e0e0e0;margin-bottom:16px",
    jobTitle: "font-size:13px;font-weight:600;color:#1a1a1a",
    company: "font-size:12px;color:#555",
    date: "font-size:11px;color:#aaa",
    desc: "font-size:12px;color:#555;margin-top:4px;line-height:1.6",
    summary: "font-size:13px;color:#555;line-height:1.8",
    skillTag:
      "display:inline-block;font-size:11px;color:#666;margin:2px 10px 2px 0",
  };
  return (
    <div style={{ ...parseStyle(s.page) }}>
      <div style={{ ...parseStyle(s.name) }}>{name}</div>
      <div style={{ ...parseStyle(s.title) }}>{p.address}</div>
      <div style={{ ...parseStyle(s.contact) }}>
        {p.email && <span>{p.email}</span>}
        {p.phone && <span>{p.phone}</span>}
        {p.website && <span>{p.website}</span>}
        {p.linkedIn && <span>{p.linkedIn}</span>}
      </div>
      {summary && (
        <>
          <div style={{ ...parseStyle(s.sectionTitle) }}>Profile</div>
          <hr style={{ ...parseStyle(s.divider) }} />
          <p style={{ ...parseStyle(s.summary) }}>{summary}</p>
        </>
      )}
      {workExperience.length > 0 && (
        <>
          <div style={{ ...parseStyle(s.sectionTitle) }}>Experience</div>
          <hr style={{ ...parseStyle(s.divider) }} />
          {workExperience.map((w, i) => (
            <div key={i} style={{ marginBottom: "18px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <div style={{ ...parseStyle(s.jobTitle) }}>{w.jobTitle}</div>
                  <div style={{ ...parseStyle(s.company) }}>
                    {w.company} — {w.location}
                  </div>
                </div>
                <div style={{ ...parseStyle(s.date) }}>
                  {w.startDate} – {w.endDate}
                </div>
              </div>
              <p style={{ ...parseStyle(s.desc) }}>{w.description}</p>
            </div>
          ))}
        </>
      )}
      {education.length > 0 && (
        <>
          <div style={{ ...parseStyle(s.sectionTitle) }}>Education</div>
          <hr style={{ ...parseStyle(s.divider) }} />
          {education.map((e, i) => (
            <div key={i} style={{ marginBottom: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <div style={{ ...parseStyle(s.jobTitle) }}>
                    {e.degree} in {e.fieldOfStudy}
                  </div>
                  <div style={{ ...parseStyle(s.company) }}>
                    {e.institution}
                  </div>
                </div>
                <div style={{ ...parseStyle(s.date) }}>
                  {e.startDate} – {e.endDate}
                </div>
              </div>
            </div>
          ))}
        </>
      )}
      {skills.length > 0 && (
        <>
          <div style={{ ...parseStyle(s.sectionTitle) }}>Skills</div>
          <hr style={{ ...parseStyle(s.divider) }} />
          <div>
            {skills.map((sk, i) => (
              <span key={i} style={{ ...parseStyle(s.skillTag) }}>
                {sk.name}
              </span>
            ))}
          </div>
        </>
      )}
      {projects.length > 0 && (
        <>
          <div style={{ ...parseStyle(s.sectionTitle) }}>Projects</div>
          <hr style={{ ...parseStyle(s.divider) }} />
          {projects.map((pr, i) => (
            <div key={i} style={{ marginBottom: "12px" }}>
              <div style={{ ...parseStyle(s.jobTitle) }}>{pr.name}</div>
              <p style={{ ...parseStyle(s.desc) }}>{pr.description}</p>
            </div>
          ))}
        </>
      )}
      {certifications.length > 0 && (
        <>
          <div style={{ ...parseStyle(s.sectionTitle) }}>Certifications</div>
          <hr style={{ ...parseStyle(s.divider) }} />
          {certifications.map((c, i) => (
            <div key={i} style={{ ...parseStyle(s.desc), marginBottom: "8px" }}>
              <strong>{c.name}</strong> — {c.organization}, {c.date}
            </div>
          ))}
        </>
      )}
      {languages.length > 0 && (
        <>
          <div style={{ ...parseStyle(s.sectionTitle) }}>Languages</div>
          <hr style={{ ...parseStyle(s.divider) }} />
          <div style={{ display: "flex", gap: "24px" }}>
            {languages.map((l, i) => (
              <span key={i} style={{ ...parseStyle(s.desc) }}>
                {l.name} <em>({l.proficiency})</em>
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function parseStyle(css: string): React.CSSProperties {
  const result: Record<string, string> = {};
  for (const rule of css.split(";")) {
    const [prop, ...val] = rule.split(":");
    if (prop && val.length) {
      const key = prop
        .trim()
        .replace(/-([a-z])/g, (_m: string, c: string) => c.toUpperCase());
      result[key] = val.join(":").trim();
    }
  }
  return result as React.CSSProperties;
}
