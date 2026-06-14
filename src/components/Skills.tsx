interface SkillGroup {
  label: string
  items: string[]
}

const skillGroups: SkillGroup[] = [
  {
    label: 'Languages & frameworks',
    items: ['C#', 'ASP.NET Core', 'JavaScript (ES6+)', 'TypeScript', 'React', 'SQL', 'Entity Framework Core']
  },
  {
    label: 'Frontend',
    items: ['Ext JS (Sencha)', 'Sencha Architect', 'React', 'Responsive UI', 'Bootstrap 5']
  },
  {
    label: 'Backend & APIs',
    items: ['ASP.NET Core Web API', 'RESTful services', 'Middleware', 'JWT authentication']
  },
  {
    label: 'Data',
    items: ['SQL Server (SSMS)', 'T-SQL', 'Liquibase', 'SSDT']
  },
  {
    label: 'Deployment & CI/CD',
    items: ['GitHub Actions', 'MonsterASP.NET', 'Vercel', 'Azure DevOps']
  },
  {
    label: 'Tools',
    items: ['Git', 'Visual Studio', 'VS Code', 'JIRA']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <p className="section-label">02 / skills</p>
            <h2 className="section-title">Tools I reach for</h2>
          </div>
        </div>
        <div className="row gy-4">
          {skillGroups.map((group) => (
            <div className="col-12 col-md-6 col-lg-4" key={group.label}>
              <h3 className="mono" style={{ fontSize: '0.95rem', color: 'var(--muted)' }}>
                {group.label}
              </h3>
              <div className="d-flex flex-wrap gap-2 mt-2">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
